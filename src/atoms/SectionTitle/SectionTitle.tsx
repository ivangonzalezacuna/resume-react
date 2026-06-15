import { m } from "framer-motion";
import { titleStyle, wrapperStyle } from "./SectionTitle.css";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className={wrapperStyle}>
      <m.h2
        className={titleStyle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {title}
      </m.h2>
    </div>
  );
};
