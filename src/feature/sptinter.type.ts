import { AthleteType } from "./athlete.types";

export type SprinterType = AthleteType & {
  best100mTime: number;
  best200mTime: number;
};
