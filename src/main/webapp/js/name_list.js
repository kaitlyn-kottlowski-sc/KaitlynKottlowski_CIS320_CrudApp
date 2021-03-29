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
                    + '</td>'
                    + '<td>'
                    +   '<button type=\'button\' name=\'delete\' ' +
                            'class=\'deleteButton btn btn-danger\' value=\''+json_result[i].id +'\'>'
                    +      '\nDelete\n'
                    +   '</button>'
                    + '</td>'
                    + '</tr>');
            }
            $(".deleteButton").on("click", deleteItem);
        }
    );
}

updateTable();

function clearFields(input)
{
    input.removeClass("is-invalid");
    input.removeClass("is-valid");
    input.val("");
}

// Called when "Add Item" button is clicked
function showDialogAdd() {

    // Print that we got here
    console.log("Opening add item dialog");

    // Clear out the values in the form.
    // Otherwise we'll keep values from when we last
    // opened or hit edit.
    // I'm getting it started, you can finish.
    clearFields($('#firstName'));
    clearFields($('#lastName'));
    clearFields($('#email'));
    clearFields($('#phone'));
    clearFields($('#birthday'));

    // Show the hidden dialog
    $('#myModal').modal('show');
}

// There's a button in the form with the ID "addItem"
// Associate the function showDialogAdd with it.
let addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

function validate(input, reg, type)
{
    if (reg.test(input.val())) {
        console.log("Good "+ type);
        // Set style for outline of form field
        // This is a VALID field
        input.removeClass("is-invalid");
        input.addClass("is-valid");
    } else {
        console.log("Bad " + type);
        // This is an INVALID field
        input.removeClass("is-valid");
        input.addClass("is-invalid");
        isValid = false;
    }
}

let isValid;
function saveChanges() {
    isValid = true;
    console.log("Save changes");

    let firstName = $('#firstName');
    let lastName = $('#lastName');
    let nameReg = /^[A-Za-zÀ-Úà-ú' -]{2,45}$/;

    validate(firstName, nameReg, "first name");
    validate(lastName, nameReg, "last name");

    let email = $('#email');
    let emailReg = /^[^ ]+@[^ ]+$/
    validate(email, emailReg, "email");

    let phone = $('#phone');
    let phoneReg = /^[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}$/;
    validate(phone, phoneReg, "phone");

    let birthday = $('#birthday');
    let birthdayReg = /^\d{4}-\d{2}-\d{2}$/
    validate(birthday, birthdayReg, "birthday");

    if (isValid) {
        console.log("Valid form");
        let my_data = {first: firstName.val(), last: lastName.val(),
        email: email.val(), phone:phone.val().replaceAll('/\D/g', ''), birthday: birthday.val()};
        addRecord(my_data);
        // Code to submit your form will go here.
    }


}

// There's a button in the form with ID "saveChanges"
// Associate the function saveChanges with it.
let saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", saveChanges);

function deleteItem(e) {
    console.log("Delete");
    console.log(e.target.value);
    deleteRecord(e.target.value);
}

<!-- AJAX Post using JSON data -->
function addRecord(dataToServer) {
    console.log("success? "+dataToServer);
    var url = "api/name_list_edit";

    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(dataToServer),
        success: function(dataFromServer) {
            console.log(dataFromServer);
            $('#myModal').modal('hide');
            $('#mytable tbody').empty();
            updateTable();
        },
        contentType: "application/json",
        dataType: 'text' // Could be JSON or whatever too
    });
}

function deleteRecord(id) {
    console.log("success? "+id);
    var url = "api/name_list_delete";

    $.ajax({
        type: 'POST',
        url: url,
        data: id,
        success: function(id) {
            $('#mytable tbody').empty();
            updateTable();
        },
        contentType: "application/json",
        dataType: 'text' // Could be JSON or whatever too
    });
}
