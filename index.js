const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const autherText = document.getElementById("auther");
const xTwitterBtn = document.getElementById("xTwitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Show New Quote

function newQuote() {
  const quote = apiQuotes.results[Math.floor(Math.random() * 150)];
  // check quote text to determine styling
  if (quote.content.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.content;
  autherText.textContent = quote.author;
}

// Get Quotes from API

async function getQuotes() {
  const apiUrl = `https://api.quotable.io/quotes?limit=150`;
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    alert(error);
  }
}

// To Tweet Quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${autherText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
xTwitterBtn.addEventListener("click", tweetQuote);

//calling function on Load
getQuotes();
