const mailjet = require('node-mailjet')

exports.handler = function (event, context, callback) {
  data = JSON.parse(event.body)
  if (data.subject === "") {
    data.subject = "Resume Contact Form"
  }

  mailjetClient = mailjet.connect(process.env.MAILJET_APIKEY_PUBLIC, process.env.MAILJET_APIKEY_SECRET)

  const request = mailjetClient
    .post("send", { 'version': 'v3.1' })
    .request({
      "Messages": [
        {
          "From": {
            "Email": process.env.MAILJET_FROM,
            "Name": data.name
          },
          "To": [
            {
              "Email": process.env.MAILJET_TO,
              "Name": "Iván González"
            }
          ],
          "Subject": data.subject,
          "TextPart": `From ${data.name}\nReply to: ${data.email}\nMessage:\n\n${data.message}`,
        }
      ]
    })
  request
    .then((result) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: result.statusText })
      })
    })
    .catch((err) => {
      callback(null, {
        statusCode: err.statusCode,
        body: JSON.stringify({ message: err.message })
      })
    })
}


