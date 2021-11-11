'use strict';

const Test = require("../model/appModel");

exports.list_all_tests = function (req, res) {
    Test.getAllTests(function (err, test) {
        console.log('controller')
        if(err) res.send(err);
        console.log('res', test);
        res.send(test);
    });
};

exports.create_a_test = function (req, res) {
    let new_test = new Test(req.body);
    //handles null error
    if (!new_test.program_name || !new_test.program_leader || !new_test.program_year || !new_test.injury_date || !new_test.injury_time || !new_test.name_injured || !new_test.location_injury || !new_test.treatment || !new_test.how_injury || !new_test.where_injury || !new_test.staff) {
        res.status(400).send({error: true, message: 'Please provide full information'});
    } else {
        Test.createTest(new_test, function (err, test) {
            if(err) res.send(err);
            res.json(test);
        });
    }
};

exports.read_a_test = function (req, res) {

    Test.getTestById(req.params.testId, function (err, test) {
        if(err) res.send(err);
        res.json(test);
    });
};

exports.update_a_test = function (req, res) {
    let new_test = new Test(req.body);

    if (!new_test.program_name || !new_test.program_leader || !new_test.program_year || !new_test.injury_date || !new_test.injury_time || !new_test.name_injured || !new_test.location_injury || !new_test.treatment || !new_test.how_injury || !new_test.where_injury || !new_test.staff) {
        res.status(404).send({error: true, message: 'Please update full information'});
    } else {
        Test.updateById(req.params.testId, new Test(req.body), function (err, test) {
            if(err) res.send(err);
            res.json(test);
        });
    }
};

exports.delete_a_test = function (req, res) {
    Test.remove(req.params.testId, function (err, test) {
        if(err) res.send(err);
        res.json({message: 'Test successfully deleted'});
    });
};

