function addItem() {
    const input = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    const deleteBth = document.createElement('a');
    deleteBth.textContent = '[Delete]';
    deleteBth.href = '#';
    liElement.appendChild(deleteBth);

    deleteBth.addEventListener('click', onDelete);
    document.getElementById('items').appendChild(liElement);

    input.value = '';
    function onDelete(event) {
        event.target.parentElement.remove();
    }
}