// grabs our commands from commands.js
var commands = require('./commands.js')

// prompts the user
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  // the information that the user has provided, converted to a string
  var cmd = data.toString().trim();
  var cmdArray = cmd.split(' ');

  // if the user has requested 'pwd'
  if (cmdArray[0] === 'pwd') {
    commands[cmd]();
  }
  // if the user has requested 'date'
  else if (cmdArray[0] === 'date') {
    commands[cmd]();
  }
  // if the user has requested 'ls'
  else if (cmdArray[0] === 'ls') {
    commands[cmd]();
  }
  // if the user echos
  else if (cmdArray[0] === 'echo') {
    commands[cmdArray[0]](cmdArray);
  }
  // cat
  else if (cmdArray[0] === 'cat') {
    // commands['cat']['file.js']
    commands[cmdArray[0]](cmdArray[1]);
  }
  // head
  else if (cmdArray[0] === 'head') {
    commands[cmdArray[0]](cmdArray[1]);
  }
  // tail
  else if (cmdArray[0] === 'tail') {
    commands[cmdArray[0]](cmdArray[1]);
  }
  // sort
  else if (cmdArray[0] === 'sort') {
    commands[cmdArray[0]](cmdArray[1]);
  }
  // wc
  else if (cmdArray[0] === 'wc') {
    commands[cmdArray[0]](cmdArray[1]);
  }
  // uniq
  else if (cmdArray[0] === 'uniq') {
    commands[cmdArray[0]](cmdArray[1]);
  }
  else if (cmdArray[0] === 'curl') {
    commands[cmdArray[0]](cmdArray[1]);
  }

  // hello
  // hello
  // hello

  // line
  // line

}); // end
