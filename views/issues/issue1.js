export default {
  issue: 1,
  entries: [
    {
      contributor: "cs",
      displayGenre: function() { return this.genre.slice(0,1).toUpperCase() + this.genre.slice(1) },
      entryURL: function() { return "contributor/" + this.contributor + "/" + this.title + ".html" },
      genre: "poetry",
      title: "untitled"
    },
    {
      contributor: "roderic",
      displayGenre: function() { return this.genre.slice(0,1).toUpperCase() + this.genre.slice(1) },
      entryURL: function() { return "contributor/" + this.contributor + "/" + this.title + ".html" },
      genre: "poetry",
      title: "endospore"
    },
    {
      contributor: "sleazy-b",
      displayGenre: function() { return this.genre.slice(0,1).toUpperCase() + this.genre.slice(1) },
      entryURL: function() { return "contributor/" + this.contributor + "/" + this.title + ".html" },
      genre: "poetry",
      title: "Cherrystone"
    },
  ]
};