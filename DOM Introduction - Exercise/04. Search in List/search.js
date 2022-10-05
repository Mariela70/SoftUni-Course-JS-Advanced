function search() {
   let listElements = document.querySelectorAll('ul#towns li')
   let resultElement = document.getElementById('result');
   let serchText = document.getElementById('searchText').value;
   let matches = 0;
   for(let element of listElements) {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = ''
   }

   for(let element of listElements) {
      let text = element.textContent;
      if(text.match(serchText)) {
         matches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'inderline'
      }
   }
   resultElement.textContent = `${matches} matches found`
}
