export interface Language {
  key: string;
  name: string;
  locale: string;
}

export interface LocalizedText {
  locale: "es-MX" | "en-US";
  text: string;
}

export interface DefaultData {
  languages: Language[];
  brandName: LocalizedText[];
  titles: LocalizedText[];
  serviceDescription: LocalizedText[];
  callToAction: LocalizedText[];
  contactButtonText: LocalizedText[];
}
