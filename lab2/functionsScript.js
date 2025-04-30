function pascal_case(fname) {
    let words = fname.split(" ")

    let capital = words.map(function(word) {
         
    
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      });
      return capital.join(" ");
}

//*********************************************************
function find_long_word(str) {
  const words = str.split(' ');
  let long_word = '';
  for (let word of words) {
      if (word.length > long_word.length) {
        long_word = word;
      }
  }
  return long_word;
}

// //*********************************************************
function sortString(str) {
  return str.split('').sort().join('');
}

// //*********************************************************

function find_common_elements(arr1, arr2) {
    const common_elements = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
              common_elements.push(arr1[i]);
            }
        }
    }
    return common_elements;
}