function filterClothing() {
    var input, filter, categoryBox, categories, category, title, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    categoryBox = document.querySelector('.category-box');
    categories = categoryBox.querySelectorAll('.category');

    for (i = 0; i < categories.length; i++) {
        category = categories[i];
        title = category.querySelector('h3');
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            category.style.display = '';
        } else {
            category.style.display = 'none';
        }
    }
}