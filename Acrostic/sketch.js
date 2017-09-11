// We are making a program to make Acrostic using Wordnik API

// Wordnik API 
let url1 = 'http://api.wordnik.com:80/v4/words.json/search/';
let url2 = '?caseSensitive=true&minCorpusCount=1&maxCorpusCount=25&minDictionaryCount=1&maxDictionaryCount=-1&minLength=6&maxLength=-1&skip=1&limit=10000&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

function setup() {
  // No canvas required for the program
  noCanvas();
  // Connecting the button with variable
  let button = select('#submit');
  // Connecting the input box with variable
  let input = select('#word');
  
  // Function to pick the correct word with appropriate letter
  function pickWord(div, letter){
    let url = url1 + letter + url2;
    loadJSON(url, gotData);
    function gotData(data){
      let options = data.searchResults;
      let selection = random(options); 
      div.html(selection.word);   
      console.log(selection.word);
    }
  }

  // When button is pressed this function is called 
  button.mousePressed(makeAcrostic);

  // Main function to make Acrostic
  function makeAcrostic(){
    let word = input.value();
    for(let i = 0; i < word.length; i++){
      let letter = word.charAt(i);
      let div = createDiv(letter);
      let url = url1 + letter + url2;
      pickWord(div, letter);     
    }
  }
}
