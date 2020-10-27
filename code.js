var level = 0;
var mobs1 = Array("slime", "rat", "goblin", "zombie", "earth spirit");

document.getElementById("demo").innerHTML = "Press C to Start Game";

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyC') {
    document.getElementById("demo").innerHTML = "Game started";
    mobsf()
  }
});
function mobsf(){
  var mob1 = mobs1[Math.floor(Math.random() * mobs1.length)];
  document.getElementById("demo").innerHTML = "A " + mob1 + " apeared";
  level += 1
  document.getElementById("level").innerHTML = level;	
}