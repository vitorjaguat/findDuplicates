// const app = function (input) {
//     console.log(input.split('.'))
// }

// const divided = app(text);
// console.log(app(text))

// const unique = new Set(divided);

// console.log(unique)

// const divided = text.split('.');
// const dividedNoShortLines = divided.filter(x => x.length > 8);
// console.log(dividedNoShortLines);
// const unique = new Set(dividedNoShortLines);
// const uniqueArr = [...unique]
// console.log(uniqueArr);
// const doubles = dividedNoShortLines.filter(element => uniqueArr.includes(element));
// console.log(doubles)

//UI

const form = document.querySelector('#input');
const btn = document.querySelector('button');
const list = document.querySelector('ol');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  list.innerHTML = '';
  const textAreatext = document.querySelector('textarea').value;
  const text = textAreatext;
  console.log(text);
  //Split text into sentences, removes short sentences:
  const dividedNoShortLines = text.split('.').filter((x) => x.length > 8);
  //Filter duplicates:
  const filterDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) !== index);

  const duplicateElements = filterDuplicates(dividedNoShortLines);
  console.log(duplicateElements);
  duplicateElements.forEach((el) => {
    let newLI = document.createElement('li');
    newLI.innerText = `"${el}"`;
    list.append(newLI);
  });
});

// //Split text into sentences, removes short sentences:
// const dividedNoShortLines = text.split('.').filter(x => x.length > 8)
// //Filter duplicates:
// const filterDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

// const duplicateElements = filterDuplicates(dividedNoShortLines);
// console.log(duplicateElements);
