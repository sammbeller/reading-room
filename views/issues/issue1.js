function displayGenre() {
  return this.genre.slice(0, 1).toUpperCase() + this.genre.slice(1);
}

function entryURL() {
  const titleForURL = this.title.toLowerCase().split(" ").join("-");
  return "contributor/" + this.contributor + "/" + titleForURL;
}

export default {
  issue: 1,
  entries: [
    {
      contributor: "cs",
      displayGenre,
      entryURL,
      genre: "poetry",
      title: "untitled",
    },
    {
      contributor: "roderic",
      displayGenre,
      entryURL,
      genre: "poetry",
      title: "endospore",
    },
    {
      contributor: "sleazy-b",
      displayGenre,
      entryURL,
      genre: "poetry",
      title: "Cherrystone",
    },
    {
      contributor: "pinkbubblesgo",
      displayGenre,
      entryURL,
      genre: "fiction",
      title: "Mick is My Darling",
    },
  ],
};
