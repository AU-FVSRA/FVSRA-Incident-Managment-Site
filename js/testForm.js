//testForm.js

function insertNew()
{
    let program_name = $('#programName').val();
    let program_leader = $('#programLeader').val();
    let program_year = $('#programSeasonYear').val();
    let injury_date = $('#injuryDate').val();
    let injury_time = $('#injuryTime').val();
    let name_injured = $('#nameOfInjured').val();
    let location_injury = $('#injuryLocation').val();
    let treatment = $('#treatmentAdministered').val();
    let how_injury = $('#howInjuryOccurred').val();
    let where_injury = $('#locationInjuryOccurred').val();
    let staff = $('#staffWhoNotified').val();

    let URL = "http://127.0.0.1:3000/tests";

    let d = {
        program_name : `${program_name}`,
        program_leader : `${program_leader}`,
        program_year : `${program_year}`,
        injury_date : `${injury_date}`,
        injury_time : `${injury_time}`,
        name_injured : `${name_injured}`,
        location_injury : `${location_injury}`,
        treatment : `${treatment}`,
        how_injury : `${how_injury}`,
        where_injury : `${where_injury}`,
        staff : `${staff}`
    };

    $.ajax({
        url: URL,
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify(d),
        success: function () {
            console.log(`Insertion Success`);
            //window.open("adminPage.html","_self");
        },
        error: function (xhr, status, error) {
            alert("Error");
            console.log(`AJAX ERROR - INSERTION`);
            console.log(error);
        }
    })
}