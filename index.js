var getNewQuote = function() {
var quotes =[
  { 
    text: "You're like Hitler, except...Hitler cared about Germany, or something.", 
    source: "Rick",
    img: "https://img00.deviantart.net/1f9e/i/2017/115/d/7/png_rick_and_morty_ohne_schatierung_by_lalingla-db72d6x.png"
  }, 
   { 
    text: "I know that new situations can be intimidating. You lookin' around and it's all scary and different, but y'know... meeting them head-on, charging into 'em like a bull—that's how we grow as people.", 
    source: "Rick",
    img: "http://orig13.deviantart.net/3812/f/2015/336/e/7/rick_and_morty_vector_by_clam5hell-d9ireod.png"
  },
  
   { 
    text: "Get your shit together, get it all together and put it in a backpack. All your shit, so it's together.", 
    source: "Morty",
    img: "https://pixel.nymag.com/imgs/custom/tvrecaps/recaps-rick-and-morty-160x160.png"
  },
   { 
    text: "I hate to break it to you, but what people call love is just a chemical reaction that compels animals to breed.", 
    source: "Rick",
    img: "http://orig13.deviantart.net/3812/f/2015/336/e/7/rick_and_morty_vector_by_clam5hell-d9ireod.png"
  },
  { 
    text: "They're robots Morty! It's okay to shoot them! They're just robots!..It's a figure of speech, Morty! They're bureaucrats! I don't respect them. Just keep shooting, Morty! You have no idea what prison is like here!", 
    source: "Rick",
    img: "http://orig13.deviantart.net/3812/f/2015/336/e/7/rick_and_morty_vector_by_clam5hell-d9ireod.png"
  },
  { 
    text: "Have you ever tried to relax? It's a paradox…", 
    source: "Jerry Smith",
    img: "https://68.media.tumblr.com/871682ca7c79a1c01ff0e438359584e5/tumblr_olf6jjToqx1w3z1eko2_r1_500.png"
  },
  { 
    text: "Sometimes science is a lot more art, than science. A lot of people don't get that.", 
    source: "Rick",
    img: "http://orig13.deviantart.net/3812/f/2015/336/e/7/rick_and_morty_vector_by_clam5hell-d9ireod.png"
  },
];

      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML =
        '<img src="' + quote.img + '">' +
        '<h5>' + quote.text + '</h5>' + '-' + quote.source + '</em>' + '</p>';
     
    truncateQuote = quote.text;
    tweet = truncateQuote.substr(0,120)
};


function tweetQuote(){
  window.open('https://twitter.com/intent/tweet?text=' + '"' + encodeURIComponent(tweet) + '" - Rick and Morty',"_blank"); 
};


window.onload=getNewQuote;