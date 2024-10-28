import { AthleteType } from "./athlete.types";

export abstract class Athlete {
  athleteID: string;
  name: string;
  age: number;
  nationality: string;
  constructor({ athleteID, name, age, nationality }: AthleteType) {
    this.athleteID = athleteID;
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  abstract train(): void;
  abstract compete(): void;
}
