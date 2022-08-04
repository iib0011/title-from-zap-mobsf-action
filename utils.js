const analyseZap = (zap) =>{
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
    return [valuable, riskOccurences]
}

module.exports={
    analyseZap
}