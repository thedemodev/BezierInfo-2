import localeStrings from "../../locale-strings.js";

const defaultLocale = localeStrings.defaultLocale;

export default function generateLangSwitcher(currentLocale, allLocales) {
  return allLocales
    .map((locale) => {
      let link;
      if (currentLocale === defaultLocale) {
        if (locale === defaultLocale) {
          link = `./index.html`;
        } else {
          link = `${locale}/index.html`;
        }
      } else {
        if (locale === defaultLocale) {
          link = `../index.html`;
        } else {
          link = `../${locale}/index.html`;
        }
      }
      return `<li><a href="${link}">${localeStrings.localeName[locale]}</a></li>`;
    })
    .join(`\n`);
}