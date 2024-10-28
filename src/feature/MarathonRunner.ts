import { Athlete } from "./athlete";
import { Endurance } from "./endurance";
import { MarathonRunnerType } from "./marathonRunner.types";

export class MarathonRunner extends Athlete implements Endurance {
  enduranceLevel: number;
  bestMarathonTime: number;
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
