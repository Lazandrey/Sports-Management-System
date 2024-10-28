import { Athlete } from "./Athlete";
import { Endurance } from "./Endurance";
import { MarathonRunnerType } from "./MarathonRunner.types";

export class MarathonRunner extends Athlete implements Endurance {
  enduranceLevel: number;
  bestMarathonTime: Date;
  constructor({
    athleteID,
    name,
    age,
    nationality,
    enduranceLevel,
    bestMarathonTime,
  }: MarathonRunnerType) {
    super({ athleteID, name, age, nationality });
    this.enduranceLevel = enduranceLevel;
    this.bestMarathonTime = bestMarathonTime;
  }

  enduranceTraining(): void {
    console.log("Marathon Runner is training");
    this.enduranceLevel += this.enduranceLevel;
  }

  checkEnduranceLevel(): number {
    return this.enduranceLevel;
  }
  train(): void {
    console.log("Marathon Runner is training");
    this.enduranceLevel += this.enduranceLevel;
  }
  compete(): void {
    console.log("Marathon Runner is competing");
  }
}
