window.addEventListener('load', solve);

function solve() {
  let input = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    genre: document.getElementById('genre'),
    storyTitle: document.getElementById('story-title'),
    storyText: document.getElementById('story')

  };
  let lists ={
    preview: document.getElementById('preview-list')
  }


  let publishBtn = document.getElementById('form-btn')
  publishBtn.addEventListener('click', publish);

  function publish(event) {
    event.preventDefault();

    let firstName = input.firstName.value;
    let lastName = input.lastName.value;
    let age = input.age.value;
    let genre = input.genre.value;
    let storyTitle = input.storyTitle.value;
    let storyText = input.storyText.value;

    if (firstName == '' || lastName == '' || age == '' || genre == '' || storyTitle == '' || storyText == '') {
      return;
    }
  
  let li = document.createElement('li');
  li.className = 'story-info';
  li.innerHTML = `<article>
  <h4>Name: ${firstName} ${lastName}</h4>
  <p>Age: ${age}</p>
  <p>Title: ${storyTitle}</p>
  <p>Genre: ${genre}</p>
  <p> ${storyText}</p>
  </article>
  <button class="save-btn">Save Story</button>
  <button class="edit-btn">Edit Story</button>
  <button class="delete-btn">Delete Story</button>`;

  let saveBtn = li.querySelector('.save-btn');
  saveBtn.addEventListener('click', saveFunc);
  let editBtn = li.querySelector('.edit-btn');
  editBtn.addEventListener('click', editFunc);
  let deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', deleteFunc);
  
  lists.preview.appendChild(li);
  saveBtn.disabled = false;
  editBtn.disabled = false;
  deleteBtn.disabled = false;
  publishBtn.disabled = true;
  input.firstName.value = ''
  input.lastName.value = ''
  input.age.value = ''
  input.genre.value = ''
  input.storyTitle.value = ''
  input.storyText.value = ''

 function editFunc(event) {
  input.firstName.value = firstName;
  input.lastName.value = lastName;
  input.age.value = age;
  input.genre.value = genre;
  input.storyTitle.value = storyTitle;
  input.storyText.value = storyText;
  editBtn.disabled = true;
  saveBtn.disabled = true;
  deleteBtn.disabled = true;
  publishBtn.disabled = false;;
  li.remove();

 }
 function saveFunc(event) {
  let divElement = document.getElementById('main');
  divElement.innerHTML = `<h1>Your scary story is saved!</h1>`;
  
}
function deleteFunc(event) {
  li.remove();
  publishBtn.disabled = false;
}
}
}

