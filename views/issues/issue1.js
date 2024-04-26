export default {
  issue: 1,
  entries: [
    {
      contributor: "cs",
      displayGenre: function () {
        return this.genre.slice(0, 1).toUpperCase() + this.genre.slice(1);
      },
      entryURL: function () {
        const titleForURL = this.title.toLowerCase().split(" ").join("-");
        return "contributor/" + this.contributor + "/" + titleForURL;
      },
      genre: "poetry",
      title: "untitled",
    },
    {
      contributor: "roderic",
      displayGenre: function () {
        return this.genre.slice(0, 1).toUpperCase() + this.genre.slice(1);
      },
      entryURL: function () {
        const titleForURL = this.title.toLowerCase().split(" ").join("-");
        return "contributor/" + this.contributor + "/" + titleForURL;
      },
      genre: "poetry",
      title: "endospore",
    },
    {
      contributor: "sleazy-b",
      displayGenre: function () {
        return this.genre.slice(0, 1).toUpperCase() + this.genre.slice(1);
      },
      entryURL: function () {
        const titleForURL = this.title.toLowerCase().split(" ").join("-");
        return "contributor/" + this.contributor + "/" + titleForURL;
      },
      genre: "poetry",
      title: "Cherrystone",
    },
    {
      contributor: "pinkbubblesgo",
      displayGenre: function () {
        return this.genre.slice(0, 1).toUpperCase() + this.genre.slice(1);
      },
      entryURL: function () {
        const titleForURL = this.title.toLowerCase().split(" ").join("-");
        return "contributor/" + this.contributor + "/" + titleForURL;
      },
      genre: "fiction",
      title: "Mick is My Darling",
    },
  ],
};
