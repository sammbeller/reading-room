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
      displayContributor: "CS",
      displayGenre,
      entryURL,
      genre: "poetry",
      title: "untitled",
    },
    {
      contributor: "roderic",
      displayContributor: "Roederic",
      displayGenre,
      entryURL,
      genre: "poetry",
      title: "endospore",
    },
    {
      contributor: "sleazy-b",
      displayContributor: "sleazy-b",
      displayGenre,
      entryURL,
      genre: "poetry",
      title: "Cherrystone",
    },
    {
      contributor: "pinkbubblesgo",
      displayContributor: "pinkbubblesgo",
      displayGenre,
      entryURL,
      genre: "fiction",
      title: "Mick is My Darling",
    },
    {
      contributor: "g-michael-rapp",
      displayContributor: "G. Michael Rapp",
      displayGenre,
      entryURL,
      genre: "fiction",
      title: "Cherry Pie",
    },
  ],
};
