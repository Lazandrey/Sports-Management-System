import { Athlete } from "./athlete";

export type SwimmerType = Athlete & {
  preferredStroke: string;
  best100mFreestyleTime: number;
};
