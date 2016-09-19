var fs = require('fs');
var request = require('request');

module.exports = {

  prompt : function() {
    process.stdout.write('\nprompt > ');
  },

  pwd : function() {
    process.stdout.write(process.cwd());
    //process.stdout.write('\nprompt > ');
    this.prompt();
  },

  date : function() {
    process.stdout.write(Date());
    this.prompt();
  },

  ls : function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write('\nprompt > ');
    });
  },

  echo: function(cmdArray) {
    var words = cmdArray.slice(1);
    process.stdout.write(words.join(' '));
    process.stdout.write('\nprompt > ');
  },


  // print out all the lines of a file
  cat: function(fileName) {
     fs.readFile(fileName, 'utf8', function(err, data) {
       if (err) throw err;
       process.stdout.write(data);
       process.stdout.write('\nprompt > ');
     });
  },

  // print out first 5 lines of a file
  head: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) throw err;
      var splitData = data.split('\n');
      var str = "";
      for (var i = 0; i < 5; i++) {
        str += splitData[i] + '\n';
      }
      process.stdout.write(str);
      process.stdout.write('\nprompt > ');
    });
  },

  // print out last 5 lines of a file
  tail: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) throw err;
      var splitData = data.split('\n');
      var str = "";
      // start at the 5th last line in the file
      for (var i = splitData.length - 5; i < splitData.length; i++) {
        str += splitData[i] + '\n';
      }
      process.stdout.write(str);
      process.stdout.write('\nprompt > ');
    });
  },

  // returns file sorted lexicographically by line
  sort: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) throw err;
      var splitData = data.split('\n');
      var sortedData = splitData.sort();
      var str = "";
      for (var i = 0; i < sortedData.length; i++) {
        str += sortedData[i] + '\n';
      }
      process.stdout.write(str);
      process.stdout.write('\nprompt > ');
    });
  },

  // prints newline, word, and byte counts for a file
  wc: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) throw err;
      var newline_count = 0;
      var word_count = 0;
      var stats = fs.statSync(fileName);
      var fileSizeInBytes = stats['size'];
      var splitData = data.split('\n');

      for (var i = 0; i < splitData.length; i++) {  // every line
        var splitLine = splitData[i].split(" "); // array of words
        word_count += splitLine.length;
        newline_count++;
      }

      process.stdout.write(newline_count + "     " + word_count + "     " + fileSizeInBytes);
      process.stdout.write('\nprompt > ');
    });
  },

  // if a line in a file is the same as the line above it, remove it from the output -> remove duplicate lines
  uniq: function(fileName) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) throw err;
      var splitData = data.split('\n');
      var str = "";

      var lastUniqueLine = "";

      for (var i = 0; i < splitData.length; i++) {  // every line
        if (splitData[i] === splitData[i+1]) {
          splitData.splice(i, 1);
        } else if (splitData[i] === lastUniqueLine) {
          splitData.splice(i, 1);
        }
        str += splitData[i] + '\n';
        lastUniqueLine = splitData[i];
      }
      process.stdout.write(str);
      process.stdout.write('\nprompt > ');
    });
  },

  // create a server request
  curl : function(url) {
    request('http://www.' + url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(response.headers['content-encoding']);
        //process.stdout.write(JSON.parse(body)); // Show the HTML for the Google homepage.
        //process.stdout.write('\nprompt > ');
      }
    })
  }

} // end of exports module
