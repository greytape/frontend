var text = 'not valid JSON';

function parseJSON(data) {
  var result;
  try {
    result = JSON.parse(data);
  } catch (error) {
    console.log('There was a ', error.name, 'parsing JSON data:', error.message);
    result = null;
  } finally {
    console.log('finished parsing data.');
  }
  return result;
}

parseJSON(text);
