$(document).ready(function() {
    $('#formfill').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission


        var formData = {
            name: $('#name').val(),
            dob: $('#dob').val(),
            gender : $('#gender').val(),
            age : parseInt($('#age').val()),
            phone : $('#phone').val(),
            email : $('#email').val(),
            password : $('#password').val(),
            height : parseInt($('#height').val()),
            weight : parseInt($('#weight').val()),
            address : $('#address').val(),
            pincode : $('#pincode').val(),
            qualification : $('#qualification').val()

        };
console.log(formData);

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:5000/api/auth/register', // Your form processing URL
            data: JSON.stringify(formData),
            dataType: 'json',
            contentType: 'application/json',
            encode: true,
            success: function(response) {
                // Handle the response from the server
                $('#result').html('Form submitted successfully: ' + response.message);
            },
            error: function(xhr, status, error) {
                // Handle any errors
                var errorMessage = xhr.status + ': ' + xhr.statusText
                $('#result').html('Error - ' + errorMessage);
            }
        });
    });
});