
// var elements = document.querySelectorAll(".addcart");

// var swash = function() {
//   console.log('swash')

// }

  

// var italian = function (){
//     console.log('italian')
// }


// // selection of pizza 
// for (var i = 0; i < elements.length; i++) {
//   if(i==0) { elements[i].addEventListener('click', swash)
//   }
//   else if(i==1) { elements[i].addEventListener('click', italian)
//   }
// }


function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item!== checkbox) item.checked = false
    })
}


 var selectChicken = function() {
    if (this.checked){
        console.log('chicken selected')

       
    }
  }
  var selectHam = function() {
    if (this.checked){
        console.log('ham selected')
    }
}
 var selectTuna = function() {
    if (this.checked){
        console.log('tuna selected')
    }
}


var checkElements=document.querySelectorAll(".checkbox1")
for (var i = 0; i < checkElements.length; i++) {
    if(i==0) {checkElements[i].addEventListener('change', selectChicken) 
         
   }

    else if(i==1) { checkElements[i].addEventListener('change', selectHam)
    }
    else if(i==2) { checkElements[i].addEventListener('change', selectTuna)
    }
}




var swash = function() {
  console.log('swash')
  localStorage.setItem('Pizza1', 'Swash')


}
var italian = function (){
    console.log('italian')
    localStorage.setItem('Pizza2','Italian')
}
var hawaiin = function (){
    console.log('hawaiin')
    localStorage.setItem('Pizza3','Hawaiin')
}
var reine = function (){
    console.log('reine')
    localStorage.setItem('Pizza4','Reine')
}
var margherita = function (){
    console.log('margherita')
    localStorage.setItem('Pizza5','Margherita')
}
var vegetarian = function (){
    console.log('vegetarian')
    localStorage.setItem('Pizza6','Vegetarian')
}
var pirates_special = function (){
    console.log('vpirates special')
    localStorage.setItem('Pizza7','Pirates Special')
}
var mauritian= function (){
    console.log('mauritian')
    localStorage.setItem('Pizza8','Mauritian')
}
var chef= function (){
    console.log('chef')
    localStorage.setItem('Pizza9','Chef')
}
var chicken_shrimp = function (){
    console.log('chicken shrimp')
    localStorage.setItem('Pizza10','Chicken Shrimp')
}
var bacon= function (){
    console.log('bacon')
    localStorage.setItem('Pizza11','Bacon')
}
var napolitaine= function (){
    console.log('napolitaine')
    localStorage.setItem('Pizza12','Napolitaine')
}
var cheesy = function (){
    console.log('cheesy')
    localStorage.setItem('Pizza13','Cheesy')
}
var mexicain= function (){
    console.log('mexicain')
    localStorage.setItem('Pizza14','Mexicain')
}
var lardons = function (){
    console.log('lardons')
    localStorage.setItem('Pizza15','Lardons')
}
var special_marlin= function (){
    console.log('special marlin')
    localStorage.setItem('Pizza16','Special Marlin')
}
var seafood= function (){
    console.log('seafood')
    localStorage.setItem('Pizza17','Seafood')
}
var diavola = function (){
    console.log('diavola')
    localStorage.setItem('Pizza18','Diavola')
}
var chicken_sausage = function (){
    console.log('chicken sausage')
    localStorage.setItem('Pizza19','Chicken Sausage')
}
var pesto_miel = function (){
    console.log('pesto miel')
    localStorage.setItem('Pizza20','Pesto Miel')
}


// selection of pizza 
var elements = document.querySelectorAll(".addcart");
for (var i = 0; i < elements.length; i++) {
  if(i==0) { elements[i].addEventListener('click', swash)
  }
  else if(i==1) { elements[i].addEventListener('click', italian)
  }
  else if(i==2) { elements[i].addEventListener('click', hawaiin)
  }
  else if(i==3) { elements[i].addEventListener('click', reine)
  }
  else if(i==4) { elements[i].addEventListener('click', margherita)
  }
  else if(i==5) { elements[i].addEventListener('click', vegetarian)
  }
  else if(i==6) { elements[i].addEventListener('click', pirates_special)
  }
  else if(i==7) { elements[i].addEventListener('click', mauritian)
  }
  else if(i==8) { elements[i].addEventListener('click', chef)
  }
  else if(i==9) { elements[i].addEventListener('click', chicken_shrimp)
  }
  else if(i==10) { elements[i].addEventListener('click', bacon)
  }
  else if(i==11) { elements[i].addEventListener('click', napolitaine)
  }
  else if(i==12) { elements[i].addEventListener('click', cheesy)
  }
  else if(i==13) { elements[i].addEventListener('click', mexicain)
  }
  else if(i==14) { elements[i].addEventListener('click', lardons)
  }
  else if(i==15) { elements[i].addEventListener('click',special_marlin)
  }
  else if(i==16) { elements[i].addEventListener('click', seafood)
  }
  else if(i==17) { elements[i].addEventListener('click', diavola)
  }
  else if(i==18) { elements[i].addEventListener('click', chicken_sausage)
  }
  else if(i==19) { elements[i].addEventListener('click', pesto_miel)
  }
}




var swash1 = function() {
    console.log('swash')
    let y = document.getElementsByClassName('cart')
    y.appendChild(box)
    let x= localStorage.getItem('Pizza1')
    box.appendChild(x)
    
    //  x.appendChild(box)    
}

var cartElements = document.querySelectorAll(".addcart");
for (var i = 0; i < elements.length; i++) {
  if(i==0) { elements[i].addEventListener('click', swash1)
  }
}

let box;
function createElement() {
    box = document.createElement('div');
    box.setAttribute('class', 'item');
    // box.setAttribute('id', 'theCell');
    
}


// create element for cart
// function addCart ()
// const newDiv = document.createElement("div")
// newDiv.className = 'cartOrder'
