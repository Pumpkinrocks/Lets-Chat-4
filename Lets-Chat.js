function adduser() {
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "Lets-Chat_room.html";

}