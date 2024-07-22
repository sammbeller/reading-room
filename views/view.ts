const URLBase = process.env.LITFIC_BASE;
if (!URLBase) {
  throw new Error("No LITFIC_BASE env variable defined");
}

function formatForDisplay(input: string): string {
  return input
    .split("-")
    .map((piece) => piece.slice(0, 1).toUpperCase() + piece.slice(1))
    .join(" ");
}

export interface EntryInput {
  additionalContent?: string[];
  contributor: string;
  displayContributor?: string;
  displayTitle?: string;
  genre: string;
  title: string;
}

export type EntryOutput = EntryInput & {
  contributorURL: string;
  displayGenre: string;
  entryFile: string;
  entryURL: string;
};

export class Entry {
  additionalContent?: string[];
  contributor: string;
  displayContributor: string;
  displayTitle: string;
  genre: string;
  title: string;

  constructor(input: EntryInput) {
    this.additionalContent = input.additionalContent;
    this.contributor = input.contributor;
    this.displayContributor =
      input.displayContributor ?? formatForDisplay(input.contributor);
    this.displayTitle = input.displayTitle ?? formatForDisplay(input.title);
    this.genre = input.genre;
    this.title = input.title;
  }

  generateContributorURL(extension: string): string {
    return "contributor/" + this.contributor + "/author." + extension;
  }

  generateEntryURL(extension: string) {
    return (
      "contributor/" + this.contributor + "/" + this.title + "." + extension
    );
  }

  toObject(): EntryOutput {
    return {
      additionalContent: this.additionalContent,
      contributor: this.contributor,
      contributorURL: this.generateContributorURL("html"),
      displayContributor: this.displayContributor,
      displayGenre: formatForDisplay(this.genre),
      displayTitle: this.displayTitle,
      entryFile: this.generateEntryURL("mustache"),
      entryURL: this.generateEntryURL("html"),
      genre: this.genre,
      title: this.title,
    };
  }
}

export interface IssueOutput {
  entries: EntryOutput[];
}

export class Issue {
  entries: Entry[];

  constructor(entries: Entry[]) {
    this.entries = entries;
  }

  toObject(): IssueOutput {
    return {
      entries: this.entries.map((entry) => entry.toObject()),
    };
  }
}

export interface ViewOutput {
  base: string;
  issues: IssueOutput[];
}

export class View {
  base: string;
  issues: Issue[];

  constructor(base: string, issues: Issue[]) {
    this.base = base;
    this.issues = issues;
  }

  toObject(): ViewOutput {
    return {
      base: this.base,
      issues: this.issues.map((issue) => issue.toObject()),
    };
  }
}

export const view: View = new View(
  URLBase,
  [
    new Issue([
      new Entry({
        contributor: "cs",
        displayContributor: "CS",
        displayTitle: "untitled",
        genre: "poetry",
        title: "untitled",
      }),
      new Entry({
        contributor: "roderic",
        genre: "poetry",
        title: "endospore",
      }),
      new Entry({
        contributor: "sleazy-b",
        displayContributor: "sleazy-b",
        genre: "poetry",
        title: "cherrystone",
      }),
      new Entry({
          contributor: "pinkbubblesgo",
          displayContributor: "pinkbubblesgo",
          genre: "fiction",
          title: "mick-is-my-darling",
      }),
      new Entry({
        contributor: "g-michael-rapp",
        displayContributor: "G. Michael Rapp",
        genre: "fiction",
        title: "cherry-pie",
      }),
      new Entry({
        contributor: "fujin-takama",
        genre: "fiction",
        title: "53-seconds",
      }),
      new Entry({
        contributor: "in-limbo",
        displayContributor: "InLimbo",
        genre: "poetry",
        title: "untitled",
      }),
      new Entry({
        contributor: "in-limbo",
        displayContributor: "InLimbo",
        displayTitle: "distinction",
        genre: "fiction",
        additionalContent: ["distinction.pdf"],
        title: "distinction",
      }),
      new Entry({
        contributor: "john-gu",
        displayTitle: "The Train from Amsterdam",
        genre: "nonfiction",
        title: "the-train-from-amsterdam",
      }),
      new Entry({
        contributor: "john-gu",
        genre: "nonfiction",
        title: "sara",
      }),
      new Entry({
        contributor: "jetgirl",
        displayContributor: "JetGirl",
        genre: "fiction",
        title: "the-date",
      }),
    ]),
  ],
);
