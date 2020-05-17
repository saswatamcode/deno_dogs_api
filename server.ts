import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import "https://deno.land/x/denv/mod.ts";
import {
  createDog,
  fetchAllDogs,
  fetchOneDog,
  updateDog,
  deleteDog,
} from "./controllers/dogs.ts";

const app = new Application();

app
  .get("/dogs", fetchAllDogs)
  .post("/dogs", createDog)
  .get("/dogs/:id", fetchOneDog)
  .put("/dogs/:id", updateDog)
  .delete("/dogs/:id", deleteDog)
  .start({ port: 8000 });
