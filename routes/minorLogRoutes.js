'use strict';

module.exports = function (app) {
    let schema = require('../controller/minorLogController');

    // ADDED
    // Added / route to render the form page
    app.route('/')
        .get(schema.index_test_page)

    // Routes for for getting the form selected on the main page
    app.route('/formSelection')
        .get(schema.get_form_page)
        .post(schema.get_form_page)

    // Routes for the admin page
    app.route('/admin/reports')
        .get(schema.get_admin_page)

    // route for updating the form
    app.route('/updateForm')
        .get(schema.render_minor_injury_update_page)
        .post(schema.update_minor_injury_log)

    // route for deleting the form
    app.route('/deleteForm')
        .get(schema.delete_minor_injury_log)

    // -------------------------------------------------
    // REST routes

    // schema Routes
    app.route('/MinorInjuryLog')
        .get(schema.list_all_logs)
        .post(schema.create_a_log);

    app.route('/MinorInjuryLog/:logID')
        .get(schema.read_a_log)
        .put(schema.update_a_log)
        .delete(schema.delete_a_log);

    app.route('*')
        .get(schema.not_found_error);
};
