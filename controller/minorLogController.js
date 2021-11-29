'use strict';

const Log = require("../model/minorLogModel");

/* Jared:
   Added temporary index controller that just renders the form page (pug template)
   pretty sure that the html page was just out of scope for this project
   the routes therefore couldn't/didn't know what to do with it's data
*/

exports.index_test_page = function (req, res) { //might change this later
    res.render('index.pug', {
        user: {isLoggedIn: false},
        copyright_current_year: new Date().getFullYear(),
        pretty: true
    });
};

exports.get_form_page = function (req, res) {
    let selected_form = req.body.formSelection;
    let pugOptions = {user: {isLoggedIn: false}, copyright_current_year: new Date().getFullYear(), pretty: true}

    // No rendering done here????
    // Where should this be rendered? (Do a res.redirect() to the form page?)
    switch (selected_form) {
        case "minorInjuryForm":
            res.render("MinorInjuryReport.pug", pugOptions);
            break;
        default:
            // res.render("FormSuccessMessage.pug", {pretty: true});
            res.render("404.pug", {pretty: true});
    }
}

//-----------------------------------------------

exports.list_all_logs = function (req, res) {
    Log.getAllLogs(function (err, log) {
        if (err) res.send(err);
        res.send(log);
    });
};

exports.create_a_log = function (req, res) {
    let new_log = new Log(req.body);

    //handles null error
    if (!new_log.programName || !new_log.programLeader || !new_log.programYear || !new_log.injuryDate
        || !new_log.injuryTime || !new_log.nameOfInjured || !new_log.injuryLocation || !new_log.treatmentGiven
        || !new_log.howInjuryOccurred || !new_log.whereInjuryOccurred || !new_log.staffName) {
        res.status(400).send({error: true, message: 'Please provide full information'});
    } else {
        Log.createLog(new_log, function (err, log) {
            if (err) res.send(err);

            // Jared: Testing here
            //res.json(log);
            // res.redirect('/');
            res.render("FormSuccessMessage.pug", {pretty: true});
        });
    }
};

exports.read_a_log = function (req, res) {
    Log.getLogByID(req.params.logID, function (err, log) {
        if (err) res.send(err);
        res.json(log);
    });
};

exports.update_a_log = function (req, res) {
    let new_log = new Log(req.body);

    //handles null error
    if (!new_log.programName || !new_log.programLeader || !new_log.programYear || !new_log.injuryDate || !new_log.injuryTime || !new_log.nameOfInjured || !new_log.injuryLocation || !new_log.treatmentGiven || !new_log.howInjuryOccurred || !new_log.whereInjuryOccurred || !new_log.staffName) {
        res.status(404).send({error: true, message: 'Please update full information'});
    } else {
        Log.updateByID(req.params.logID, new Log(req.body), function (err, log) {
            if (err) res.send(err);
            res.json(log);
        });
    }
};

exports.delete_a_log = function (req, res) {
    Log.remove(req.params.logID, function (err, log) {
        if (err) res.send(err);
        res.json({message: 'Log successfully deleted'});
        res.json(log); //might want to delete this later...
    });
};