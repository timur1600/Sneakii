


// navbar dissapears on scrolldown and appears on scrollup

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
};

// Function to handle the button clicks
function handleButtonClick(event) {
  const container = event.target.closest(".div-container");
  const content = container.querySelector(".content");

  if (event.target.classList.contains("toggle-heart")) {
    content.classList.toggle("filled");
  } else if (event.target.classList.contains("purchase-btn")) {
    content.style.display = content.style.display === "none" ? "block" : "none";
  } else if (event.target.classList.contains("purchase-btn")) {
    content.classList.toggle("remove");
  } else if (event.target.classList.contains("menu-btn")) {
    content.style.display = content.style.display === "none" ? "block" : "none";
  } else if (event.target.classList.contains("size-btn")) {
    content.classList.toggle("hidden");
  } else if (event.target.classList.contains("color-btn")) {
    content.classList.toggle("hidden");
  } else if (event.target.classList.contains("categories-btn")) {
    content.classList.toggle("hidden");
  }
}

// Attach click event listener to all buttons using event delegation
document.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("toggle-heart") ||
    event.target.classList.contains("purchase-btn") ||
    event.target.classList.contains("size-btn") ||
    event.target.classList.contains("menu-btn") ||
    event.target.classList.contains("categories-btn") ||
    event.target.classList.contains("color-btn")
  ) {
    handleButtonClick(event);
  }
});

//slider

function prev() {
  document.getElementById("slider-container").scrollLeft -= 270;
}

function next() {
  document.getElementById("slider-container").scrollLeft += 270;
}


// selected elements turn green
function hervorhebenAuswahl(button) {
  const ul = button.closest("ul");
  const buttons = ul.querySelectorAll("button");    
  

  buttons.forEach((btn) => {
    if (btn === button) {
      btn.classList.add("selected"); // add class with color for selected button
    } else {
      btn.classList.remove("selected"); // remove class from button
    }
  });
}







function ersetzeColor(button) {
  const text = button.innerText;

  // get parent div of button
  const divContainer = button.closest(".div-container");

  // get headline with id
  const alteUeberschrift = divContainer.querySelector("#oldcolor");
  alteUeberschrift.textContent = text;

  hervorhebenAuswahl(button);
}

function ersetzeSize(button) {
  const text = button.innerText;

  // get parent div
  const divContainer = button.closest(".div-container");

  // get headline with id #oldsize
  const alteUeberschrift = divContainer.querySelector("#oldsize");
  alteUeberschrift.textContent = text;

  hervorhebenAuswahl(button);

  // ...
}

//FilterDivs

function filterDivs(className) {
  const divs = document.querySelectorAll(".filterable"); // all filterable divs

  // all divs none
  divs.forEach((div) => {
    div.style.display = "none";
  });

  // only div with selected class
  if (className === "filterable") {
    // show all
    divs.forEach((div) => {
      div.style.display = "block";
    });
  } else {
    const filteredDivs = document.querySelectorAll("." + className);
    filteredDivs.forEach((div) => {
      div.style.display = "block";
    });
  }
}
