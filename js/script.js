/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

const quotes = [
  {
    quote: `They may take our lives, but they'll never take our freedom!`,
    source: "William Wallace",
    citation: "Braveheart",
    year: 1995
  },
  {
    quote: `If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.`,
    source: "Bryan Mills",
    citation: "Taken",
    year: 2008
  },
  {
    quote: `My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next.`,
    source: "Maximus Decimus Meridius",
    citation: "Gladiator",
    year: 2000
  },
  {
    quote: `Get your stinking paws off me, you damned dirty ape!`,
    source: "George Taylor",
    citation: "Planet of the Apes",
    year: 1968
  },
  {
    quote: `As if!`,
    source: "Cher",
    citation: "Clueless",
    year: 1995
  },
  {
    quote: `Chewie, we're home.`,
    source: "Han Solo",
    citation: "Star Wars Episode VII: The Force Awakens",
    year: 2015
  },
  {
    quote: `I'm just one stomach flu away from my goal weight`,
    source: "Emily",
    citation: "The Devil Wears Prada",
    year: 2006
  },
  {
    quote: `The greatest trick the devil ever pulled was convincing the world he didn't exist.`,
    source: 'Roger "Verbal" Kint',
    citation: "The Usual Suspects",
    year: 1995
  },
  {
    quote: `They call it a Royale with cheese.`,
    source: "Vincent Vega",
    citation: "Pull Fiction",
    year: 1994
  },
  {
    quote: `The first rule of Fight Club is: You do not talk about Fight Club.`,
    source: "Tyler Durden",
    citation: "Fight Club",
    year: 1999
  }
];
//console.log(quotes);

/***
 * `colors` array
 ***/
const bgColors = ["0e3150", "404b69", "f73859", "dbedf3", "0e3150", "404b69", "355c7d", "c06c84", "f67280", "f8b195", "f8b195", "f67280", "c06c84", "6c567b"];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(array) {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = array[quoteIndex];
  return randomQuote;
}

/***
 * `getRandomColor` function
 ***/
function getRandomColor(string) {
  const colorIndex = Math.floor(Math.random() * bgColors.length);
  const randomColor = string[colorIndex];
  return "#" + randomColor;
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  const randomQuoteObj = getRandomQuote(quotes);
  const randomColorValue = getRandomColor(bgColors);
  const htmlBody = document.querySelector("body");
  const htmlQuoteBox = document.querySelector("#quote-box");
  let htmlElementQuote = `<p class="quote">${randomQuoteObj.quote}</p>`;
  htmlElementQuote += `<p class="source">${randomQuoteObj.source}`;

  if (randomQuoteObj.citation) {
    htmlElementQuote += `<span class="citation">${randomQuoteObj.citation}</span>`;
  }
  if (randomQuoteObj.year) {
    htmlElementQuote += `<span class="year">${randomQuoteObj.year}</span>`;
  }

  htmlElementQuote += `</p>`;

  htmlBody.style.backgroundColor = randomColorValue;

  return (htmlQuoteBox.innerHTML = htmlElementQuote);
}

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);
