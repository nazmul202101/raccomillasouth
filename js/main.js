// Initialize Firebase
var config = {
apiKey: "AIzaSyCViqC1424Er7aUpy6A7R_96Bq0gAIp5Y4",
authDomain: "contactform-5234d.firebaseapp.com",
databaseURL: "https://contactform-5234d.firebaseio.com",
projectId: "contactform-5234d",
storageBucket: "contactform-5234d.appspot.com",
messagingSenderId: "586911932979"
};
firebase.initializeApp(config);
//Referance Messages Collection
var messagesRef = firebase.database().ref('messages');
//Listen for Form Submit
document.getElementById('contactForm').addEventListener('submit',submitForm);
//Submit Form
function submitForm(e){
e.preventDefault();
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');
//Save Message
saveMessage(name,company,email,phone,message);
}
//Function to get get form valus
function getInputVal(id){
return document.getElementById(id).value;
}
//Save the Message to Firebase
function saveMessage(name,company,email,phone,message){
var newMessageRef= messagesRef.push();
newMessageRef.set({
Name:name,
Company:company,
Email:email,
Phone:phone,
Message:message
})
}