const { createObservatoryIssue } = require("./db");
const obsHeader = "[OBS]";
const getObservatoryTitle = (observatory) => {
  if (!observatory) return;
  const issuesCount = observatory.split("red_circle").length - 1;
  return `${obsHeader}(${issuesCount} ${
    issuesCount === 1 ? "Issue" : "Issues"
  })`;
};
const getObservatorySummary = (observatory, dbIssues) => {
  if (!observatory) return;
  const issues = observatory
    .split(":red_circle:")
    .slice(1)
    .map((issueRow, index) => {
      const issue = issueRow.split("|").slice(2)[0];
      const issueInDB = dbIssues.some((dbIssue) => issue.trim() === dbIssue);
      if (!issueInDB) {
        createObservatoryIssue(issue.trim());
      }
      return `${index + 1}) ${issue}${issueInDB ? "" : "(NEW)"}`;
    });
  return `${obsHeader}\n\n${issues}`;
};
module.exports = {
  getObservatoryTitle,
  getObservatorySummary,
};
