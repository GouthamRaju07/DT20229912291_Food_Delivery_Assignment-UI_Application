const Url = 'https://sfxz3aprr7.execute-api.us-east-1.amazonaws.com/Finish1/changeuserinfor';
function signup() {
    var fname=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var userinput = document.getElementById("username").value;
    var passinput = document.getElementById("password").value;
    var conpass = document.getElementById("confirm_password").value;
    var addressinput = document.getElementById("address").value;
    var addressinput1 = document.getElementById("address1").value;
    var cityinput = document.getElementById("citySelect").value;
    var stateinput = document.getElementById("countrySelect").value;
    var zipinput = document.getElementById("zip").value;
    var newUserStatus = false;

    var p1=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (fname !==null && lname !=='' && userinput !== null && userinput !== '' && passinput !== null && passinput !== '' && conpass !== null && conpass !== '' && addressinput !== null && addressinput !== '' && addressinput1 !=='' && addressinput1 !==null && cityinput !== null && cityinput !== '' && stateinput !== null && stateinput !== '' && zipinput !== null && zipinput !== '') {
        
        if(p1.test(passinput))
    {
        if(passinput==conpass)
        {
            newUserStatus = true;
        }
    
        else
        {
             alert("Passwords should match, Please Veify.");
        }
    }
    else
    {
        alert("Password must contain at least one number, one uppercase, one lower case letter, one special character and must be at least 8 characters long.");
    }
    
    }
    const data =
    {
        "newUserStatus": newUserStatus,
        "firstname": fname,
        "lastname": lname,
        "username": userinput,
        "userPassword": passinput,
        "userConpass": conpass,
        "userAddress": addressinput,
        "userAddress1": addressinput1,
        "userCity": cityinput,
        "userState": stateinput,
        "userZipcode": zipinput
    }

    if (newUserStatus == true) {
        $.ajax({
            url: Url,
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            success: function () {
                alert("New accounnt has been created. You can Login now");
            },
            error: function () {
                alert("New accounnt has been created. You can Login now");
            }
        });
        document.getElementById('firstname').innerHTML = '';
        document.getElementById('lastname').innerHTML = '';
        document.getElementById('username').innerHTML = '';
        document.getElementById('password').innerHTML = '';
        document.getElementById('confirm_password').innerHTML = '';
        document.getElementById('address').innerHTML = '';
        document.getElementById('address1').innerHTML = '';
        document.getElementById('citySelect').innerHTML = '';
        document.getElementById('countrySelect').innerHTML = '';
        document.getElementById('zip').innerHTML = '';
    }
    else {
        alert("Can't create account. Please fill out completely everything");
    }

}