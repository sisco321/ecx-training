// Paste the code from Firebase
var config = {
    apiKey: "",
    authDomain: "https://ecx-training-2c877.web.app/",
    databaseURL: "https://ecx-training-2c877-default-rtdb.firebaseio.com/",
    projectId: "ecx-training-2c877",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1:239653999826:web:cff7327da3aa708035c90b"
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