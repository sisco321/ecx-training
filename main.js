// Paste the code from Firebase
var config = {
    apiKey: "",
    authDomain: "https://ecx-training-d34f5.web.app/",
    databaseURL: "https://ecx-training-d34f5-default-rtdb.firebaseio.com/",
    projectId: "ecx-training-d34f5",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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
