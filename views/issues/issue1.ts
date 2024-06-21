function displayGenre(this: Entry) {
  return this.genre.slice(0, 1).toUpperCase() + this.genre.slice(1);
}

function entryURL(this: Entry) {
  return "contributor/" + this.contributor + "/" + this.title;
}

export interface Entry {
  contributor: string;
  displayContributor: string;
  displayGenre: () => string;
  displayTitle: string;
  entryURL: () => string;
  genre: string;
  hasAdditionalContent?: string[];
  title: string;
}

export interface Issue {
  entries: Entry[];
  issue: number;
}

const issue: Issue = {
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
      displayTitle: "Cherry Pie",
      entryURL,
      genre: "fiction",
      title: "cherry-pie",
    },
    {
      contributor: "fujin-takama",
      displayContributor: "Fujin Takama",
      displayGenre,
      displayTitle: "53 Seconds",
      entryURL,
      genre: "fiction",
      title: "53-seconds",
    },
    {
      contributor: "in-limbo",
      displayContributor: "InLimbo",
      displayGenre,
      displayTitle: "Untitled",
      entryURL,
      genre: "poetry",
      title: "untitled",
    },
    {
      contributor: "in-limbo",
      displayContributor: "InLimbo",
      displayGenre,
      displayTitle: "distinction",
      entryURL,
      genre: "fiction",
      hasAdditionalContent: ["distinction.pdf"],
      title: "distinction",
    },
    {
      contributor: "john-gu",
      displayContributor: "John Gu",
      displayGenre,
      displayTitle: "The Train from Amsterdam",
      entryURL,
      genre: "nonfiction",
      title: "the-train-from-amsterdam",
    },
    {
      contributor: "john-gu",
      displayContributor: "John Gu",
      displayGenre,
      displayTitle: "Sara",
      entryURL,
      genre: "nonfiction",
      title: "sara",
    },
    {
      contributor: "jetgirl",
      displayContributor: "JetGirl",
      displayGenre,
      displayTitle: "The Date",
      entryURL,
      genre: "fiction",
      title: "the-date",
    },
  ],
};

export default issue;
