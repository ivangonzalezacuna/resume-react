import React from "react";
import { Logo, LogoWrap } from "./IconElement";
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

const IconSvg = ({ icon }) => {
  if (icon === "android") {
    return <Logo src={AndroidIcon.default} alt="android" />;
  } else if (icon === "angular") {
    return <Logo src={AngularIcon.default} alt="angular" />;
  } else if (icon === "bash") {
    return <Logo src={BashIcon.default} alt="bash" />;
  } else if (icon === "c") {
    return <Logo src={CIcon.default} alt="c" />;
  } else if (icon === "css") {
    return <Logo src={Css3Icon.default} alt="css" />;
  } else if (icon === "docker") {
    return <Logo src={DockerIcon.default} alt="docker" />;
  } else if (icon === "git") {
    return <Logo src={GitIcon.default} alt="git" />;
  } else if (icon === "golang") {
    return <Logo src={GolangIcon.default} alt="golang" />;
  } else if (icon === "html") {
    return <Logo src={Html5Icon.default} alt="html" />;
  } else if (icon === "java") {
    return <Logo src={JavaIcon.default} alt="java" />;
  } else if (icon === "javascript") {
    return <Logo src={JavascriptIcon.default} alt="javascript" />;
  } else if (icon === "kubernetes") {
    return <Logo src={KubernetesIcon.default} alt="kubernetes" />;
  } else if (icon === "linux") {
    return <Logo src={LinuxIcon.default} alt="linux" />;
  } else if (icon === "mongodb") {
    return <Logo src={MongoDbIcon.default} alt="mongodb" />;
  } else if (icon === "mysql") {
    return <Logo src={MySqlIcon.default} alt="mysql" />;
  } else if (icon === "nodejs") {
    return <Logo src={NodeJSIcon.default} alt="nodejs" />;
  } else if (icon === "npm") {
    return <Logo src={NpmIcon.default} alt="npm" />;
  } else if (icon === "postgresql") {
    return <Logo src={PostgreSqlIcon.default} alt="postgresql" />;
  } else if (icon === "python") {
    return <Logo src={PythonIcon.default} alt="python" />;
  } else if (icon === "qt") {
    return <Logo src={QtIcon.default} alt="qt" />;
  } else if (icon === "react") {
    return <Logo src={ReactIcon.default} alt="react" />;
  } else if (icon === "swift") {
    return <Logo src={SwiftIcon.default} alt="swift" />;
  } else if (icon === "typescript") {
    return <Logo src={TypescriptIcon.default} alt="typescript" />;
  } else if (icon === "ubuntu") {
    return <Logo src={UbuntuIcon.default} alt="ubuntu" />;
  } else if (icon === "vscode") {
    return <Logo src={VsCodeIcon.default} alt="vscode" />;
  } else if (icon === "windows") {
    return <Logo src={WindowsIcon.default} alt="windows" />;
  } else if (icon === "yarn") {
    return <Logo src={YarnIcon.default} alt="yarn" />;
  }
  return (
    <BsFillQuestionOctagonFill
      style={{ width: 80, height: 80, color: "#f9f9f9" }}
    />
  );
};

const Icon = ({ icon, variants }) => {
  return (
    <LogoWrap variants={variants}>
      <IconSvg icon={icon.toLowerCase()} />
    </LogoWrap>
  );
};

export default Icon;
