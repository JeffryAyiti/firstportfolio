function affichermenu()
{
  if(document.getElementById("menu").style.display == "block")
  {
   document.getElementById("menu").style.display ="none";
  }
  else
  {
    document.getElementById("menu").style.display ="block";
  } 
}


var words = [' Welcome! I am Wood Jeffry Olibrice', 'I am passionate about technology', 'I am a humanist'];
var i = 0;
var offset = 0;
var len = words.length;
var forwards = true;
var skip_count = 0;
var skip_delay = 5;
var speed = 100;
var wordElement = document.querySelector('.word');

var wordflick = function() {
  setInterval(function() {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    var part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    wordElement.textContent = part;
  }, speed);
};

wordflick();


