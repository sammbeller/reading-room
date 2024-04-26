export function processPoemIntoPartial(poemBody) {
  const lines = poemBody.split("\n");
  const trimmedLines = lines.map((line) => line.trim());
  const modifiedLines = trimmedLines.map((line) => {
    if (line.length === 0) {
      return String.raw`</p><p class="stanza">`;
    } else {
      return line + "<br />";
    }
  });
  return [`<p class="stanza">`].concat(modifiedLines, [`</p>`]).join("\n");
}
