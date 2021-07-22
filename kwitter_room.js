
var firebaseConfig = {
  apiKey: "AIzaSyAqoH0WYfzIkG0NTux19eQpvnD_rG41Uw8",
  authDomain: "let-s-chtting.firebaseapp.com",
  databaseURL: "https://let-s-chat-94fdb-default-rtdb.firebaseio.com",
  projectId: "let-s-chtting",
  storageBucket: "let-s-chtting.appspot.com",
  messagingSenderId: "252178035749",
  appId: "1:252178035749:web:de2cd8e714a320f5b8bbcc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Weclome "+user_name+"!";

function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html"; 
}

  
 
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        
        console.log("Room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#" +Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
  
        //End code
        });});}
  getData();
  function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="Kwitter.html";
}
 
  
  