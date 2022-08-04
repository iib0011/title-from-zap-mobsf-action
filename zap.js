const getZapTitle = (zap) => {
    if (!zap) return
    const alerts = zap.site[0].alerts
    const valuable = alerts.map((alert) => {
        return {
            risk: alert.riskdesc.split(" ")[0],
            desc: alert.desc.slice(3, -4),
            name: alert.name
        }
    })
    const riskOccurences = valuable.map(alert => alert.risk).reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    const zapHeader = '[ZAP]'
    if (riskOccurences['High']){
        return `${zapHeader}(High: ${riskOccurences['High']})`
    }
    if (riskOccurences['Medium']){
        return `${zapHeader}(Medium: ${riskOccurences['Medium']})`
    }
}
module.exports = {
    getZapTitle
}