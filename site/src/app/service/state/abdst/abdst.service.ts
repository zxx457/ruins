import { Injectable } from "@angular/core"
import { createStore } from "@ngneat/elf"
import {
  setEntities,
  updateEntities,
  withEntities,
  withUIEntities,
} from "@ngneat/elf-entities"
import { IAbdArticle, IAbdArticleUI } from "src/app/interface/abd.interface"

@Injectable({
  providedIn: "root",
})
export class AbdstService {
  private readonly store = createStore(
    { name: "abandonedArticles" },
    withEntities<IAbdArticle>()
  )

  constructor() {}
}
