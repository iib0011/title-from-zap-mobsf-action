const core = require('@actions/core');
const fs = require("fs");
const { getObservatoryTitle } = require('./observatory');
const {
    getZapTitle
} = require('./zap');

try {
    let zapRawData;
    if (fs.existsSync(core.getInput("zap"))) {
        zapRawData = fs.readFileSync(core.getInput("zap"));
    }
    const zap = zapRawData ? JSON.parse(zapRawData) : null;
    const observatory = fs.readFileSync(core.getInput("observatory"),"utf-8")
    core.setOutput('title',`${getZapTitle(zap)}${getObservatoryTitle(observatory)}`);
    
} catch (error) {
    core.setFailed(error.message);
}