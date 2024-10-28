import { Athlete } from "./Athlete";

export type SwimmerType = Athlete & {
  preferredStroke: string;
  best100mFreestyleTime: Date;
};
