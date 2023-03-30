// Author:Jomol George
// Date: 27-02-2023function ValidateEmail(mail)

function validate() {
    a = document.getElementById("m").value;
    var xreg =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (a == "") {
        alert("Please enter the mail id");
        return false;
    } else if (!xreg.test(a)) {
        alert("Please enter valid mail id");
        return false;
    }
    return true;
}
