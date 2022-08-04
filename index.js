const core = require('@actions/core');
const fs = require("fs");
const { getObservatoryTitle, getObservatorySummary } = require('./observatory');
const {
    getZapTitle, getZapSummary
} = require('./zap');

try {
    let zapRawData;
    if (fs.existsSync(core.getInput("zap"))) {
        zapRawData = fs.readFileSync(core.getInput("zap"));
    }
    const zap = zapRawData ? JSON.parse(zapRawData) : null;
    const observatory = fs.readFileSync(core.getInput("observatory"),"utf-8")
    
    // const zap = JSON.parse(fs.readFileSync("zap.json"));
    // const observatory = fs.readFileSync("obs.md","utf-8");

    core.setOutput('title',`${getZapTitle(zap)}${getObservatoryTitle(observatory)}`);
    core.setOutput('summary',`\n\n${getZapSummary(zap)}\n\n${getObservatorySummary(observatory)}`)


    // console.log(`${getZapTitle(zap)}${getObservatoryTitle(observatory)}`)
    // console.log(`${getZapSummary(zap)}\n\n${getObservatorySummary(observatory)}`)

    
} catch (error) {
    core.setFailed(error.message);
}