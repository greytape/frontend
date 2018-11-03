var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.forEach(function(band) {
    band['name'] = capitalize(band['name']);
    band['name'] = removeDots(band['name']);
    band['country'] = 'Canada';
  });
  return data;
}

function capitalize(text) {
  return text.split(' ').map( x => x[0].toUpperCase() + x.slice(1,)).join(' ');
}

function removeDots(text) {
  return text.replace(/\./g,''); 
}



console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]