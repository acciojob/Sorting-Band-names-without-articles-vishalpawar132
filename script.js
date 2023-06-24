// Array of band names
let bandNames = ['The Beatles', 'Pink Floyd', 'Led Zeppelin', 'The Rolling Stones', 'Radiohead'];

// Function to remove articles from band names
function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names without articles
let sortedBands = bandNames.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);

// Get the ul element
let ulElement = document.querySelector('#bands');

// Create li elements and append them to the ul element
sortedBands.forEach(band => {
  let liElement = document.createElement('li');
  liElement.textContent = band;
  ulElement.appendChild(liElement);
});
