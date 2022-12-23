const products = document.querySelector(".products"),
        products_curr_card = products.querySelector(".current-card"),
        products_prev_card = products.querySelector(".prev-card"),
        products_next_btn = products.querySelector(".next"),
        products_prev_btn = products.querySelector(".prev");
console.log(products_prev_card);
const currCardWidth = products_curr_card.offsetWidth;

//////////////////////////////////////////////// variables ////////////////////////////////////////////////////////////////////////
let currentIndex = 0, prevIndex = 0;

//////////////////////////////////////////////// actions ////////////////////////////////////////////////////////////////////////

// Read the JSON file and parse its contents
fetch('products_data.json')
        .then(response => response.json())
        .then(data => {
                // Update the HTML elements with the data for the current product
                prevIndex = data.length - 1;
                updateProductData(data[currentIndex]);
                products_prev_card.querySelector('img').src = data[prevIndex].image;

                // Add click event listeners to the "prev" and "next" icons
                document.querySelector('#prev-product').addEventListener('click', () => {
                        currentIndex = prevIndex;
                        prevIndex--;
                        if (prevIndex < 0) {
                                prevIndex = data.length - 1;
                        }
                        updateProductData(data[currentIndex]);
                        products_prev_card.querySelector('img').src = data[prevIndex].image;
                });
                document.querySelector('#next-product').addEventListener('click', () => {
                        prevIndex = currentIndex;
                        currentIndex++;
                        if (currentIndex >= data.length) {
                                currentIndex = 0;
                        }
                        updateProductData(data[currentIndex]);
                        products_prev_card.querySelector('img').src = data[prevIndex].image;
                });

        })

// nav bar styling on scrolling down
window.onscroll = function () { scrollFunction() };

//eventlistners


//////////////////////////////////////////////// functions ////////////////////////////////////////////////////////////////////////
function scrollFunction() {
        if (document.documentElement.scrollTop > 380) {
                document.getElementById("nav").style.boxShadow = "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)";
        } else {
                document.getElementById("nav").style.boxShadow = "none";        //on top
        }
}

function updateProductData(product) {
        // Update the HTML elements with the product data
        products.querySelector('.product-name').textContent = product.name;
        products.querySelector('.product-type').textContent = product.type;
        products.querySelector('.product-description').textContent = product.description;
        products_curr_card.querySelector('img').src = product.image;
}
