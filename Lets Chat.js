function logout() {

    localStorage.removeItem("username");
    window.location = "index.html";
}


var firebaseConfig = {
    apiKey: "AIzaSyDAktF0tIYOUjRlJfeIVIHkB5LPE5-b0Vk",
    authDomain: "lets-chat-3a9a5.firebaseapp.com",
    databaseURL: "https://lets-chat-3a9a5-default-rtdb.firebaseio.com",
    projectId: "lets-chat-3a9a5",
    storageBucket: "lets-chat-3a9a5.appspot.com",
    messagingSenderId: "81759109961",
    appId: "1:81759109961:web:deb064928ef6fdbb075098"
  };
  

  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username");
  roomname = localStorage.getItem("roomname");


  function send() {

    message = document.getElementById("message").value;
    firebase.database().ref(roomname).push({
          name: username,
          message: message,
          likes: 0
    });
    document.getElementById("message").value ="";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();