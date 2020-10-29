var firebaseConfig = {
  apiKey: "AIzaSyBLto3Wc4D1L7x3rS4KFMSMfWwRTXlDZrs",
  authDomain: "oyagaconsultores-f15dc.firebaseapp.com",
  databaseURL: "https://oyagaconsultores-f15dc.firebaseio.com",
  projectId: "oyagaconsultores-f15dc",
  storageBucket: "oyagaconsultores-f15dc.appspot.com",
  messagingSenderId: "467593008615",
  appId: "1:467593008615:web:387bc2478df5b5f1c05942",
  measurementId: "G-QN6TL57WJX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref("messages");
// lista el formulario para ser enviando
document
  .getElementById("contactoForm")
  .addEventListener("submit", EnviarFormulario);

//envio de formulario

function EnviarFormulario(e) {
  e.preventDefault();
  // console.log(123);
  //get value
  var email = getInputVal("email");
  var confirmacion = getInputVal("confirmacion");
  var ciudad = getInputVal("ciudad");
  var celular = getInputVal("celular");
  var mensaje = getInputVal("mensaje");
  console.log(email);
  saveMessage(email, confirmacion, ciudad, celular, mensaje);
}

//CREO LA FUNCION DE GET GET PARA FORMULARIO

function getInputVal(id) {
  return document.getElementById(id).value;
}

// guardar mensaje de firebise
function saveMessage(email, confirmacion, ciudad, celular, mensaje) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
    confirmacion: confirmacion,
    ciudad: ciudad,
    celular: celular,
    mensaje: mensaje,
  });
}
