import { Athlete } from "./athlete";
import { SprinterType } from "./sptinter.type";

export class Sprinter extends Athlete {
  best100mTime: number;
  best200mTime: number;

  constructor({
    athleteID,
    name,
    age,
    nationality,
    best100mTime,
    best200mTime,
  }: SprinterType) {
    super({ athleteID, name, age, nationality });
    this.best100mTime = best100mTime;
    this.best200mTime = best200mTime;
  }
  train(): void {
    console.log("Sprinter is training");
  }
  compete(): void {
    console.log("Sprinter is competing");
  }
}
