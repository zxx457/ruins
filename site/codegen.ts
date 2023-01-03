import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  // ...
  schema: "http://127.0.0.1:3000/graphql",
  documents: "src/app/service/graphql/statics/*.graphql",
  generates: {
    "src/app/service/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-apollo-angular",
      ],
    },
  },
}
export default config
