const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln", 
  "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "In the midst of chaos, there is also opportunity. – Sun Tzu",
  "The best way to predict the future is to invent it. – Alan Kay", 
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",                                  
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt", 
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Happiness is not something readymade. It comes from your own actions. – Dalai Lama",
  "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
  "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh (Alice in Wonderland)",
  "The secret of getting ahead is getting started. – Mark Twain",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Dream as if you'll live forever. Live as if you'll die today. – James Dean",
  "Perseverance is not a long race; it's many short races one after the other. – Walter Elliot",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson"
];

function generateQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  if (!quoteDisplay) {
    console.error("Quote display element not found!");
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.textContent = randomQuote;
  quoteDisplay.style.opacity = 0;
  setTimeout(() => {
    quoteDisplay.style.opacity = 1;
  }, 100);
}

function copyQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  if (quoteDisplay) {
    navigator.clipboard.writeText(quoteDisplay.textContent).then(() => {
      alert("Quote copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  }
}

function tweetQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  if (quoteDisplay) {
    const quote = quoteDisplay.textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(tweetUrl, "_blank");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", generateQuote);
  
  const copyButton = document.getElementById("copyButton");
  copyButton.addEventListener("click", copyQuote);

  const tweetButton = document.getElementById("tweetButton");
  tweetButton.addEventListener("click", tweetQuote);
});
