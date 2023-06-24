document.addEventListener('DOMContentLoaded', function() {
  let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Aerosmith'];

  // Sort the band names in lexicographic order excluding articles
  bandNames.sort(function(a, b) {
    return removeArticles(a) > removeArticles(b) ? 1 : -1;
  });

  // Get the <ul> element with id "bands"
  let ulElement = document.querySelector('#bands');

  // Create and append <li> elements for each band name
  bandNames.forEach(function(bandName) {
    let liElement = document.createElement('li');
    let bandText = document.createTextNode(bandName);
    liElement.appendChild(bandText);
    ulElement.appendChild(liElement);
  });

  // Function to remove articles from the band name
  function removeArticles(bandName) {
    return bandName.replace(/^(a|an|the)\s+/i, '');
  }
});
