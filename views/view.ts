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
  base: string;
  contributorURL: string;
  displayGenre: string;
  entryFile: string;
  entryURL: string;
};

export class Entry {
  additionalContent?: string[];
  base: string;
  contributor: string;
  displayContributor: string;
  displayTitle: string;
  genre: string;
  title: string;

  constructor(base: string, input: EntryInput) {
    this.additionalContent = input.additionalContent;
    this.base = base;
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
      base: this.base,
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
  base: string;
  entries: EntryOutput[];
}

export class Issue {
  base: string;
  entries: Entry[];

  constructor(base: string, entries: Entry[]) {
    this.base = base;
    this.entries = entries;
  }

  toObject(): IssueOutput {
    return {
      base: this.base,
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

export function getView(): View {
  const URLBase = process.env.LITFIC_BASE;
  if (!URLBase) {
    throw new Error("No LITFIC_BASE env variable defined");
  }

  return new View(URLBase, [
    new Issue(URLBase, [
      new Entry(URLBase, {
        contributor: "cs",
        displayContributor: "CS",
        displayTitle: "untitled",
        genre: "poetry",
        title: "untitled",
      }),
      new Entry(URLBase, {
        contributor: "roderic",
        genre: "poetry",
        title: "endospore",
      }),
      new Entry(URLBase, {
        contributor: "sleazy-b",
        displayContributor: "sleazy-b",
        genre: "poetry",
        title: "cherrystone",
      }),
      new Entry(URLBase, {
        contributor: "pinkbubblesgo",
        displayContributor: "pinkbubblesgo",
        genre: "fiction",
        title: "mick-is-my-darling",
      }),
      new Entry(URLBase, {
        contributor: "g-michael-rapp",
        displayContributor: "G. Michael Rapp",
        genre: "fiction",
        title: "cherry-pie",
      }),
      new Entry(URLBase, {
        contributor: "fujin-takama",
        genre: "fiction",
        title: "53-seconds",
      }),
      new Entry(URLBase, {
        contributor: "in-limbo",
        displayContributor: "InLimbo",
        genre: "poetry",
        title: "untitled",
      }),
      new Entry(URLBase, {
        contributor: "in-limbo",
        displayContributor: "InLimbo",
        displayTitle: "distinction",
        genre: "fiction",
        additionalContent: ["distinction.pdf"],
        title: "distinction",
      }),
      new Entry(URLBase, {
        contributor: "john-gu",
        displayTitle: "The Train from Amsterdam",
        genre: "nonfiction",
        title: "the-train-from-amsterdam",
      }),
      new Entry(URLBase, {
        contributor: "john-gu",
        genre: "nonfiction",
        title: "sara",
      }),
      new Entry(URLBase, {
        contributor: "jetgirl",
        displayContributor: "JetGirl",
        genre: "fiction",
        title: "the-date",
      }),
    ]),
  ]);
}
