function world() {
   this.color = 1;
   this.value = 2;
}

world.prototype.draw = function() {
    console.log('I am drawing');
}


var w = new world();
w.hehe = "hehe";
console.log('world color: ' + w.colori + "hehe: " + w.hehe);
w.draw();
