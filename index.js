//Dad Jokes

var dadJokes =["I'm afraid for the calendar. Its days are numbered.","I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along","Dear Math, grow up and solve your own problems"];
var astrology =["Libra: You will be full of joy, enthusiasum and vigor today","Capricorn: Your grand orchestration may not come to fruition, and even your best-laid plans may go awry","Gemini: You will be busy organising some religious function today or in visiting a place of religious significance"];
var netflixMovies =["Cobra Kai","The Witcher","Stranger Things"];
const storedMessages = (dadJokes,astrology,netflixMovies)=> {
return{
    dadJokes: dadJokes,
    astrology: astrology,
    netflixMovies: netflixMovies

}


}
var random = Math.floor(Math.random()* 3);
//console.log(random);
var msg = storedMessages(dadJokes,astrology,netflixMovies);
//console.log(msg.dadJokes[2]);
var msg1,msg2,msg3;



var dadjkesmsg =  'Dad Joke: ' + msg.dadJokes[Math.floor(Math.random() * msg.dadJokes.length)];
var astrologymsg = '. Astrology Horoscope: ' + msg.astrology[Math.floor(Math.random() * msg.astrology.length)];
var netflixMoviesmsg = '. Best Show on Netflix: '+ msg.netflixMovies[Math.floor(Math.random() * msg.netflixMovies.length)];
console.log(dadjkesmsg,astrologymsg,netflixMoviesmsg);

