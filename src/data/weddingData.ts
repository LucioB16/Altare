import yaml from "yaml";
import {
  getLocaleLanguageTag,
  normalizeLocale,
  resolveSiteLocale,
} from "../i18n/config";
import { getMessages, type MessageCatalog } from "../i18n/messages";
import weddingSource from "./wedding.yml?raw";

export interface WeddingData {
  site: {
    language?: string;
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
    language?: string;
    timeZone: string;
  };
  theme?: {
    id?: string;
  };
  demo?: {
    themeSwitcher?: boolean;
    locales?: string[];
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

interface LocalizedUsefulInfoItem {
  title?: string;
  description?: string;
}

interface LocalizedContentDefaults {
  site?: {
    pageTitle?: string;
    metaDescription?: string;
  };
  locale?: {
    language?: string;
  };
  hero?: {
    title?: string;
    dateDisplay?: string;
    city?: string;
  };
  countdown?: {
    heading?: string;
    note?: string;
  };
  events?: {
    religiousLabel?: string;
    ceremonyLabel?: string;
    celebrationLabel?: string;
  };
  story?: {
    heading?: string;
    subheading?: string;
    sentence?: string;
  };
  socials?: {
    heading?: string;
    body?: string;
    itemLabel?: string;
  };
  gifts?: {
    heading?: string;
    body?: string;
    buttonLabel?: string;
  };
  dressCode?: {
    title?: string;
    tag?: string;
    body?: string;
    brideDisclaimer?: string;
  };
  rsvp?: {
    text?: string;
    buttonLabel?: string;
  };
  calendar?: {
    fileNameSingle?: string;
    fileNameReligiousCeremony?: string;
    fileNameCeremony?: string;
    fileNameCelebration?: string;
  };
  playlist?: {
    heading?: string;
    body?: string;
  };
  usefulInfo?: {
    title?: string;
    items?: LocalizedUsefulInfoItem[];
  };
}

const parsedWeddingData = yaml.parse(weddingSource) as WeddingData;

function cloneWeddingData(value: WeddingData): WeddingData {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value)) as WeddingData;
}

function getLocalizedContentDefaults(locale: string): LocalizedContentDefaults {
  const messages = getMessages(normalizeLocale(locale)) as MessageCatalog & {
    contentDefaults?: LocalizedContentDefaults;
  };

  return messages.contentDefaults ?? {};
}

function applyDemoLocaleContent(
  baseData: WeddingData,
  locale: string,
): WeddingData {
  const localized = cloneWeddingData(baseData);
  const defaults = getLocalizedContentDefaults(locale);
  const normalizedLocale = normalizeLocale(locale);

  localized.site.language = normalizedLocale;
  localized.site.pageTitle =
    defaults.site?.pageTitle ?? localized.site.pageTitle;
  localized.site.meta.description =
    defaults.site?.metaDescription ?? localized.site.meta.description;

  localized.locale.language =
    defaults.locale?.language ?? getLocaleLanguageTag(normalizedLocale);

  localized.hero.title = defaults.hero?.title ?? localized.hero.title;
  localized.hero.dateDisplay =
    defaults.hero?.dateDisplay ?? localized.hero.dateDisplay;
  localized.hero.city = defaults.hero?.city ?? localized.hero.city;

  localized.countdown.heading =
    defaults.countdown?.heading ?? localized.countdown.heading;
  localized.countdown.note =
    defaults.countdown?.note ?? localized.countdown.note;

  if (localized.events.religiousCeremony) {
    localized.events.religiousCeremony.kindLabel =
      defaults.events?.religiousLabel ??
      localized.events.religiousCeremony.kindLabel;
  }

  localized.events.ceremony.kindLabel =
    defaults.events?.ceremonyLabel ?? localized.events.ceremony.kindLabel;
  localized.events.celebration.kindLabel =
    defaults.events?.celebrationLabel ?? localized.events.celebration.kindLabel;

  localized.story.heading = defaults.story?.heading ?? localized.story.heading;
  localized.story.subheading =
    defaults.story?.subheading ?? localized.story.subheading;
  localized.story.sentence =
    defaults.story?.sentence ?? localized.story.sentence;

  localized.socials.heading =
    defaults.socials?.heading ?? localized.socials.heading;
  localized.socials.body = defaults.socials?.body ?? localized.socials.body;
  if (defaults.socials?.itemLabel) {
    localized.socials.items = localized.socials.items.map((item, index) =>
      index === 0
        ? { ...item, label: defaults.socials?.itemLabel ?? item.label }
        : item,
    );
  }

  localized.gifts.heading = defaults.gifts?.heading ?? localized.gifts.heading;
  localized.gifts.body = defaults.gifts?.body ?? localized.gifts.body;
  localized.gifts.buttonLabel =
    defaults.gifts?.buttonLabel ?? localized.gifts.buttonLabel;

  localized.dressCode.title =
    defaults.dressCode?.title ?? localized.dressCode.title;
  localized.dressCode.tag = defaults.dressCode?.tag ?? localized.dressCode.tag;
  localized.dressCode.body =
    defaults.dressCode?.body ?? localized.dressCode.body;
  if (localized.dressCode.brideDisclaimer?.enabled) {
    localized.dressCode.brideDisclaimer.text =
      defaults.dressCode?.brideDisclaimer ??
      localized.dressCode.brideDisclaimer.text;
  }

  localized.rsvp.text = defaults.rsvp?.text ?? localized.rsvp.text;
  if (localized.rsvp.link?.enabled) {
    localized.rsvp.link.label =
      defaults.rsvp?.buttonLabel ?? localized.rsvp.link.label;
  }

  localized.calendar.ics.fileNameSingle =
    defaults.calendar?.fileNameSingle ?? localized.calendar.ics.fileNameSingle;
  localized.calendar.ics.fileNameReligiousCeremony =
    defaults.calendar?.fileNameReligiousCeremony ??
    localized.calendar.ics.fileNameReligiousCeremony;
  localized.calendar.ics.fileNameCeremony =
    defaults.calendar?.fileNameCeremony ?? localized.calendar.ics.fileNameCeremony;
  localized.calendar.ics.fileNameCelebration =
    defaults.calendar?.fileNameCelebration ??
    localized.calendar.ics.fileNameCelebration;

  localized.playlist.heading =
    defaults.playlist?.heading ?? localized.playlist.heading;
  localized.playlist.body = defaults.playlist?.body ?? localized.playlist.body;

  localized.usefulInfo.title =
    defaults.usefulInfo?.title ?? localized.usefulInfo.title;
  if (defaults.usefulInfo?.items?.length) {
    localized.usefulInfo.items = localized.usefulInfo.items.map((item, index) => {
      const localizedItem = defaults.usefulInfo?.items?.[index];
      if (!localizedItem) {
        return item;
      }

      return {
        ...item,
        title: localizedItem.title ?? item.title,
        description: localizedItem.description ?? item.description,
      };
    });
  }

  return localized;
}

export function getWeddingData(requestedLocale?: string): WeddingData {
  const requested = requestedLocale ? normalizeLocale(requestedLocale) : undefined;
  const baseLocale = resolveSiteLocale(parsedWeddingData);

  if (requested && requested !== baseLocale) {
    return applyDemoLocaleContent(parsedWeddingData, requested);
  }

  return parsedWeddingData;
}
