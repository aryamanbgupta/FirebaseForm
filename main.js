
/*const firebaseConfig = {
    apiKey: "AIzaSyCwPjTMloohbaQnNn8-EcA-M3NBqQ-Isys",
    authDomain: "fir-form-ef160.firebaseapp.com",
    databaseURL: "https://fir-form-ef160-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-form-ef160",
    storageBucket: "fir-form-ef160.appspot.com",
    messagingSenderId: "1083873191297",
    appId: "1:1083873191297:web:22ceff31fbe49829613480"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);*/

//reference registration collection


var regRef= firebase.database().ref('registrations')



// Listen for form submit
document.getElementById('registrationForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    //get values
    var firstName = getInputVal('firstName');
    var lastName = getInputVal('lastName');
    var number = getInputVal('number');
    var email = getInputVal('email');
    var password = getInputVal('password');

    //save the registration
    saveReg(firstName, lastName, number,email,password);

    //show alert
    document.querySelector('.alert').style.display='block';

    //hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    },3000);

    document.getElementById('registrationForm').reset();
}


//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save reg to firebase
function saveReg(firstName, lastName, number,email,password){
    var newRegRef= regRef.push();
    newRegRef.set({
        firstName:firstName,
        lastName:lastName,
        number:number,
        email:email,
        password:password
    })
}