// Generated by https://quicktype.io

export interface Tab {
  title:    string;
  contents: Content[];
}

export interface Content {
  type:  string;
  value: string;
  config?: Config;
}

export interface Config {
  action: string;
  to: string;
}