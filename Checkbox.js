const myCheckBox = document.getElementById("myCheckBox");
const myVisa = document.getElementById("myVisa");
const myPayPal = document.getElementById("myPayPal");
const myMasterCard = document.getElementById("myMasterCard");
const mySubmit = document.getElementById("mySubmit");
const subscription = document.getElementById("subscription");
const payment = document.getElementById("payment");

mySubmit.onclick = function() {
    
    if(myCheckBox.checked) {
        subscription.textContent = "You Are Subscribed to the Channel";
    }
    else {
        subscription.textContent = "You Are NOT subscribed to the channel yet!";
    }
    if(myVisa.checked) {
        payment.textContent = "You selected Visa as the payment method";
    }
    else if(myPayPal.checked) {
        payment.textContent = "You selected PayPal as the payment method";
    }
    else if(myMasterCard.checked) {
        payment.textContent = "You selected MasterCard as the payment method";
    }
    else {
        payment.textContent = "You did NOT select a payment method!";
    }
}