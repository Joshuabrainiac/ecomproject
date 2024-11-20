const header = document.querySelector('.container');
const searchBox = document.querySelector('.searchContent');
const apiContainer = document.querySelector('.apiRenderer');
const errorTag = document.querySelector('.error');
const backButton = document.querySelector('.back-button');
const nextButton = document.querySelector('.next-button');
const pageNumber = document.querySelector('.page-number');
const searchBar = document.querySelector('.searchBar');
const searchButton = document.querySelector('.searchIcon');

let output = ``;

window.addEventListener('scroll', changeHeader);

const fromUrl = window.location.search;
const skipFromUrl = fromUrl.split('=')[1];
let urlSkipNumber = skipFromUrl ? parseInt(skipFromUrl) : 0;
let limitation = 12;

function changeHeader() {
	if (window.scrollY > 20) {
		header.style.backgroundColor = 'rgba(255, 166, 0, 0.95)';
		searchBox.style.boxShadow = 'none';
	} else {
		header.style.backgroundColor = 'transparent';
		searchBox.style.boxShadow = '5px 5px 15px lightgray';
	}
}

const API = `https://dummyjson.com/products?limit=12&skip=${urlSkipNumber}`;

function callAPI() {
	console.log(urlSkipNumber);

	fetch(API)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((data) => {
			console.log(data);

			displayCurrentPageNumber();

			data.products.map((item) => {
				return (output += `<div class="product">
                <div class="image"><img src="${item.images[0]}" alt=""></div>
                <div class="content">
                    <div class="tagrow">
                        <h2>${item.title}</h2>
                        <div class="additional">
                            <div class="tags">${item.category}</div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="bodyrow">
                        <p>${item.description}</p>
                    </div>
                    <div class="lastrow">
                        <div class="price">$${item.price}</div>
                        <a href="product.html?product=${item.id}"><button type="button"><i class="fa-solid fa-cart-shopping"></i> &nbsp;  See Product Details</button></a>
                    </div>
                </div>
            </div>`);
			});
			apiContainer.innerHTML = output;

			searchButton.addEventListener('click', sortAPI);

			function sortAPI() {
				const userInput = searchBar.value;
				console.log(userInput);
			}
            
		})
		.catch((error) => {
			errorTag.innerHTML = `Oops! An error occured, ${error.name}: ${error.message}`;
		});
}

callAPI();

nextButton.addEventListener('click', NextPage);
backButton.addEventListener('click', PrevPage);

function NextPage() {
	urlSkipNumber += limitation;
	window.location = `?skip=${urlSkipNumber}`;
}

function displayCurrentPageNumber() {
	pageNumber.textContent = `${urlSkipNumber / limitation + 1}`;
}

function PrevPage() {
	urlSkipNumber -= limitation;
	window.location = `?skip=${urlSkipNumber}`;
}

function CheckPrevLimitation() {
	if (urlSkipNumber <= 0) {
		backButton.removeEventListener('click', PrevPage);
		backButton.style.backgroundColor = 'gray';
	}
}

CheckPrevLimitation();