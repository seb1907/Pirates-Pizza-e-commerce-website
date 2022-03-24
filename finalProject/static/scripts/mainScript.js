
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
        return 'Chicken'
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

}

var italian = function (){
    console.log('italian')
}


// selection of pizza 
var elements = document.querySelectorAll(".addcart");
for (var i = 0; i < elements.length; i++) {
  if(i==0) { elements[i].addEventListener('click', swash)
  }
  else if(i==1) { elements[i].addEventListener('click', italian)
  }
}




// create element for cart
// function addCart ()
// const newDiv = document.createElement("div")
// newDiv.className = 'cartOrder'
