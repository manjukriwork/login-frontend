$(document).ready(function() {
    $('#loginform').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission
        

        const formData = {
            email: $('#email').val(),
            password: $('#password').val()
        };
        // console.log("Submitting form with data:", formData);

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:5000/api/auth/login',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                console.log("Success response:", response);
                
        if (window.sessionStorage) {
            sessionStorage.setItem("token", response.token);
            sessionStorage.setItem("email", formData.email);
        }
    
                $('#result').html('Login successful: ' + response.token);
                // Redirect to another page if needed
                window.location.href = 'getdata.html';
            },
            error: function(xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                $('#result').html('Error - ' + errorMessage);
            }
        });
    });
});