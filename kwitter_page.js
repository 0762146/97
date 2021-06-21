//YOUR FIREBASE LINKS
var username = localStorage.getItem("User_name");
var roomname = localStorage.getItem("room_name");

function send(){
      var msg = document.getElementById("input_message").value;
      firebase.database().ref(roomname).push({
            name : username,
            message : msg,
            like : 0
      });
      document.getElementById("input_message").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 
function logout(){
      localStorage.removeItem("User_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}