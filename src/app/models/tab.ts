export interface Tab {
  title:    string;
  contents: Content[];
}

export interface Content {
  type:  string;
  value: string;
  data?: unknown[];
  config?: Config;
}

export interface Config {
  action: string;
  to: string;
}
