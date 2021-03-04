// Define a URL
let url = "api/name_list_get";

function htmlSafe(data) {
    return data.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
}

function updateTable() {
// Start a web call. Specify:
// URL
// Data to pass (nothing in this case)
// Function to call when we are done
    $.getJSON(url, null, function (json_result) {
            for (let i = 0; i < json_result.length; i++) {
                $('#mytable tbody').append('<tr><td>'
                    + (json_result[i].id)
                    + '</td><td>'
                    + htmlSafe(json_result[i].first)
                    + '</td><td>'
                    + htmlSafe(json_result[i].last)
                    + '</td><td>'
                    + htmlSafe(json_result[i].email)
                    + '</td><td>'
                    + htmlSafe(json_result[i].phone)
                    + '</td><td>'
                    + htmlSafe(json_result[i].birthday)
                    + '</td></tr>');
            }
        }
    );
}

updateTable();

// Called when "Add Item" button is clicked
function showDialogAdd() {

    // Print that we got here
    console.log("Opening add item dialog");

    // Clear out the values in the form.
    // Otherwise we'll keep values from when we last
    // opened or hit edit.
    // I'm getting it started, you can finish.
    $('#id').val("");
    $('#firstName').val("");

    // Show the hidden dialog
    $('#myModal').modal('show');
}

// There's a button in the form with the ID "addItem"
// Associate the function showDialogAdd with it.
let addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

function saveChanges() {
    console.log("Save changes");

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let nameReg = /^[A-zÀ-ú'-]{2,45}$/;

    if (nameReg.test(firstName)) {
        console.log("Ok first name");
        // Set style for outline of form field
        // This is a VALID field
        $('#firstName').removeClass("is-invalid");
        $('#firstName').addClass("is-valid");
    } else {
        // This is an INVALID field
        $('#firstName').removeClass("is-valid");
        $('#firstName').addClass("is-invalid");
    }

    if (nameReg.test(lastName)) {
        console.log("Ok last name");
        // Set style for outline of form field
        // This is a VALID field
        $('#lastName').removeClass("is-invalid");
        $('#lastName').addClass("is-valid");
    } else {
        // This is an INVALID field
        $('#lastName').removeClass("is-valid");
        $('#lastName').addClass("is-invalid");
    }

    let email = $('#email').val();
    let emailReg = /^[A-z0-9]*@[A-z]*.com$/
    if (emailReg.test(email)) {
        console.log("Ok email");
        // Set style for outline of form field
        // This is a VALID field
        $('#email').removeClass("is-invalid");
        $('#email').addClass("is-valid");
    } else {
        // This is an INVALID field
        $('#email').removeClass("is-valid");
        $('#email').addClass("is-invalid");
    }

    let phone = $('#phone').val();
    let phoneReg = /^[1-9]{1}[0-9]{2}-[1-9]{1}[0-9]{2}-[0-9]{4}$/
    if (phoneReg.test(phone)) {
        console.log("Ok phone");
        // Set style for outline of form field
        // This is a VALID field
        $('#phone').removeClass("is-invalid");
        $('#phone').addClass("is-valid");
    } else {
        // This is an INVALID field
        $('#phone').removeClass("is-valid");
        $('#phone').addClass("is-invalid");
    }

    let birthday = $('#birthday').val();
    let birthdayReg = /^[0[1-9]|[10-31]\/[0[1-9]|[10-12]\/[1900-2021]$/
    if (birthdayReg.test(birthday)) {
        console.log("Ok birthday");
        // Set style for outline of form field
        // This is a VALID field
        $('#birthday').removeClass("is-invalid");
        $('#birthday').addClass("is-valid");
    } else {
        // This is an INVALID field
        $('#birthday').removeClass("is-valid");
        $('#birthday').addClass("is-invalid");
    }
}

// There's a button in the form with ID "saveChanges"
// Associate the function saveChanges with it.
let saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", saveChanges);

function clearFields()
{
    $('#firstName').removeClass("is-invalid");
    $('#firstName').removeClass("is-valid");
    $('#firstName').val("");

    $('#lastName').removeClass("is-invalid");
    $('#lastName').removeClass("is-valid");
    $('#lastName').val("");

    $('#email').removeClass("is-invalid");
    $('#email').removeClass("is-valid");
    $('#email').val("");

    $('#phone').removeClass("is-invalid");
    $('#phone').removeClass("is-valid");
    $('#phone').val("");

    $('#birthday').removeClass("is-invalid");
    $('#birthday').removeClass("is-valid");
    $('#birthday').val("");

}

// There's a button in the form with ID "closeButton"
// Associate the function saveChanges with it.
let closeButton = $('#closeButton');
closeButton.on("click", clearFields);

// There's a button in the form with ID "closeXButton"
// Associate the function saveChanges with it.
let closeXButton = $('#closeXButton');
closeXButton.on("click", clearFields);
