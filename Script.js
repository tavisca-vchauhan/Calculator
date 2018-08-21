var storedData = "";

function Numbers(d) {
    d = document.getElementById("viewer").innerHTML + "" + d;
    document.getElementById("viewer").innerHTML = d;
}

function Result() {
    var stringDOM = document.getElementById("viewer").innerHTML;
    stringDOM += "";
    storedData += "<br>Expression = " + stringDOM;
    storedData += "  |  Result = " + eval(stringDOM);
    document.getElementById("viewer").innerHTML = eval(stringDOM);
}

function ResultByText() {
    var stringDOM = document.getElementById("input-string").value;
    stringDOM += "";
    storedData += "<br>Expression = " + stringDOM;
    storedData += "  |  Result = " + eval(stringDOM);
    document.getElementById("input-string").value = "";
    document.getElementById("viewer").innerHTML = eval(stringDOM);
}

function SetNull() {
    document.getElementById("viewer").innerHTML = "";
}

function func(event) {
    if (event.keyCode === 13) {
        ResultByText();
    }
}

function History() {
    var node = document.getElementById('hist')
    var visibility = node.style.visibility;
    node.style.visibility = visibility == "visible" ? 'hidden' : "visible"
    document.getElementById("hist").innerHTML = storedData;

}