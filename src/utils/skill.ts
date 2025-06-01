import AndroidIcon from "../images/skills/android.svg";
import AndroidStudioIcon from "../images/skills/android-studio.svg";
import AngularIcon from "../images/skills/angular.svg";
import BashIcon from "../images/skills/bash.svg";
import CIcon from "../images/skills/c-programming.svg";
import Css3Icon from "../images/skills/css3.svg";
import DockerIcon from "../images/skills/docker.svg";
import ElasticsearchIcon from "../images/skills/elasticsearch.svg";
import GitIcon from "../images/skills/git.svg";
import GolangIcon from "../images/skills/golang.svg";
import GrafanaIcon from "../images/skills/grafana.svg";
import Html5Icon from "../images/skills/html5.svg";
import JavaIcon from "../images/skills/java.svg";
import JavascriptIcon from "../images/skills/javascript.svg";
import JiraIcon from "../images/skills/jira.svg";
import KibanaIcon from "../images/skills/kibana.svg";
import KubernetesIcon from "../images/skills/kubernetes.svg";
import LinuxIcon from "../images/skills/linux.svg";
import LogstashIcon from "../images/skills/logstash.svg";
import MongoDbIcon from "../images/skills/mongodb.svg";
import MySqlIcon from "../images/skills/mysql.svg";
import NodeJSIcon from "../images/skills/nodejs.svg";
import NpmIcon from "../images/skills/npm.svg";
import PostgreSqlIcon from "../images/skills/postgresql.svg";
import PrometheusIcon from "../images/skills/prometheus.svg";
import PythonIcon from "../images/skills/python.svg";
import QtIcon from "../images/skills/qt.svg";
import RProgrammingIcon from "../images/skills/r-programming.svg";
import ReactIcon from "../images/skills/react.svg";
import SwiftIcon from "../images/skills/swift.svg";
import TypescriptIcon from "../images/skills/typescript.svg";
import UbuntuIcon from "../images/skills/ubuntu.svg";
import VaultIcon from "../images/skills/vault.svg";
import VsCodeIcon from "../images/skills/vs-code.svg";
import WindowsIcon from "../images/skills/windows.svg";
import YarnIcon from "../images/skills/yarn.svg";

const iconMap: Record<string, string> = {
  android: AndroidIcon,
  "android-studio": AndroidStudioIcon,
  angular: AngularIcon,
  bash: BashIcon,
  c: CIcon,
  css: Css3Icon,
  docker: DockerIcon,
  elasticsearch: ElasticsearchIcon,
  git: GitIcon,
  golang: GolangIcon,
  grafana: GrafanaIcon,
  html: Html5Icon,
  java: JavaIcon,
  javascript: JavascriptIcon,
  jira: JiraIcon,
  kibana: KibanaIcon,
  kubernetes: KubernetesIcon,
  linux: LinuxIcon,
  logstash: LogstashIcon,
  mongodb: MongoDbIcon,
  mysql: MySqlIcon,
  nodejs: NodeJSIcon,
  npm: NpmIcon,
  postgresql: PostgreSqlIcon,
  prometheus: PrometheusIcon,
  python: PythonIcon,
  qt: QtIcon,
  r: RProgrammingIcon,
  react: ReactIcon,
  swift: SwiftIcon,
  typescript: TypescriptIcon,
  ubuntu: UbuntuIcon,
  vault: VaultIcon,
  vscode: VsCodeIcon,
  windows: WindowsIcon,
  yarn: YarnIcon,
};

export function toSvgIcon(icon: string): string {
  const normalizedIcon = icon.replaceAll(" ", "-").toLowerCase();
  return iconMap[normalizedIcon] || "";
}
