import { AthleteType } from "./athlete.types";

export type SprinterType = AthleteType & {
  best100mTime: Date;
  best200mTime: Date;
};
