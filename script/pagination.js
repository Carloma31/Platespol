document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 5;
    const newsList = document.getElementById('news-list');
    const pagination = document.getElementById('pagination');
    const newsItems = Array.from(newsList.children);
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);

    function showPage(page) {
        newsItems.forEach((item, index) => {
            item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'flex' : 'none';
        });

        // Update pagination buttons
        while (pagination.firstChild) {
            pagination.removeChild(pagination.firstChild);
        }

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            if (i === page) {
                button.disabled = true;
            }
            button.addEventListener('click', () => showPage(i));
            pagination.appendChild(button);
        }
    }

    showPage(1);
});
