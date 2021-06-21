
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDTLyUfQ9f6qQKkTaPgNoTQ4WxMTe4uUrs",
      authDomain: "project-93-97.firebaseapp.com",
      databaseURL:"project-93-97-default-rtdb",
      projectId: "project-93-97",
      storageBucket: "project-93-97.appspot.com",
      messagingSenderId: "875425587853",
      appId: "1:875425587853:web:17df982cd15ecaa13db8c4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var User_name = localStorage.getItem("User_name");
    document.getElementById("User_name").innerHTML="Welcome "+User_name+"!!!";

    function addRoom(){
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      var row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout()
