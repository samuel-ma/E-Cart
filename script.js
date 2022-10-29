

let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let newNumber = document.getElementById("one");

function updateNumber(){

}

let a = 1;

add.addEventListener("click", function(){
    a++;
    newNumber.innerText = a;
    console.log(a);
});


minus.addEventListener("click", function(){
    a--;
    newNumber.innerText = a;
    console.log(a);
});


//working on changing the color of the heart everytime its clicked.
let heart = document.getElementById('heart');

let index = 0;

const colors = ['red', 'grey'];

heart.addEventListener('click', function onClick() {
  heart.style.color = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
});


//working on deleting the whole item each time the delete button is clicked
let deleteButton = document.querySelector(".delete");
let items = document.querySelector(".item1");

deleteButton.addEventListener("click", function(){
    items.classList.remove("items");
});