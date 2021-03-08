// Paste the code from Firebase
var config = {
    apiKey: "",
    authDomain: "https://ect-training.web.app/",
    databaseURL: "https://ect-training-default-rtdb.firebaseio.com/",
    projectId: "ect-training",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1:1072509775461:web:8fbfefae3b9bc68baee08c"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('contactformmessages');

$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        username: $('.fullname').val(),
        password: $('.email').val(),
       
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});
