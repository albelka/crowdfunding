export class Idea {
  public favorite: boolean = false;
  constructor (public title: string, public creators: string[], public details: string, public goal: number, public funds: string, public rewards: string[],public type: string) {}
}
