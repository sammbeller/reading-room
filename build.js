import fs from "fs";
import mustache from "mustache";
import issue1View from "./views/issues/issue1.js";

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

