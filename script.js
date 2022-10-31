
//the first element
let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let newNumber = document.querySelector(".one");
let forty = document.querySelector(".forty");
let one = document.querySelector(".one");

//the second element
let add2 = document.querySelector(".add2");
let minus2 = document.querySelector(".minus2");
let newNumber2 = document.querySelector(".one2");
let forty2 = document.querySelector(".forty2");

//the third element
let add3 = document.querySelector(".add3");
let minus3 = document.querySelector(".minus3");
let newNumber3 = document.querySelector(".one3");
let forty3 = document.querySelector(".forty3");

//the fourth element
let add4 = document.querySelector(".add4");
let minus4 = document.querySelector(".minus4");
let newNumber4 = document.querySelector(".one4");
let forty4 = document.querySelector(".forty4");

//the fifth element
let add5 = document.querySelector(".add5");
let minus5 = document.querySelector(".minus5");
let newNumber5 = document.querySelector(".one5");
let forty5 = document.querySelector(".forty5");

//the fifth element
let add6 = document.querySelector(".add6");
let minus6 = document.querySelector(".minus6");
let newNumber6 = document.querySelector(".one6");
let forty6 = document.querySelector(".forty6");




//using a global function to store the amount from a single item
//add and minus for the first element
let a = 1;
var x = function(){
    a++
    newNumber.innerText = a;
    let tot = forty.innerText = a * 45;
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
    let tot2 = forty2.innerText = b * 45;
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

//add and minus for the third element
let c = 1;
var u = function(){
    c++
    newNumber3.innerText = c;
    let tot3 = forty3.innerText = c * 45;
};
var v = function(){
    if(c>=1){
        c--
    } else {
        return 0;
    }
    newNumber3.innerText = c;
    forty3.innerText = c * 45;
};
add3.addEventListener("click", u);
minus3.addEventListener("click", v);


//add and minus for the fourth element
let d = 1;
var s = function(){
    d++
    newNumber4.innerText = d;
    let tot4 = forty4.innerText = d * 45;
};
var t = function(){
    if(d>=1){
        d--
    } else {
        return 0;
    }
    newNumber4.innerText = d;
    forty4.innerText = d * 45;
};
add4.addEventListener("click", s);
minus4.addEventListener("click", t);

//add and minus for the fifth element
let e = 1;
var q = function(){
    e++
    newNumber5.innerText = e;
    let tot5 = forty5.innerText = e * 45;
};
var r = function(){
    if(e>=1){
        e--
    } else {
        return 0;
    }
    newNumber5.innerText = e;
    forty5.innerText = e * 45;
};
add5.addEventListener("click", q);
minus5.addEventListener("click", r);

//add and minus for the sixth element
let f = 1;
var q = function(){
    f++
    newNumber6.innerText = f;
    let tot6 = forty6.innerText = f * 45;
};
var r = function(){
    if(f>=1){
        f--
    } else {
        return 0;
    }
    newNumber6.innerText = f;
    forty6.innerText = f * 45;
};
add6.addEventListener("click", q);
minus6.addEventListener("click", r);






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

//changing the color of the second item
let heart3 = document.getElementById('heart3');
let i3 = 0;
const colors3 = ['red', 'grey'];

heart3.addEventListener('click', function onClick() {
  heart3.style.color = colors3[i3];
  i3 = i3 >= colors3.length - 1 ? 0 : i3 + 1;
});

//changing the color of the second item
let heart4 = document.getElementById('heart4');
let i4 = 0;
const colors4 = ['red', 'grey'];

heart4.addEventListener('click', function onClick() {
  heart4.style.color = colors3[i4];
  i4 = i4 >= colors4.length - 1 ? 0 : i4 + 1;
});

//changing the color of the second item
let heart5 = document.getElementById('heart5');
let i5 = 0;
const colors5 = ['red', 'grey'];

heart5.addEventListener('click', function onClick() {
  heart5.style.color = colors5[i5];
  i5 = i5 >= colors5.length - 1 ? 0 : i5 + 1;
});

//changing the color of the second item
let heart6 = document.getElementById('heart6');
let i6 = 0;
const colors6 = ['red', 'grey'];

heart6.addEventListener('click', function onClick() {
  heart6.style.color = colors6[i6];
  i6 = i6 >= colors6.length - 1 ? 0 : i6 + 1;
});






//working on deleting the whole item each time the delete button is clicked
let deleteButtons = document.getElementsByClassName("delete-div");
// console.log(deleteButtons);

for (let p = 0; p<deleteButtons.length; p++){
    let button = deleteButtons[p];
    button.addEventListener("click", function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
    })
}






//the total element
let total = document.querySelector(".count21");
let purchased = document.querySelector(".count9");
let order = document.querySelector(".count2");
let totalAmount = (purchased * order);
total.innerText = totalAmount;


