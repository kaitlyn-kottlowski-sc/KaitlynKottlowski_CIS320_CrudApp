// PRINT HELLO IN CONSOLE
function printConsole(event) {
    console.log("Hello");
}

let formButton1 = $("#button1");
formButton1.on("click", printConsole);

function addNumbers(event) {
    let field1 = $("#field1").val();
    let field2 = $("#field2").val();
    let sum = parseInt(field1) + parseInt(field2);
    $("#field3").val(sum);
}

let formButton2 = $("#button2");
formButton2.on("click", addNumbers)

function toggleFunction(event) {
    // takes 500 ms to hide/show
    $("#paragraphToHide").toggle(500);
}
let formButton3 = $("#button3");
formButton3.on("click", toggleFunction);

function validatePhoneNumber(event) {
    let value = $("#phoneField").val();
    let regExpression = /^[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}$/;
    if (regExpression.test(value)) {
        console.log("OK");
    } else {
        console.log("Bad");
    }
}
let formButton4 = $("#button4");
formButton4.on("click", validatePhoneNumber);

function jsonFunction(event) {
    let formJsonObject = {};
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    formJsonObject.firstName = firstName;
    formJsonObject.lastName = lastName;
    formJsonObject.email = email;
    let jsonString = JSON.stringify(formJsonObject);
    console.log(jsonString);
}

let formButton5 = $("#button5");
formButton5.on("click", jsonFunction);

