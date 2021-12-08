function logout() {
   
   localStorage.setItem("username", username);
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
 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username;
//firebase.


function addroom() {
   roomname = document.getElementById("roomname").value;
 firebase.database().ref().child(roomname).update({
     purpose: "addingroomname"
    });

firebase.database().ref().child(roomname);

   localStorage.setItem("roomname", roomname);
   window.location = "Lets-Chat.html"; 
}


function getData() {
   firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
         childKey = childSnapshot.key;
         // Start Code
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id=" + Room_names + " onclick='RedirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row;
         // End Code
      });
   });
}
   getData();



   function RedirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "Lets-Chat.html";
   }
//}