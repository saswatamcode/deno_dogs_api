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

export const fetchAllDogs: HandlerFunc = async (c: Context) => {
  try {
    const fetchedDogs: Dog[] = await dogs.find();

    if (fetchedDogs) {
      const fetchedDogsList = fetchedDogs.length
        ? fetchedDogs.map((dog) => {
          const { _id: { $oid }, name, breed, age } = dog;
          return { id: $oid, name, breed, age };
        })
        : [];
      return c.json(fetchedDogsList, 200);
    }
  } catch (error) {
    return c.json(error, 500);
  }
};

export const fetchOneDog: HandlerFunc = async (c: Context) => {
  try {
    const { id } = c.params as { id: string };

    const fetchedDog = await dogs.findOne({ _id: { "$oid": id } });

    if (fetchedDog) {
      const { _id: { $oid }, name, breed, age } = fetchedDog;
      return c.json({ id: $oid, name, breed, age }, 200);
    }
    return c.string("Dog not found", 404);
  } catch (error) {
    return c.json(error, 500);
  }
};
