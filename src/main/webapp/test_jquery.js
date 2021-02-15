/*
Test jQuery script
 */

let paragraphs = $("p");

console.log("There are "+paragraphs.length + " paragraphs.");

// PRINT ALL PARAGRAPH CONTENT
for(let i = 0; i < paragraphs.length; i++) {
    let paragraphText = paragraphs[i].textContent;
    console.log(paragraphText);
}


// ADD ROW TO TABLE
function myUpdateFunction(event) {
    let fieldValue = $("#myTextField").val();
    $("#tableName tbody").append("<tr><td>"+ fieldValue + "</td></tr>");
}

let formButton1 = $("#button1");
formButton1.on("click", myUpdateFunction);


// HIDE FUNCTION
function hideFunction(event) {
    // takes 500 ms to hide
    $("#hideme").hide(500);
}
let formButton2 = $("#button2");
formButton2.on("click", hideFunction);


// VALIDATE INPUT WITH REGULAR EXPRESSIONS
function validateFunction(event) {
    let formField = $("#validateMe").val();

    // ^ means the beginning of input
    // $ means the end of input
    // Accepts upper and lower case, with 1-10 characters
    // don't allow spaces in the regular expression
    let regExpression = /^[A-Za-z]{1,10}$/;

    if (regExpression.test(formField)) {
        console.log("Good");
    } else {
        console.log("Bad");
    }
}

let formButton3 = $("#button3");
formButton3.on("click", validateFunction);


// JSON FUNCTION
function jsonFunction(event) {
    let formJsonObject = {};
    let formVal = $("#myName").val();
    formJsonObject.myName = formVal;
    let jsonString = JSON.stringify(formJsonObject);
    console.log(jsonString);
    $("#jsonResult").text(jsonString);
}

let formButton4 = $("#button4");
formButton4.on("click", jsonFunction);