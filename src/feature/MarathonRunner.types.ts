import { AthleteType } from "./athlete.types";

export type MarathonRunnerType = AthleteType & {
  enduranceLevel: number;
  bestMarathonTime: Date;
};
