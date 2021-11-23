'use strict';
const sql = require('./db.js');

//Log object constructor
let Log = function (log) {
    this.programName = log.programName;
    this.programLeader = log.programLeader;
    this.programYear = log.programYear;
    this.injuryDate = log.injuryDate;
    this.injuryTime = log.injuryTime;
    this.nameOfInjured = log.nameOfInjured;
    this.injuryLocation = log.injuryLocation;
    this.treatmentGiven = log.treatmentGiven;
    this.howInjuryOccurred = log.howInjuryOccurred;
    this.whereInjuryOccurred = log.whereInjuryOccurred;
    this.staffName = log.staffName;
};

Log.createLog = function (newLog, result) {
    sql.query("INSERT INTO MinorInjuryLog set ?", newLog, function (err, res) {
        if (err) {
            console.log("ERROR: ", err);
            result(err, null);
        } else {
            console.log(`Successfully logged Injury! Report ID: ${res.insertId}`);
            result(null, res.insertId);
        }
    });
};

Log.getAllLogs = function (result) {
    sql.query("Select * from MinorInjuryLog", function (err, res) {
        if (err) {
            console.log("ERROR: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Log.getLogByID = function (logID, result) {
    sql.query("Select id, programName, programLeader, programYear, injuryDate, injuryTime, nameOfInjured, injuryLocation, treatmentGiven, howInjuryOccurred, whereInjuryOccurred, staffName from MinorInjuryLog where id = ? ", logID, function (err, res) {
        if (err) {
            console.log("ERROR: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Log.updateByID = function (id, log, result) {
    sql.query("UPDATE MinorInjuryLog SET programName = ?, programLeader = ?, programYear = ?, injuryDate = ?,  injuryTime = ?, nameOfInjured = ?, injuryLocation = ?, treatmentGiven = ?, howInjuryOccurred = ?, whereInjuryOccurred = ?, staffName = ? WHERE id = ?", [log.programName, log.programLeader, log.programYear, log.injuryDate, log.injuryTime, log.nameOfInjured, log.injuryLocation, log.treatmentGiven, log.howInjuryOccurred, log.whereInjuryOccurred, log.staffName, id], function (err, res) {
        if (err) {
            console.log("ERROR: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Log.remove = function (id, result) {
    sql.query("DELETE FROM MinorInjuryLog WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("ERROR: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


module.exports = Log;