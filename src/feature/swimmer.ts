import { Athlete } from "./Athlete";
import { SwimmerType } from "./swimmer.type";

export class Swimmer extends Athlete {
  preferredStroke: string;
  best100mFreestyleTime: Date;

  constructor({
    athleteID,
    name,
    age,
    nationality,
    preferredStroke,
    best100mFreestyleTime,
  }: SwimmerType) {
    super({ athleteID, name, age, nationality });
    this.preferredStroke = preferredStroke;
    this.best100mFreestyleTime = best100mFreestyleTime;
  }
  swim(): void {
    console.log("swimming");
  }
  train(): void {
    console.log("Swimmer is training");
  }
  compete(): void {
    console.log("Swimmer is competing");
  }
}
