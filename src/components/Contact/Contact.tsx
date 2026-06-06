import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { SectionTitle } from "../../atoms/SectionTitle";
import portfolio from "../../content/portfolio";
import {
  ContactSection,
  SectionInner,
  Callout,
  LinkList,
  LinkItem,
  ChannelRow,
  ChannelAnchor,
  ChannelName,
  ChannelMeta,
  CopyButton,
} from "./styles";

type Channel = {
  label: string;
  meta: string;
  href: string;
  copyValue?: string;
};

const channels: Channel[] = [
  {
    label: "Email",
    meta: "Direct message — preferred for first contact",
    href: `mailto:${portfolio.social.email}`,
    copyValue: portfolio.social.email,
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
  const [copied, setCopied] = useState(false);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

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
            const isExternal = !channel.href.startsWith("mailto:");
            return (
              <LinkItem
                key={channel.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
              >
                <ChannelRow>
                  <ChannelAnchor
                    href={channel.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={channel.label}
                  >
                    <ChannelName>{channel.label}</ChannelName>
                    <ChannelMeta>{channel.meta}</ChannelMeta>
                  </ChannelAnchor>
                  {channel.copyValue && (
                    <CopyButton
                      onClick={() => handleCopy(channel.copyValue!)}
                      aria-label="Copy email address"
                      $copied={copied}
                    >
                      {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                    </CopyButton>
                  )}
                </ChannelRow>
              </LinkItem>
            );
          })}
        </LinkList>
      </SectionInner>
    </ContactSection>
  );
};
