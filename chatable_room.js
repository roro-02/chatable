var firebaseConfig = {
      apiKey: "AIzaSyBxNp2LCy0XwdLm-mgRABVjdU0xDgsckt8",
      authDomain: "chatable-fdf08.firebaseapp.com",
      databaseURL: "https://chatable-fdf08-default-rtdb.firebaseio.com",
      projectId: "chatable-fdf08",
      storageBucket: "chatable-fdf08.appspot.com",
      messagingSenderId: "208997230344",
      appId: "1:208997230344:web:51a580fccc767aa1072ebd",
      measurementId: "G-Z2XWMYYHR8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - ", Room_names);
      row = "<div class= 'room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"+ Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chatable_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "chatable_page.html";
}