

//1. Write a JavaScript function to validate whether a given value type is pure json object or not.

/*
function object(value)
        {
        var datajson = typeof value;
        return datajson === 'function' || datajson === 'object' && !!value;
       }

console.log(object({name: 'Kabilan'}));

console.log(object('kavi'));

*/


//2. Write a JavaScript function to check whether an `input` is an array or not.
/*
var array = function(input) {
    if (toString.call(input) === "[Array]")
      return true;
    return false;   
      };
  console.log(array('kabilan'));
  console.log(array([6, 2, 8, 1]));
  */


//3. use the sample html: Write a JavaScript function to add rows to the table

/*
  function insert_Row()
  {
  var x=document.getElementById('table').insertRow(0);
  var y = x.insertCell(0);
  var z = x.insertCell(1);
  y.innerHTML="Cell-1";
  z.innerHTML="Cell-2";
  }
  */


//4.Write a JavaScript program to get the width and height of the window (any time the window is resized)

/*
  function size()
{
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
        

 document.getElementById('width').innerHTML = "<h1>Width: " + width + " â€¢ Height: " + height + "</h1>";
}
*/


//5.Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
//[no need to use html you can show the output in console)
/*
var library = [
    {
        bauthor: 'Author 1',
        btitle: 'Book 1',
        reading_status: true
    },
    {
        bauthor: 'Author 2',
        btitle: 'Book 2',
        reading_status: true
    },
    {
        bauthor: 'Author 3',
        btitle: 'Book 3',
        reading_status: false
    }];


    for (var i = 0; i < library.length; i++) 
   {
    var books = "'" + library[i].btitle + "'" + ' in ' + library[i].bauthor + ".";
    if (library[i].reading_status) {
      console.log("Read " + books);
    } else
    {
     console.log("Your'e read " + books);
    }
   }

   */


   //6. without running code can you check if this nodejs code has any issues(dont worry about the dependencies, dont worry about functionality just check issues in coding)


/*

   var path = require('path')
   var funcs = require('./funcs')
   var encodName = funcs.encodeName
   
   var session = {
   username: process.argv[2],
   lastMessageHash: process.argv[3]
   }
   
   if (!session.username || !session.lastMessageHash) {
   console.log('Usage: node index.js <username> <hash>')
   process.exit(0)
   }
   
   // 1. load the database
   var dbFile = path.join(__dirname, 'db', 'index.json')
   funcs.loadDb(dbFile, function (err, db) {
   
   // 2. encode the name
   var encoded = encodName(session.username)
   
   // 3. find the user's inbox
   var inbox = findInbox(db, encoded)
   
   // 4. find the next message
   var nextMessage = funcs.findNextMessage(inbox, session.lastMessageHash)

*/

   //Error
   //Uncaught SyntaxError: Unexpected end of input at Script.js:124:75
/*
 Uncaught SyntaxError: Unexpected end of input error in JavaScript occurs due to missing parentheses, bracket, or quote
it can also happen when we try to parse an empty JSON. 
  

   */