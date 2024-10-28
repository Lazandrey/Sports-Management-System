Objective:
Design a basic Sports Management System where various athletes from different sports can be managed, tracked, and their performances recorded.

1. Abstract Class - Athlete

Properties:

- athleteID (e.g., "A123")
- name
- age
- nationality
  Methods:
- abstract void train(): Simulates the athlete's training session.
- abstract void compete(): Simulates the athlete's competition.

2. Interface - Endurance

Methods:

- void enduranceTraining(): A method to simulate endurance-specific training.
- void checkEnduranceLevel(): A method to check the athlete's endurance capability.

3. Class - Sprinter (Inherits from Athlete)

Additional properties:

- best100mTime
- best200mTime
  Implements the train and compete methods specific to sprinting.

4. Class - MarathonRunner (Inherits from Athlete and Implements Endurance)

Additional properties:

- bestMarathonTime
- Implements the train and compete methods specific to marathon running.
- Implements the enduranceTraining and checkEnduranceLevel methods from the Endurance interface.

5. Class - Swimmer (Inherits from Athlete)

Additional properties:

- preferredStroke (e.g., "Freestyle", "Butterfly")
- best100mFreestyleTime
- Implements the train and compete methods specific to swimming.

6. Class - Competition

Properties:

- competitionID
- date
- location
- athletes: List of Athlete objects participating in the competition.
  Methods:
- registerAthlete(Athlete athlete): Registers an athlete for the competition.
- startCompetition(): Initiates the competition for the registered athletes.
