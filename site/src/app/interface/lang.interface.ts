export default interface ILang {
  zh: "zh-cn"
  en: "en"
}

export const lang: ILang = {
  zh: "zh-cn",
  en: "en",
}

export type Lang = ILang[keyof ILang]
