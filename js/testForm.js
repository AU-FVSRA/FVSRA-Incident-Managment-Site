//not needed ???

function insertNew()
{
    let programName = $('#programName').val();
    let programLeader = $('#programLeader').val();
    let programYear = $('#programYear').val();
    let injuryDate = $('#injuryDate').val();
    let injuryTime = $('#injuryTime').val();
    let nameOfInjured = $('#nameOfInjured').val();
    let injuryLocation = $('#injuryLocation').val();
    let treatmentGiven = $('#treatmentGiven').val();
    let howInjuryOccurred = $('#howInjuryOccurred').val();
    let whereInjuryOccurred = $('#whereInjuryOccurred').val();
    let staffName = $('#staffName').val();

    let URL = "http://127.0.0.1:3000/MinorInjuryLog";

    let d = {
        programName : `${programName}`,
        programLeader : `${programLeader}`,
        programYear : `${programYear}`,
        injuryDate : `${injuryDate}`,
        injuryTime : `${injuryTime}`,
        nameOfInjured : `${nameOfInjured}`,
        injuryLocation : `${injuryLocation}`,
        treatmentGiven : `${treatmentGiven}`,
        howInjuryOccurred : `${howInjuryOccurred}`,
        whereInjuryOccurred : `${whereInjuryOccurred}`,
        staffName : `${staffName}`
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