'use strict';

module.exports = function (app) {
    let schema = require('../controller/minorLogController');

    // ADDED
    // Added / route to render the form page
    app.route('/')
        .get(schema.index_test_page)

    // schema Routes
    app.route('/MinorInjuryLog')
        .get(schema.list_all_logs)
        .post(schema.create_a_log);

    app.route('/MinorInjuryLog/:logID')
        .get(schema.read_a_log)
        .put(schema.update_a_log)
        .delete(schema.delete_a_log);
};
