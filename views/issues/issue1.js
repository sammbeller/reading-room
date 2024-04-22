export const view = {
  issue: 1,
  entries: [
    {
      contributor: "cs",
      displayGenre: () => this.genre.slice(0,1).toUpperCase() + this.genre.slice(1),
      entryURL: () => this.contributor + "/" + this.title + ".html",
      genre: "poetry",
      title: "untitled"
    }
  ]
};