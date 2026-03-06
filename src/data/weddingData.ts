import yaml from "yaml";
import weddingSource from "./wedding.yml?raw";

export interface WeddingData {
  site: {
    pageTitle: string;
    baseUrl?: string;
    meta: {
      description: string;
      ogImage: string;
    };
  };
  couple: {
    person1: { name: string };
    person2: { name: string };
    displayName: string;
  };
  locale: {
    language: string;
    timeZone: string;
  };
  theme?: {
    id?: string;
  };
  demo?: {
    themeSwitcher?: boolean;
  };
  sections: Record<string, { enabled: boolean }>;
  hero: {
    enabled: boolean;
    title: string;
    subtitle: string;
    dateDisplay: string;
    city: string;
    backgroundImage?: string;
  };
  countdown: {
    target: string;
    heading: string;
    note?: string;
    targetSource: string;
  };
  events: {
    ceremony: {
      enabled: boolean;
      kindLabel: string;
      datetime: string;
      timeDisplay: string;
      venueName: string;
      addressLines: string[];
      mapsUrl: string;
    };
    celebration: {
      enabled: boolean;
      kindLabel: string;
      datetime: string;
      timeDisplay: string;
      venueName: string;
      addressLines: string[];
      mapsUrl: string;
    };
    religiousCeremony?: {
      enabled: boolean;
      kindLabel: string;
      datetime: string;
      timeDisplay: string;
      venueName: string;
      addressLines: string[];
      mapsUrl: string;
    };
  };
  story: {
    heading: string;
    subheading: string;
    sentence: string;
    photos: { src: string; alt: string }[];
  };
  socials: {
    heading?: string;
    body?: string;
    items: { label: string; handle: string; url: string }[];
  };
  gifts: {
    heading: string;
    body: string;
    buttonLabel: string;
    bank: {
      enabled: boolean;
      holderName: string;
      bankName: string;
      alias: string;
      cbu: string;
      cuit: string;
    };
  };
  dressCode: {
    title: string;
    tag: string;
    body: string;
    brideDisclaimer?: {
      enabled: boolean;
      text?: string;
    };
  };
  rsvp: {
    text: string;
    deadline?: string;
    link?: {
      enabled: boolean;
      url?: string;
      label?: string;
    };
  };
  calendar: {
    mode: "single" | "two" | "three";
    googleCalendar: { enabled: boolean };
    ics: {
      enabled: boolean;
      fileNameSingle: string;
      fileNameReligiousCeremony?: string;
      fileNameCeremony: string;
      fileNameCelebration: string;
    };
  };
  playlist: {
    heading: string;
    body: string;
    spotifyUrl: string;
  };
  usefulInfo: {
    title: string;
    items: {
      enabled: boolean;
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

const parsedWeddingData = yaml.parse(weddingSource) as WeddingData;

export function getWeddingData(): WeddingData {
  return parsedWeddingData;
}
