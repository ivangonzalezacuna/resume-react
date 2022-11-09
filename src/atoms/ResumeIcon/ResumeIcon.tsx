import { useTranslation } from "react-i18next";
import * as AndroidIcon from "../../images/skills/android.svg";
import * as AngularIcon from "../../images/skills/angular.svg";
import * as BashIcon from "../../images/skills/bash.svg";
import * as CIcon from "../../images/skills/c-programming.svg";
import * as Css3Icon from "../../images/skills/css3.svg";
import * as DockerIcon from "../../images/skills/docker.svg";
import * as GitIcon from "../../images/skills/git.svg";
import * as GolangIcon from "../../images/skills/golang.svg";
import * as Html5Icon from "../../images/skills/html5.svg";
import * as JavaIcon from "../../images/skills/java.svg";
import * as JavascriptIcon from "../../images/skills/javascript.svg";
import * as KubernetesIcon from "../../images/skills/kubernetes.svg";
import * as LinuxIcon from "../../images/skills/linux.svg";
import * as MongoDbIcon from "../../images/skills/mongodb.svg";
import * as MySqlIcon from "../../images/skills/mysql.svg";
import * as NodeJSIcon from "../../images/skills/nodejs.svg";
import * as NpmIcon from "../../images/skills/npm.svg";
import * as PostgreSqlIcon from "../../images/skills/postgresql.svg";
import * as PythonIcon from "../../images/skills/python.svg";
import * as QtIcon from "../../images/skills/qt.svg";
import * as ReactIcon from "../../images/skills/react.svg";
import * as SwiftIcon from "../../images/skills/swift.svg";
import * as TypescriptIcon from "../../images/skills/typescript.svg";
import * as UbuntuIcon from "../../images/skills/ubuntu.svg";
import * as VsCodeIcon from "../../images/skills/vs-code.svg";
import * as WindowsIcon from "../../images/skills/windows.svg";
import * as YarnIcon from "../../images/skills/yarn.svg";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa";
import { SkillIcon, SkillWrapper, SocialIcon, SocialWrapper } from "./styles";
import { Variants } from "framer-motion";

export type ResumeIconProps = {
  social?: boolean;
  skill?: boolean;
  row?: boolean;
  header?: boolean;
  variants?: Variants;
  icon?: string;
};

export const ResumeIcon = ({
  social,
  skill,
  row,
  header,
  variants,
  icon,
}: ResumeIconProps) => {
  const [t] = useTranslation("social");
  const icons = t("links", { returnObjects: true }) || [];

  if (social) {
    return (
      <SocialWrapper row={row ? 1 : 0} header={header ? 1 : 0}>
        {icons.map((icon, key) => (
          <SocialIcon
            key={key}
            row={row ? 1 : 0}
            header={header ? 1 : 0}
            href={icon.href}
            target="_blank"
            variants={variants}
            animate={{ opacity: 1 }}
            whileHover={{ opacity: 0.85, scale: 1.05 }}
          >
            {icon.name === "linkedin" && <FaLinkedinIn />}
            {icon.name === "github" && <FaGithub />}
            {icon.name === "skype" && <FaSkype />}
            {icon.name === "facebook" && <FaFacebookF />}
            {icon.name === "instagram" && <FaInstagram />}
          </SocialIcon>
        ))}
      </SocialWrapper>
    );
  } else if (skill) {
    return (
      <SkillWrapper variants={variants}>
        <SvgIcon icon={(icon || "").toLowerCase()} />
      </SkillWrapper>
    );
  }
  return <></>;
};

const SvgIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "android":
      return <SkillIcon src={AndroidIcon.default} alt="android" />;
    case "angular":
      return <SkillIcon src={AngularIcon.default} alt="angular" />;
    case "bash":
      return <SkillIcon src={BashIcon.default} alt="bash" />;
    case "c":
      return <SkillIcon src={CIcon.default} alt="c" />;
    case "css":
      return <SkillIcon src={Css3Icon.default} alt="css" />;
    case "docker":
      return <SkillIcon src={DockerIcon.default} alt="docker" />;
    case "git":
      return <SkillIcon src={GitIcon.default} alt="git" />;
    case "golang":
      return <SkillIcon src={GolangIcon.default} alt="golang" />;
    case "html":
      return <SkillIcon src={Html5Icon.default} alt="html" />;
    case "java":
      return <SkillIcon src={JavaIcon.default} alt="java" />;
    case "javascript":
      return <SkillIcon src={JavascriptIcon.default} alt="javascript" />;
    case "kubernetes":
      return <SkillIcon src={KubernetesIcon.default} alt="kubernetes" />;
    case "linux":
      return <SkillIcon src={LinuxIcon.default} alt="linux" />;
    case "mongodb":
      return <SkillIcon src={MongoDbIcon.default} alt="mongodb" />;
    case "mysql":
      return <SkillIcon src={MySqlIcon.default} alt="mysql" />;
    case "nodejs":
      return <SkillIcon src={NodeJSIcon.default} alt="nodejs" />;
    case "npm":
      return <SkillIcon src={NpmIcon.default} alt="npm" />;
    case "postgresql":
      return <SkillIcon src={PostgreSqlIcon.default} alt="postgresql" />;
    case "python":
      return <SkillIcon src={PythonIcon.default} alt="python" />;
    case "qt":
      return <SkillIcon src={QtIcon.default} alt="qt" />;
    case "react":
      return <SkillIcon src={ReactIcon.default} alt="react" />;
    case "swift":
      return <SkillIcon src={SwiftIcon.default} alt="swift" />;
    case "typescript":
      return <SkillIcon src={TypescriptIcon.default} alt="typescript" />;
    case "ubuntu":
      return <SkillIcon src={UbuntuIcon.default} alt="ubuntu" />;
    case "vscode":
      return <SkillIcon src={VsCodeIcon.default} alt="vscode" />;
    case "windows":
      return <SkillIcon src={WindowsIcon.default} alt="windows" />;
    case "yarn":
      return <SkillIcon src={YarnIcon.default} alt="yarn" />;
    default:
      return (
        <BsFillQuestionOctagonFill
          style={{ width: 80, height: 80, color: "#f9f9f9" }}
        />
      );
  }
};
