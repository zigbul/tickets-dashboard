import firebase from "../firebase";

function writeUserData(ticketId, data) {
    firebase.firestore().collection('tickets').doc(ticketId).set({
        ...data
    });
  }

  export default writeUserData;