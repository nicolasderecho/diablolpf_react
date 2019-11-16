//http://www.d2mantix.com/diablo2lod-items-unicos.html
const cleanSymbols = (string) => string.replace(new RegExp('↵|\n', 'g'), '').replace(new RegExp('`|’', 'g'), '\'');
const cleanString = (string) => cleanSymbols(string).trim().replace(/\s+/g, ' ');
const htmlStringToText = (string) => {
  const htmlElement = document.createElement('div');
  htmlElement.innerHTML = string;
  return cleanString(htmlElement.innerText);
};

{"image": "https://gamepedia.cursecdn.com/diablo_gamepedia/d/d2/Kiras_Guardian.gif","name":"","originalName":"Kira's Guardian"}

var extractImages = (rootElement) => {

  const rows = Array.from(rootElement.querySelectorAll('tbody > tr'));
  return rows.map(row => {
    const data = row.querySelector('td');
    const dataRows = data.innerHTML.split('<br>');
    const image = (data.querySelector('img') || {src: ''}).src;
    return {
      image: image,
      name: htmlStringToText(dataRows[1]),
      originalName: htmlStringToText(dataRows[2])
    }
  }).filter( element => element.image !== '')

};

var images = extractImages($0);

JSON.stringify(images);