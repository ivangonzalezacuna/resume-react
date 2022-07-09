import Mailjet from "node-mailjet";
import { Handler, HandlerEvent } from "@netlify/functions";
import { ContactForm } from "../../src/types/types";

/*
Created image using https://postimg.cc.
Real link: https://i.postimg.cc/jSdWCnfR/logo192.png
Delete link: https://postimg.cc/delete/Bkt8FcrD/1b119a53
*/

const textPart =
  "You have received a new message from {{var:sender}} {{var:email}}>\n\n\nSender: {{var:sender}}\n\nMessage:\n{{var:message}}";
const htmlPart = `
<body style="font-family:verdana">
  <div style="background-color: #dbe5f0; margin: 30px;">
    <div style="padding: 30px 30px 50px 30px;">
      <img style="display: block; margin-left: auto; margin-right: auto;" alt="logo" src="https://i.postimg.cc/jSdWCnfR/logo192.png">
      <h2 style="color: #335384; padding-top: 20px; padding-bottom: 40px; text-align: center;">New message received!</h2>
      <p style="font-size: 14px; margin-bottom: 30px;">Received a new message from <strong>{{var:sender}}</strong> with email <em>{{var:email}}</em></p>
      <hr style="border-radius: 2px; border-top: 2px solid #335384; border-left: 0; border-right: 0; border-bottom: 0; padding: 10px;" />
      <cite style="font-size: 14px; background-color: #c5ced8; border-radius: 4px; padding: 8px; display:block; white-space: pre-wrap;">{{var:message}}</cite>
    </div>
  </div>
</body>
`;

const handler: Handler = async (event: HandlerEvent) => {
  const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_APIKEY_PUBLIC,
    apiSecret: process.env.MAILJET_APIKEY_SECRET,
  });

  const data: ContactForm = JSON.parse(event.body ?? "");
  const request = await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.MAILJET_FROM,
          Name: data.name,
        },
        To: [
          {
            Email: process.env.MAILJET_TO,
            Name: "Iván González",
          },
        ],
        TemplateLanguage: true,
        Subject: data.subject ?? "Resume Contact Form",
        HtmlPart: htmlPart,
        TextPart: textPart,
        Variables: {
          sender: data.name,
          email: data.email,
          message: data.message,
          subject: data.subject,
        },
      },
    ],
  });

  return {
    statusCode: request.response.status,
    body: request.response.statusText,
  };
};

export { handler };
