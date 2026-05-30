import { useTranslation } from "react-i18next";
import { Language } from "./styles";

export const Languages = (opts: { onClick?: () => void }) => {
  const [, i18n] = useTranslation();

  const languages: { value: "en" | "es"; options: string[] }[] = [
    { value: "en", options: ["en", "en-US"] },
    { value: "es", options: ["es", "es-ES"] },
  ];

  const onClickExtended = (lang: "en" | "es") => {
    i18n.changeLanguage(lang);
    if (opts.onClick) {
      opts.onClick();
    }
  };

  return (
    <>
      {languages.map((item, key) => (
        <Language
          key={key}
          onClick={() => onClickExtended(item.value)}
          currentLang={item.options.includes(i18n.language)}
        >
          {item.value.toUpperCase()}
        </Language>
      ))}
    </>
  );
};
