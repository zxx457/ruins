import { Component, OnInit } from "@angular/core"
import { HelloGQL, StoreHelloGQL } from "src/app/service/graphql/generated"

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor(
    private readonly storeHelloGQL: StoreHelloGQL,
    private readonly helloGQL: HelloGQL
  ) {}

  ngOnInit(): void {
    this.storeHelloGQL.mutate({ input: "This is in Apps" }).subscribe({
      next(value) {
        console.log(value.data?.storeHello.word)
      },
    })
    setTimeout(() => {
      this.storeHelloGQL.mutate({ input: "time out" }).subscribe()
    }, 2000)
    this.helloGQL.watch().valueChanges.subscribe({
      next(value) {
        console.log(value.data.hellos)
      },
      complete() {
        console.log("end")
      },
    })
  }
}
