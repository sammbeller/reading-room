import fs from "fs";
import path from "path";
import mustache from "mustache";
import { getView } from "./views/view";

if (!fs.existsSync("build")) {
  fs.mkdirSync("build");
  fs.cpSync("style.css", "build/style.css");
}

const indexTemplate = fs.readFileSync("index.mustache", "utf-8");
const menuPartial = fs.readFileSync("partials/menu.mustache", "utf-8");
const entryBoxPartial = fs.readFileSync("partials/entry-box.mustache", "utf-8");
const issueDisplayPartial = fs.readFileSync(
  "partials/issue-display.mustache",
  "utf-8"
);
const htmlHeaderPartial = fs.readFileSync(
  "partials/html-header.mustache",
  "utf-8"
);

const view = getView().toObject();

const indexContent = mustache.render(indexTemplate, view, {
  "entry-box": entryBoxPartial,
  "html-header": htmlHeaderPartial,
  "issue-display": issueDisplayPartial,
  menu: menuPartial,
});
fs.writeFileSync("build/index.html", indexContent);

fs.mkdirSync("build/contributor");

view.issues.forEach((issue) => {
  issue.entries.forEach((entry) => {
    // Build and write the entry template
    if (!fs.existsSync(`build/contributor/${entry.contributor}`)) {
      fs.mkdirSync(`build/contributor/${entry.contributor}`);
    }
    const template = fs.readFileSync("templates/entry.mustache", "utf-8");
    const partial = fs.readFileSync(entry.entryFile, "utf-8");

    const entryContent = mustache.render(template, entry, {
      entry: partial,
      "html-header": htmlHeaderPartial,
      menu: menuPartial,
    });
    fs.writeFileSync("build/" + entry.entryURL, entryContent);

    // Find additional content and move it over
    if (entry.additionalContent && entry.additionalContent.length > 0) {
      entry.additionalContent.forEach((additionalContent) => {
        const basePath = `contributor/${entry.contributor}`;
        const additionalContentSourcePath = path.join(basePath, additionalContent);
        if (!fs.existsSync(additionalContentSourcePath)) {
          console.warn(
            `Could not find additional content for ${entry.entryFile}: ${additionalContent}`
          );
        } else {
          console.log(
            `Adding additional content for ${entry.entryFile}: ${additionalContent}`
          );
          const additionalContentTargetPath = path.join(
            "build/contributor",
            entry.contributor,
            additionalContent
          );
          fs.copyFileSync(additionalContentSourcePath, additionalContentTargetPath);
        }
      });
    }
  });
});
