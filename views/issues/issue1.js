function displayGenre() {
  return this.genre.slice(0, 1).toUpperCase() + this.genre.slice(1);
}

function entryURL() {
  return "contributor/" + this.contributor + "/" + this.title;
}

export default {
  issue: 1,
  entries: [
    {
      contributor: "cs",
      displayContributor: "CS",
      displayGenre,
      displayTitle: "untitled",
      entryURL,
      genre: "poetry",
      title: "untitled",
    },
    {
      contributor: "roderic",
      displayContributor: "Roederic",
      displayGenre,
      displayTitle: "Endospore",
      entryURL,
      genre: "poetry",
      title: "endospore",
    },
    {
      contributor: "sleazy-b",
      displayContributor: "sleazy-b",
      displayGenre,
      displayTitle: "Cherrystone",
      entryURL,
      genre: "poetry",
      title: "cherrystone",
    },
    {
      contributor: "pinkbubblesgo",
      displayContributor: "pinkbubblesgo",
      displayGenre,
      displayTitle: "Mick is My Darling",
      entryURL,
      genre: "fiction",
      title: "mick-is-my-darling",
    },
    {
      contributor: "g-michael-rapp",
      displayContributor: "G. Michael Rapp",
      displayGenre,
      title: "Cherry Pie",
      entryURL,
      genre: "fiction",
      title: "cherry-pie",
    },
  ],
};
