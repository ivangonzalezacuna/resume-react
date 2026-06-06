import { SectionTitle } from "../../atoms/SectionTitle";
import portfolio from "../../content/portfolio";
import {
  ContactSection,
  SectionInner,
  Callout,
  LinkList,
  LinkItem,
  ChannelAnchor,
  ChannelName,
  ChannelMeta,
} from "./styles";

const channels = [
  {
    label: portfolio.social.email,
    meta: "Direct message — preferred for first contact",
    href: `mailto:${portfolio.social.email}`,
  },
  {
    label: "LinkedIn",
    meta: "Professional profile — connect or message",
    href: portfolio.social.linkedin,
  },
  {
    label: "GitHub",
    meta: "Open source — code, contributions, projects",
    href: portfolio.social.github,
  },
];

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionInner>
        <SectionTitle title="Contact" />
        <Callout
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Seeking platform engineering challenges or internal tool design
          opportunities. Drop a direct message across preferred channels.
        </Callout>
        <LinkList>
          {channels.map((channel, i) => {
            const isEmail = channel.href.startsWith("mailto:");
            return (
              <LinkItem
                key={channel.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
              >
                <ChannelAnchor
                  href={channel.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  aria-label={channel.label}
                >
                  <ChannelName>{channel.label}</ChannelName>
                  <ChannelMeta>{channel.meta}</ChannelMeta>
                </ChannelAnchor>
              </LinkItem>
            );
          })}
        </LinkList>
      </SectionInner>
    </ContactSection>
  );
};
