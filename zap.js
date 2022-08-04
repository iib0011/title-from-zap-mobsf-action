const { analyseZap } = require("./utils");
const zapHeader = '[ZAP]'

const getZapTitle = (zap) => {
    if (!zap) return
    const [alerts, riskOccurences] = analyseZap(zap);
    if (riskOccurences['High']){
        return `${zapHeader}(High: ${riskOccurences['High']})`
    }
    if (riskOccurences['Medium']){
        return `${zapHeader}(Medium: ${riskOccurences['Medium']})`
    }
}
const getZapSummary = (zap) => {
    if (!zap) return
    const [alerts, riskOccurences] = analyseZap(zap);
    const high = "High"
    const medium = "Medium"
    if(riskOccurences[high]){
        return alerts.filter(alert=>alert.risk === high).reduce((prev,curr, index)=>{return `${index+1}) ${prev}\n${curr.name}`},`${zapHeader}\n\n${high}\n`)
    }

    if(riskOccurences[medium]){
        return alerts.filter(alert=>alert.risk === medium).reduce((prev,curr, index)=>{return `${prev}\n${index+1})${curr.name}`},`${zapHeader}\n\n${medium}\n`)
    }
}
module.exports = {
    getZapTitle,
    getZapSummary
}