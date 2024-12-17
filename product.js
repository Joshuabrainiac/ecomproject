const search = window.location.search;
const id = search.split('=')[1];
console.log(id);
const productPageContainer = document.querySelector('main');

const API = `https://dummyjson.com/products/${id}`;

async function fetchApi() {
	try {
		const response = await fetch(API);
		const data = await response.json();
		console.log(data);

		console.log(window.innerWidth);

		if (window.innerWidth > 992) {
			productPageContainer.innerHTML = `<div class="productPane">
                <div class="imagerow">
                    <div class="photo">
                        <img src="${data.images[0]}" alt="" class="main-image">
                    </div>
                    <div class="customers">
                        <div class="positioning">
                            <div class="avatar"><i class="fa-solid fa-user"></i></div>
                        </div>
                        <div class="positioning">
                            <div class="avatar"><i class="fa-solid fa-user"></i></div>
                        </div>
                        <div class="positioning">
                            <div class="avatar"><i class="fa-solid fa-user"></i></div>
                        </div>
                    </div>
                </div>
                <div class="similarrow">
                    <div class="similartag">
                        <h3>Similar Products</h3>
                        <div class="arrows">
                            <div class="leftarrow"><i class="fa-solid fa-chevron-left"></i></div>
                            <div class="rightarrow"><i class="fa-solid fa-chevron-right"></i></div>
                        </div>
                    </div>
                    <div class="similarproducts">
                        <div class="simi">
                            <div class="simproduct"></div>
                            <div class="simtag">
                                <div class="name">Prod</div>
                                <div class="simprice">$500</div>
                            </div>
                        </div>
                        <div class="simi">
                            <div class="simproduct"></div>
                            <div class="simtag">
                                <div class="name">Prod</div>
                                <div class="simprice">$500</div>
                            </div>
                        </div>
                        <div class="simi">
                            <div class="simproduct"></div>
                            <div class="simtag">
                                <div class="name">Prod</div>
                                <div class="simprice">$500</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="activitypane">
                <div class="prohead">
                    <div class="proname">${data.title}</div>
                    <div class="favorite">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
                <div class="prodesc">
                    ${data.description}
                </div>
                <div class="proprice">$${data.price}</div>
                <div class="reviews">
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="proreview">37 reviews</div>
                </div>
                <div class="changecolor">
                    <div class="change">Color</div>
                    <div class="colorcircles">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </div>
                <div class="lastbuttons">
                    <button type="button" class="buybutton">Buy Now</button>
                    <button type="button" class="addcartbutton">Add to Cart</button>
                </div>
                <div class="faqs">
                    <div class="firstq faq" style="max-height: 2rem;">
                        <div class="questionline line1">
                            <div class="question">How long until i get the delivery?</div>
                            <div class="dropdown"><i class="fa-solid fa-chevron-down" id="first-chevron"></i></div>
                        </div>
                        <div class="answer">We typically take two to three working days</div>
                    </div>
                    <div class="secondq faq" style="max-height: 2rem;">
                        <div class="questionline line2">
                            <div class="question">How do I know I am not getting scammed?</div>
                            <div class="dropdown"><i class="fa-solid fa-chevron-down" id="second-chevron"></i></div>
                        </div>
                        <div class="answer">That is exactly why we have the customer reviews. After u get ur delivery, u can as well
                            as other customers choose to drop a review too.</div>
                    </div>
                </div>
            </div>`;
		} else {
			productPageContainer.innerHTML = `<div class="productPane">
                <div class="imagerow">
                    <div class="photo">
                        <img src="${data.images[0]}" alt="" class="main-image">
                    </div>
                    <div class="customers">
                        <div class="positioning">
                            <div class="avatar"><i class="fa-solid fa-user"></i></div>
                        </div>
                        <div class="positioning">
                            <div class="avatar"><i class="fa-solid fa-user"></i></div>
                        </div>
                        <div class="positioning">
                            <div class="avatar"><i class="fa-solid fa-user"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="activitypane">
                <div class="prohead">
                    <div class="proname">${data.title}</div>
                    <div class="favorite">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
				<div class="reviews">
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="proreview">37 reviews</div>
                </div>
                <div class="prodesc">
                    ${data.description}
                </div>
                <div class="changecolor">
                    <div class="change">Color</div>
                    <div class="colorcircles">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </div>
                <div class="similarrow">
                    <div class="similartag">
                        <h3>Similar Products</h3>
                    </div>
                    <div class="similarproducts">
                        <div class="simi">
                            <div class="simproduct"></div>
                        </div>
                        <div class="simi">
                            <div class="simproduct"></div>
                        </div>
                        <div class="simi">
                            <div class="simproduct"></div>
                        </div>
                    </div>
                </div>
                <div class="lastbuttons">
                	<div class="proprice">$${data.price}</div>
                    <button type="button" class="buybutton">Buy Now</button>
                </div>
                <div class="faqs">
                    <div class="firstq faq" style="max-height: 2rem;">
                        <div class="questionline line1">
                            <div class="question">How long until i get the delivery?</div>
                            <div class="dropdown"><i class="fa-solid fa-chevron-down" id="first-chevron"></i></div>
                        </div>
                        <div class="answer">We typically take two to three working days</div>
                    </div>
                    <div class="secondq faq" style="max-height: 2rem;">
                        <div class="questionline line2">
                            <div class="question">How do I know I am not getting scammed?</div>
                            <div class="dropdown"><i class="fa-solid fa-chevron-down" id="second-chevron"></i></div>
                        </div>
                        <div class="answer">That is exactly why we have the customer reviews. After u get ur delivery, u can as well
                            as other customers choose to drop a review too.</div>
                    </div>
                </div>
            </div>`;
		}

		const customer = document.querySelectorAll('.positioning');
		const firstAccordion = document.querySelector('.line1');
		const secondAccordion = document.querySelector('.line2');
		const firstQuestion = document.querySelector('.firstq');
		const secondQuestion = document.querySelector('.secondq');
		const colorBoxes = document.querySelectorAll('.circle');
		const heartIcon = document.querySelector('.fa-heart');
		const outlined = document.querySelectorAll('.outlined');
		const coloredImage = document.querySelector('.main-image');
		const firstChevron = document.querySelector('#first-chevron');
		const secondChevron = document.querySelector('#second-chevron');
		const goBackButton = document.querySelector('.gobackButton');

		let colorIndex = 0;
		let idIndex = 0;

		let allReviews = ``;
		let reviews = ``;

		const tooltip = document.createElement('div');
		const reviewBox = document.createElement('div');

		data.reviews.map(function (review) {
			let reviewRating = ``;
			new Array(review.rating).fill(0).map(function (star) {
				return (reviewRating += `<i class="fas fa-star rating"></i>`);
			});

			return (allReviews += `
                            <div class="rating-div">
                    <div class="jamba">
                        <div class="title"> ${review.reviewerName} </div>
                        <div class="reviewRatinglol">
                        ${reviewRating}
                        </div>
                        <div class="sub">${review.comment}</div>
                    </div>
                </div>
            `);
		});

		tooltip.setAttribute('class', 'tooltip');
		tooltip.textContent = 'Click to see review';

		reviewBox.setAttribute('class', 'thereview');
		reviewBox.innerHTML = allReviews;

		let collectionCopy = Array.from(reviewBox.children);

		let increaser = 0;

		customer.forEach((item) => {
			item.addEventListener('mouseover', promptClick);
			item.addEventListener('mouseout', removePromptClick);
			item.addEventListener('click', showReview);

			const customerIds = [0, 1, 2];
			item.id = customerIds[increaser];

			increaser += 1;

			function promptClick() {
				item.style.position = 'relative';
				item.appendChild(tooltip);
			}
			function removePromptClick() {
				if (item.contains(tooltip)) {
					item.removeChild(tooltip);
					item.style.outline = 'none';
					console.log(item.children.length);
				}

				if (item.contains(collectionCopy[item.id])) {
					item.removeChild(collectionCopy[item.id]);
					item.style.outline = 'none';
				}
			}
			function showReview() {
				customer.forEach((nitem) => {
					nitem.style.outline = 'none';
				});
				item.style.outline = '2px solid gray';
				item.style.outlineOffset = '0.125rem';
				tooltip.remove();
				item.append(collectionCopy[item.id]);
				console.log(collectionCopy, item.id);
			}
		});

		heartIcon.addEventListener('click', fillHeart);

		function fillHeart() {
			if (heartIcon.classList[0] === 'fa-regular') {
				heartIcon.setAttribute('class', 'fa-solid fa-heart');
			} else {
				return heartIcon.setAttribute('class', 'fa-regular fa-heart');
			}
		}

		const colors = ['yellow', 'blue', 'purple', 'orange', 'green'];
		const itemIds = [0, 1, 2, 3, 4];
		const degrees = [45, 190, 250, 0, 90];

		colorBoxes.forEach((item) => {
			item.style.backgroundColor = colors[colorIndex];
			item.id = itemIds[idIndex];
			colorIndex += 1;
			idIndex += 1;

			item.addEventListener('click', changeImageColor);

			function changeImageColor() {
				colorBoxes.forEach((elem) => {
					elem.style.outline = 'none';
				});
				item.style.outline = `2px solid gray`;
				item.style.outlineOffset = '0.125rem';

				coloredImage.style.filter = `hue-rotate(${degrees[item.id]}deg)`;
                coloredImage.style.position = 'relative';
				coloredImage.style.zIndex = '0';
			}
		});

		firstAccordion.addEventListener('click', dropDown);

		function dropDown() {
			if (firstQuestion.style.maxHeight == '2rem') {
				secondQuestion.style.maxHeight = '2rem';
				secondChevron?.setAttribute('class', 'fa-solid fa-chevron-down');
				firstChevron?.setAttribute('class', 'fa-solid fa-chevron-up');
				return (firstQuestion.style.maxHeight = '5rem');
			} else {
				firstQuestion.style.maxHeight = '2rem';
				firstChevron?.setAttribute('class', 'fa-solid fa-chevron-down');
			}
		}

		secondAccordion.addEventListener('click', dropDown2);

		function dropDown2() {
			if (secondQuestion.style.maxHeight == '2rem') {
				firstQuestion.style.maxHeight = '2rem';
				firstChevron?.setAttribute('class', 'fa-solid fa-chevron-down');
				secondChevron?.setAttribute('class', 'fa-solid fa-chevron-up');
				return (secondQuestion.style.maxHeight = '7rem');
			} else {
				secondQuestion.style.maxHeight = '2rem';
				secondChevron?.setAttribute('class', 'fa-solid fa-chevron-down');
			}
		}

		goBackButton.addEventListener('click', GoBackPage);

		function GoBackPage() {
			window.history.back();
		}
	} catch (error) {
		console.error(
			`The error is: ${error.name} and the details is this: ${error.message}`
		);
	}
}

fetchApi();
