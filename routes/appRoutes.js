'use strict';

module.exports = function (app) {
    let todoList = require('../controller/appController');

    // ADDED
    // Added / route to render the form page
    app.route('/')
        .get(todoList.index_test_page)

    // todoList Routes
    app.route('/tests')
        .get(todoList.list_all_tests)
        .post(todoList.create_a_test);

    app.route('/tests/:testId')
        .get(todoList.read_a_test)
        .put(todoList.update_a_test)
        .delete(todoList.delete_a_test);
};
