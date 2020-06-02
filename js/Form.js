class Form {

  constructor() {

  }
  
  display(){

    var input = createInput("Name");
    var button = createButton('Play');
    var greeting = createElement('h2');
    var title = createElement('h1');

    title.html("Hurdle Game");
    title.position(displayWidth/2 - 50, 0);

    input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    button.position(displayWidth/2 + 30, displayHeight/2);

    button.mousePressed(function() {
      input.hide();
      button.hide();
      greeting.hide();
      title.hide();
      player.name = input.value();
      playerCount++;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      
      greeting.html("Hello, " + player.name);
      greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
  }
}