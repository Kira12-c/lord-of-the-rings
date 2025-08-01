const addForm = document.getElementById('addForm');
const itemsList = document.getElementById('itemsList');
let items = JSON.parse(localStorage.getItem('favoriteItems')) || [];
function render() {
    itemsList.innerHTML = '';
    if (items.length === 0) {
        itemsList.innerHTML = '<li>Поки що улюблених речей немає.</li>';
        return;
    }
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.className=`ithem`;
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.onerror = () => {
            img.src = 'https://via.placeholder.com/80?text=No+Image';
        };
        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        infoDiv.innerHTML = `<div class="title">${item.title}</div><div class="desc">${item.description}</div>`;
         const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Видалити';
        removeBtn.onclick = () => {
            items.splice(index, 1);
            saveAndRender();
        };
        li.appendChild(img);
        li.appendChild(infoDiv);
        li.appendChild(removeBtn);
        itemsList.appendChild(li);
    });
}
function saveAndRender() {
    localStorage.setItem('favoriteItems', JSON.stringify(items));
    render();
}
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = {
        title: addForm.title.value.trim(),
        description: addForm.description.value.trim(),
        image: addForm.image.value.trim(),
    };
    if (newItem.title && newItem.description && newItem.image) {
        items.push(newItem);
        saveAndRender();
        addForm.reset();
    }
});
render();