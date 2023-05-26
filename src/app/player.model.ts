export interface Player {
  _id?: string;
  name: string;
  position: string;
  rushingYards: number;
  touchdownPasses: number;
  sacks: number;
  fieldGoalsMade: number;
  fieldGoalsMissed: number;
  catches: number;
}
