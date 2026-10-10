import { m } from "framer-motion";
import { SectionTitle } from "../../atoms/SectionTitle";
import { staggerContainer, staggerItem } from "../../styles/motion";
import portfolio from "../../content/portfolio";
import {
  contactSection,
  sectionInner,
  callout,
  linkList,
  linkItem,
  channelRow,
  channelAnchor,
  channelName,
  channelMeta,
} from "./Contact.css";

type Channel = {
  label: string;
  meta: string;
  href: string;
};

const channels: Channel[] = [
  {
    label: "Email",
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
    <section
      id="contact"
      className={contactSection}
      aria-labelledby="contact-heading"
    >
      <div className={sectionInner}>
        <SectionTitle title="Contact" id="contact-heading" />
        <m.p
          className={callout}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Seeking platform engineering challenges or internal tool design
          opportunities. Drop a direct message across preferred channels.
        </m.p>
        <m.ul
          className={linkList}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {channels.map((channel) => {
            const isExternal = !channel.href.startsWith("mailto:");
            return (
              <m.li
                key={channel.label}
                className={linkItem}
                variants={staggerItem}
              >
                <div className={channelRow}>
                  <a
                    className={channelAnchor}
                    href={channel.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={
                      isExternal
                        ? `${channel.label} (opens in new tab)`
                        : channel.label
                    }
                  >
                    <span className={channelName}>{channel.label}</span>
                    <span className={channelMeta}>{channel.meta}</span>
                  </a>
                </div>
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </section>
  );
};
