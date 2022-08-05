var mysql = require("mysql");
const core = require('@actions/core');
var connection = mysql.createConnection({
  host: core.getInput("DB_HOST"),
  user: core.getInput("DB_USER"),
  password: core.getInput("DB_PWD"),
  database: core.getInput("DB_NAME"),
});
connection.connect();
const observatoryTable = "observatory_issues";
const zapTable = "zap_issues";
function getZapIssues(cb) {
  connection.query(
    `SELECT name from ${zapTable}`,
    function (error, results, fields) {
      if (error) throw error;
      cb(results.map((issue) => issue.name));
    }
  );
}
function createZapIssue(issue) {
  const sql = `INSERT INTO ${zapTable} (name) VALUES ('${issue}')`;
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
  });
}
function createObservatoryIssue(issue) {
    const sql = `INSERT INTO ${observatoryTable} (name) VALUES ('${issue}')`;
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
    });
  }
function getObservatoryIssues(cb) {
  connection.query(
    `SELECT name from ${observatoryTable}`,
    function (error, results, fields) {
      if (error) throw error;
      cb(results.map((issue) => issue.name));
    }
  );
}
function endCOnnection() {
  connection.end();
}
module.exports = {
  getZapIssues,
  endCOnnection,
  createZapIssue,
  getObservatoryIssues,
  createObservatoryIssue
};
