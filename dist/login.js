



  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-180px";
  }
  prevScrollpos = currentScrollPos;
}








function passwordToggle() {
    var x = document.getElementById("myPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
 

  function handleButtonClick(event) {
    const container = event.target.closest(".div-container");
    const content = container.querySelector(".content");



  if (event.target.classList.contains("menu-btn")) 
      content.style.display = content.style.display === "none" ? "block" : "none";
  }


  document.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("menu-btn")

      ) {
        handleButtonClick(event);
      }
    });