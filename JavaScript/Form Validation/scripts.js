function valForm() {
    let val = document.forms["myForm"]["address"].value;

    if (val === "" || val.trim().length < minLength) {
        alert("Must fill out.");
    } else if (isNaN(val)) {
        alert("Must be a valid address")
    }

    else{
        return val;
    }

}