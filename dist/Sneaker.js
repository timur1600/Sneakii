filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// navbar dissapears on scrolldown and reappears on scrollup

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}






 // Function to handle the button clicks
 function handleButtonClick(event) {
  const container = event.target.closest('.div-container');
  const content = container.querySelector('.content');
  
  if (event.target.classList.contains('toggle-heart')) {
    content.classList.toggle('filled'); 
  } else if (event.target.classList.contains('purchase-btn')) {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  } else if (event.target.classList.contains('purchase-btn')) {
    content.classList.toggle('remove');
  } else if (event.target.classList.contains('menu-btn')) {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  } else if (event.target.classList.contains('size-btn')) {
    content.classList.toggle('hidden');
  } else if (event.target.classList.contains('color-btn')) {
    content.classList.toggle('hidden');
  } 
 
}

// Attach click event listener to all buttons using event delegation
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('toggle-heart') ||
      event.target.classList.contains('purchase-btn') ||
      event.target.classList.contains('size-btn') ||
      event.target.classList.contains('menu-btn') ||
      event.target.classList.contains('color-btn')) {
    handleButtonClick(event);
  }
});





function prev(){
  document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
  document.getElementById('slider-container').scrollLeft += 270;
}




const heartFill = document.querySelector('.toggle-heart');

heart.addEventListener('click', () => {
  
  heartFill.classList.toggle('filled');
});


