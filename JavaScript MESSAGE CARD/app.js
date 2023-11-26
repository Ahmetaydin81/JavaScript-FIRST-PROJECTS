const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown",function(event){
   if(event.key=="Enter")
   getMessage(); 
})

function getMessage(){
    document.getElementById("message-out").innerHTML=messageInput.value;
    messageInput.value="";
}