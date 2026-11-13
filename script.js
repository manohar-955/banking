
let balance = 1000;

function deposit() {

    let amount = Number(document.getElementById("amount").value);

    if (amount > 0) {
        balance = balance + amount;
        document.getElementById("balance").innerHTML = balance;
        alert("Amount Deposited");
    }
    else {
        alert("Enter valid amount");
    }
}

function withdraw() {

    let amount = Number(document.getElementById("amount").value);

    if (amount > 0 && amount <= balance) {
        balance = balance - amount;
        document.getElementById("balance").innerHTML = balance;
        alert("Amount Withdrawn");
    }
    else {
        alert("Invalid amount or insufficient balance");
    }
}
