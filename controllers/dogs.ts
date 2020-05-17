import {
  HandlerFunc,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import db from "../config/db.ts";

const database = db.getDatabase;
const dogs = database.collection("dogs");

interface Dog {
  _id: {
    $oid: string;
  };
  name: string;
  breed: string;
  age: string;
}

export const createDog: HandlerFunc = async (c: Context) => {
  try {
    const body = await (c.body());
    if (!Object.keys(body).length) {
      return c.string("Request can't be empty", 400);
    }
    const { name, breed, age } = body;

    const insertedDog = await dogs.insertOne({
      name,
      breed,
      age,
    });

    return c.json(insertedDog, 201);
  } catch (error) {
    return c.json(error, 500);
  }
};
