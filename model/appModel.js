//edited appModel.js

'use strict';
const sql = require('./db.js');

//Test object constructor
let Test = function(test) {
    this.program_name = test.program_name;
    this.program_leader = test.program_leader;
    this.program_year = test.program_year;
    this.injury_date = test.injury_date;
    this.injury_time = test.injury_time;
    this.name_injured = test.name_injured;
    this.location_injury = test.location_injury;
    this.treatment = test.treatment;
    this.how_injury = test.how_injury;
    this.where_injury = test.where_injury;
    this.staff = test.staff;
};

Test.createTest = function (newTest, result) {
    sql.query("INSERT INTO tests set ?", newTest, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Test.getAllTests = function (result) {
    sql.query("Select * from tests", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            console.log('test : ', res);
            result(null, res);
        }
    });
};

Test.getTestById = function (testId, result) {
    sql.query("Select id, program_name, program_leader, program_year, injury_date, injury_time, name_injured, location_injury, treatment, how_injury, where_injury, staff from tests where id = ? ", testId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else {
            result(null, res);
        }
    });
};

Test.updateById = function (id, test, result) {
    sql.query("UPDATE tests SET program_name = ?, program_leader = ?, program_year = ?, injury_date = ?,  injury_time = ?, name_injured = ?, location_injury = ?, treatment = ?, how_injury = ?, where_injury = ?, staff = ? WHERE id = ?", [test.program_name, test.program_leader, test.program_year, test.injury_date, test.injury_time, test.name_injured, test.location_injury, test.treatment, test.how_injury, test.where_injury, test.staff, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};

Test.remove = function (id, result) {
    sql.query("DELETE FROM tests WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};


module.exports = Test;