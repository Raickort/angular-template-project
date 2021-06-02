export class Project {
  photo: string;

  constructor(
    public title: string,
    public content: string,
    public tags?: string[]
  ) {}
}
