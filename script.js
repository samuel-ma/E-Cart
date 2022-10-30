
//the first element
let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let newNumber = document.querySelector(".one");
let forty = document.querySelector(".forty");

//the second element
let add2 = document.querySelector(".add2");
let minus2 = document.querySelector(".minus2");
let newNumber2 = document.querySelector(".one2");
let forty2 = document.querySelector(".forty2");


//using a global function to store the amount from a single item
//add and minus for the first element
let a = 1;

var x = function(){
    a++
    newNumber.innerText = a;
    forty.innerText = a * 45;
};

var y = function(){
    if(a >= 1){
        a--
    } else {
        return 0;
    }
    newNumber.innerText = a;
    forty.innerText = a * 45;
};

add.addEventListener("click", x);
minus.addEventListener("click", y);

//add and minus for the second element
let b = 1;

var w = function(){
    b++
    newNumber2.innerText = b;
    forty2.innerText = b * 45;
};

var z = function(){
    if(b>=1){
        b--
    } else {
        return 0;
    }
    
    newNumber2.innerText = b;
    forty2.innerText = b * 45;
};
add2.addEventListener("click", w);
minus2.addEventListener("click", z);



//the total element
let total = document.querySelector(".count21");
// total.innerText = w + x + y + z;



//working on changing the color of the heart everytime its clicked.
//changing the color of the first item
let heart = document.getElementById('heart');
let index = 0;
const colors = ['red', 'grey'];

heart.addEventListener('click', function onClick() {
  heart.style.color = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
});

//changing the color of the second item
let heart2 = document.querySelector('.heart');
let i = 0;
const colors2 = ['red', 'grey'];

heart2.addEventListener('click', function onClick() {
  heart2.style.color = colors2[i];
  i = i >= colors2.length - 1 ? 0 : i + 1;
});



//working on deleting the whole item each time the delete button is clicked
//deleting the first element on the list
let deleteButton = document.querySelector(".delete-div");
let items = document.querySelector(".item1");

deleteButton.addEventListener("click", function(){
    items.remove(items);
});


//deleting the first element on the list
let deleteButton2 = document.querySelector(".delete-div2");
let items2 = document.querySelector(".item11");

deleteButton2.addEventListener("click", function(){
    items2.remove(items2);
});


//add a pop up as soon as the item is deleted to return the deleted items
