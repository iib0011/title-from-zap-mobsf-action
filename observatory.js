const obsHeader = "[OBS]";
const getObservatoryTitle = (observatory) => {
  if (!observatory) return;
  const issuesCount = observatory.split("red_circle").length - 1;
  return `${obsHeader}(${issuesCount} ${
    issuesCount === 1 ? "Issue" : "Issues"
  })`;
};
const getObservatorySummary = (observatory) => {
  if (!observatory) return;
  const issues = observatory
    .split(":red_circle:")
    .slice(1)
    .map((issue, index) => `${index+1}) ${issue.split("|").slice(2)}`);
  return `${obsHeader}\n\n${issues}`;
};
module.exports = {
  getObservatoryTitle,
  getObservatorySummary,
};
