const { analyseZap } = require("./utils");
const zapHeader = "[ZAP]";
const high = "High";
const medium = "Medium";
const getZapTitle = (zap) => {
  if (!zap) return;
  const [alerts, riskOccurences] = analyseZap(zap);
  let result;
  const checkAlerts = (severity) => {
    if (riskOccurences[severity]) {
      result = `${zapHeader}(${severity}: ${riskOccurences[severity]})`;
    }
  };
  checkAlerts(medium);
  checkAlerts(high);
  return result;
};
const getZapSummary = (zap) => {
  if (!zap) return;
  const [alerts, riskOccurences] = analyseZap(zap);
  let result;
  const checkAlerts = (severity) => {
    if (riskOccurences[severity]) {
      result = alerts
        .filter((alert) => alert.risk === severity)
        .reduce((prev, curr, index) => {
          return ` ${prev}\n${index + 1}) ${curr.name}`;
        }, `${zapHeader}\n\n${severity}\n`);
    }
  };
  checkAlerts(medium);
  checkAlerts(high);
  return result;
};
module.exports = {
  getZapTitle,
  getZapSummary,
};
