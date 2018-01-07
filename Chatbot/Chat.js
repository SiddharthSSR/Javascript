function setup() {
  noCanvas();

  let bot = new RiveScript();
  bot.loadFile("brain.rive", brainReady, brainError);

  //Callbacks for the above loadFile
  function brainReady() {
    console.log('chatbot ready');
    bot.sortReplies();
    let num = floor(random(10));
    console.log(num);
    let reply = bot.reply("local-user", "set" + num);
  }

  function brainError() {
    console.log('chatbot error');
  }

  // Access to dom elements
  let button = select("#submit");
  let userInput = select("#user_input");
  let output = select("#output");

  button.mousePressed(chat);

  function chat() {
    let input = userInput.value();
    let reply = bot.reply("local-user", input);
    output.html(reply);
  }
}
