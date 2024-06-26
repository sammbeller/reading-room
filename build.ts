import fs from "fs";
import path from "path";
import mustache from "mustache";
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
  // Build and write the entry template
  if (!fs.existsSync(`build/contributor/${entry.contributor}`)) {
    fs.mkdirSync(`build/contributor/${entry.contributor}`);
  }
  const template = fs.readFileSync("templates/entry.mustache", "utf-8");
  const partial = fs.readFileSync(entry.entryURL() + ".mustache", "utf-8");

  const entryContent = mustache.render(template, entry, {
    entry: partial,
  });
  fs.writeFileSync("build/" + entry.entryURL() + ".html", entryContent);

  // Find additional content and move it over
  if (entry.hasAdditionalContent && entry.hasAdditionalContent.length > 0) {
    entry.hasAdditionalContent.forEach((additionalContent) => {
      const basePath = `contributor/${entry.contributor}`;
      const additionalContentPath = path.join(basePath, additionalContent);
      if (!fs.existsSync(additionalContentPath)) {
        console.warn(
          `Could not find additional content for ${entry.entryURL()}: ${additionalContent}`
        );
      } else {
        console.log(
          `Adding additional content for ${entry.entryURL()}: ${additionalContent}`
        );
        const additionalContentTargetPath = path.join(
          "build/contributor",
          entry.contributor,
          additionalContent
        );
        fs.copyFileSync(additionalContentPath, additionalContentTargetPath);
      }
    });
  }
});
