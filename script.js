let bandNames = ['The Beatles', 'Aerosmith', 'Red Hot Chili Peppers', 'The Rolling Stones', 'Anthrax'];

function sortBandNames(names) {
  // Remove articles from band names
  let bandNamesWithoutArticles = names.map(name => name.replace(/^(a|an|the)\s+/i, ''));

  // Sort the band names in lexicographic order
  bandNamesWithoutArticles.sort((a, b) => a.localeCompare(b));

  // Create the list items
  let listItems = bandNamesWithoutArticles.map(name => `<li>${name}</li>`);

  // Add the list items to the band list
  let bandList = document.getElementById('band');
  bandList.innerHTML = listItems.join('');
}

sortBandNames(bandNames);
