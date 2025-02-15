const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description:
            'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '****',
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description:
            'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐',
    },
    {
        id: 3,
        title: 'Belgariad Book One: Pawn of Prophecy',
        date: 'Feb 12, 2022',
        description:
            "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg',
        imgAlt: 'Book cover for Pawn of Prophecy',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐⭐',
    },
    {
        id: 4,
        title: 'The Hunger Games',
        date: 'July 3, 2010',
        description:
            'Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. The terrain, rules, and level of audience participation may change but one thing is constant: kill or be killed.',
        imgSrc: 'https://cdn10.bigcommerce.com/s-g9n04qy/products/814705/images/837353/41rEzPpk4cL._SL1350___82557.1687809255.500.500.jpg?c=2',
        imgAlt: 'Book cover for The Hunger Games',
        ages: '12-18',
        genre: 'Dystopian Fiction',
        stars: '⭐⭐⭐⭐⭐',
    },
];

const bookEntries = document.querySelector('.book-entries');
function genArticleHTML(article) {
    return `
        <div class="book-container">
            <div class="details">
                <h3>${article.date}</h3>
                <p>${article.ages}</p>
                <p>${article.genre}</p>
                <p>${article.stars}</p>
            </div>
            <div class="content">
                <h2>${article.title}</h2>
                <div class="book-cover">
                    <img src="${article.imgSrc}" alt="{${article.imgAlt}}" />
                </div>
                <p>
                    ${article.description} <span class="readmore">Read More...</span>
                </p>
            </div>
        </div> 
    `;
}

function displayArticles() {
    bookEntries.innerHTML = '';
    articles.forEach((article) => {
        const articleHTML = genArticleHTML(article);
        const articleDiv = document.createElement('div');
        articleDiv.innerHTML = articleHTML;
        bookEntries.appendChild(articleDiv);
    });
}

displayArticles();
