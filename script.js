const fs = require("fs"); 
    // -----  fs module la access karne ke liye use karte hai node me se

//writefile ---  to create a new file
fs.writeFile("hey.text","how are you ",function(err){
    if(err) console.log(err);
    else console.log("done");
})


//appendfile ---  to add some new data to exiting file
fs.appendFile("hey.text","i'm fine ",function(err){
    if(err) console.log(err);
    else console.log("done");
})

//rename file

fs.rename("hey.text","hello.text",function(err){
    if(err) console.log(err);
    else console.log("renamed");
})

//copyFile

fs.copyFile("hello.text","copy_hello.text",function(err){
    if(err) console.log(err);
    else console.log("file copied");
})
fs.copyFile("hello.text","./copy/copy.txt",function(err){
    if(err) console.log(err);
    else console.log("file copied");
})

//unlink ----- to delete a file

fs.unlink("hello.txt",function(err){
  if(err) console.log(err);
  else console.log("file is removed");
})







