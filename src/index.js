function selectImage(event) {
  let element = event.target;
  prev_active_element.classList.remove("active");
  current_img.src = element.src;
  element.classList.add("active");
  prev_active_element = element;
}

function handleIncrement(event) {
  ++n_items;
  total_amount += 50;
  updateCounter(n_items);
}
function handleDecrement(event) {
  if (n_items) {
    --n_items;
    total_amount -= 50;
    updateCounter(n_items);
  }
}

function updateCounter(new_n_items) {
  let item_count = document.querySelector(".item-count p");
  item_count.innerHTML = new_n_items;
}

function showInfo() {
  alert(
    `Elegant ceremic cups: ${n_items} items , Total amount: $${total_amount}.00`
  );
  item_indicator.style.display = "block";
}

let item_indicator = document.querySelector(".item-indicator");
let similar_products = document.querySelectorAll(".similar-products img");
let current_img = document.querySelector(".active-head-img");

let prev_active_element = document.querySelector(".active");
similar_products.forEach((element) => {
  element.addEventListener("click", selectImage);
});

let increment_counter = document.querySelector(".fa-plus");
let decrement_counter = document.querySelector(".fa-minus");
let n_items = 0,
  total_amount = 0;
item_indicator.style.display = "none";
increment_counter.addEventListener("click", handleIncrement);
decrement_counter.addEventListener("click", handleDecrement);

let cart = document.querySelector(".cart").addEventListener("click", showInfo);
