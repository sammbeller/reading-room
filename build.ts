import fs from "fs";
import mustache from "mustache";
import { processPoemIntoPartial } from "./processIntoPartial";
import issue1View from "./views/issues/issue1";

if (!fs.existsSync("build")) {
  fs.mkdirSync("build");
  fs.cpSync("style.css", "build/style.css");
}

const indexTemplate = fs.readFileSync("index.mustache", "utf-8");
const entryBoxPartial = fs.readFileSync("partials/entry-box.mustache", "utf-8");

const indexContent = mustache.render(indexTemplate, issue1View, {
  "entry-box": entryBoxPartial,
});
fs.writeFileSync("build/index.html", indexContent);

fs.mkdirSync("build/contributor");

issue1View.entries.forEach((entry) => {
  if (!fs.existsSync(`build/contributor/${entry.contributor}`)) {
    fs.mkdirSync(`build/contributor/${entry.contributor}`);
  }
  const template = fs.readFileSync("templates/entry.mustache", "utf-8");

  let partial;
  if (entry.genre === "poetry") {
    const text = fs.readFileSync(entry.entryURL() + ".txt", "utf-8");
    partial = processPoemIntoPartial(text);
  } else {
    partial = fs.readFileSync(entry.entryURL() + ".mustache", "utf-8");
  }

  const entryContent = mustache.render(template, entry, {
    entry: partial,
  });
  fs.writeFileSync("build/" + entry.entryURL() + ".html", entryContent);
});
