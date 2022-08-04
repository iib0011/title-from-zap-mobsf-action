const getObservatoryTitle = (observatory) => {
    if(!observatory) return
    const obsHeader = '[OBS]';
    const issuesCount = observatory.split("red_circle").length - 1;
    return `${obsHeader}(${issuesCount} ${issuesCount === 1?"Issue":"Issues"})`;
}
module.exports = {
    getObservatoryTitle
}