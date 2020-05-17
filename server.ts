import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import "https://deno.land/x/denv/mod.ts";

const app = new Application();
app
  .get("/hello", (c) => {
    return "Hello, Abc!";
  })
  .start({ port: 8080 });
