import { CompetitionType } from "./competition.type";
import { MarathonRunnerType } from "./marathonRunner.types";
import { SprinterType } from "./sptinter.type";
import { SwimmerType } from "./swimmer.type";

type AllAthleteTypes = SwimmerType | SprinterType | MarathonRunnerType;

class Competition {
  competitionID: string;
  date: Date;
  location: string;
  athletes: AllAthleteTypes[] = [];

  constructor({ competitionID, date, location }: CompetitionType) {
    this.competitionID = competitionID;
    this.date = date;
    this.location = location;
  }

  registerAthlete(athlete: AllAthleteTypes): void {
    this.athletes.push(athlete);
  }

  startCompetition(): void {
    console.log("Competition has started");
  }
}
