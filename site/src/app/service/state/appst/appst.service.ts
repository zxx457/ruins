import { Injectable } from "@angular/core"
import { createStore, withProps, select } from "@ngneat/elf"
import { IAppst } from "src/app/interface/appst.interface"
import { Lang, lang } from "src/app/interface/lang.interface"

@Injectable({
  providedIn: "root",
})
export class AppstService {
  private readonly store = createStore(
    { name: "appst" },
    withProps<IAppst>({ lang: lang.zh })
  )

  public update(state: Partial<IAppst>) {
    this.store.update((st) => ({
      ...st,
      ...state,
    }))
  }

  public updateLang(lang: Lang) {
    this.store.update((st) => ({
      ...st,
      lang,
    }))
  }

  constructor() {}
}
