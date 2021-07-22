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

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function sendww(){
        message=document.getElementById("message").value; 
firebase.database().ref(room_name).push({
    name:user_name,
    message:message,
    like:0
});

document.getElementById("message").value="";
  
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name=message_data['name'];
message= message_data['message'];
like= message_data['like'];
namewithimage="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id= "+firebase_message_id+" value="+like+" onclick= 'updatelike(this.id)'>";
span="<span class='glyphcion glyphcion- thumbs-up'>Like: "+like+"</span> </button> <hr>";
row=namewithimage+messagewithtag+likebutton+span;
document.getElementById("output").innerHTML+=row;


//End code
    } });  }); }
getData();

function updatelike(message_id){
    button_id=message_id;
    likes= document.getElementById(button_id).value;
    updated_like=Number(likes)+1;
    console.log(updated_like);
    firebase.database().ref(room_name).child(message_id).update({
          like: updated_like
    });
    
}

function logout1(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
}