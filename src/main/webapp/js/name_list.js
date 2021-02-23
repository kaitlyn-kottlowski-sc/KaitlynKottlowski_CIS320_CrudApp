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