function shout(string) {
    // todo
 return string.toUpperCase();
// shout is all uppercase
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string){
    console.log('HELLO');
string.toUpperCase();   
}

function logWhisper(string){
    console.log('hello');
string.toLowerCase();
}

function sayHiToHeadphonedRoommate(string){

   if(string === string.toLowerCase()) {
    return "I can't hear you!";
   } 
   else if (string === string.toUpperCase()){
    return "YES INDEED!";
   }
    else if (string === "Let's have dinner together!"){
    return "I would love to!";

    }
    
   
}
