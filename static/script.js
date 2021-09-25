// var input = document.getElementById("userInput");
// var button = document.getElementById("enter");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function () {
//   if (input.value.length > 0) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

const todo = document.getElementById("todo");
var input = document.getElementById("userInput");

let addItem = () => {
  // 1. Ambil nilai dari input user
  let Item = document.getElementById("userInput");

  // 2. Tampilkan list baru kedalalm ul
  if (Item.value.length > 0) {
    let newItem =
      "<li class='mb-2 border-bottom border-2 mt-2'> <span onclick='toggle(this)'>" +
      Item.value +
      '<span><i class="bi bi-check-square ms-2"></i></span>' +
      "</span>" +
      '<span onclick="removeItem(this)"><i class="bi bi-trash ms-2"></i></span>' +
      "</li>";
    todo.insertAdjacentHTML("afterbegin", newItem);

    Item.value = "";
  }
};

input.addEventListener("keypress", function (event) {
  let Item = document.getElementById("userInput");

  if (Item.value.length > 0 && event.keyCode === 13) {
    let newItem =
      "<li class='mb-2 border-bottom border-2 mt-2'> <span onclick='toggle(this)'>" +
      Item.value +
      '<span><i class="bi bi-check-square ms-2"></i></span>' +
      "</span>" +
      '<span onclick="removeItem(this)"><i class="bi bi-trash ms-2"></i></span>' +
      "</li>";
    todo.insertAdjacentHTML("afterbegin", newItem);

    Item.value = "";
  }
});

let toggle = (el) => {
  el.classList.toggle("done");
  // kalau icon yang di toggle tidak akan berpengaruh kepada icon itu sendiri dengan syarat berada di dalam satu tag yang sama
};

let removeItem = (el) => {
  el.parentElement.remove();
};
