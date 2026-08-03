// menu-button feature

let link = document.querySelector(".links");
let button = document.querySelector(".menu-btn");

button.addEventListener("click",function(){
    link.classList.toggle("active");

});

//form -validation

let form = document.querySelector("form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput  = document.querySelector("#message");

form.addEventListener("submit",function(event){

    event.preventDefault();

   let inputName = nameInput.value.trim();
   let inputEmail = emailInput.value.trim();
   let inputMessage = messageInput.value.trim();


   if(inputName === ""){
    alert("fill the name");
    return ;
   }
    let namePattern = /^[A-Za-z ]+$/;

   if (!namePattern.test(inputName)) {
    alert("Name should contain only letters.");
    return;
}
   
   if(inputEmail === ""){
    alert("fill the email");
    return;
   }
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(inputEmail)) {
    alert("Please enter a valid email.");
    return;
}

   if(inputMessage === ""){
    alert("Give the message");
    return;
   }
    let words = inputMessage.split(/\s+/);


if (words.length > 100) {
    alert("Message should not exceed 100 words.");
    return;
}
   
alert("Form submitted successfully!");
form.reset();
});

//smooth scrolling

let navLinks = document.querySelectorAll(".links a");

navLinks.forEach(function(link){
    link.addEventListener("click",function(event){
        event.preventDefault();

        let target = this.getAttribute("href");
        let section = document.querySelector(target);

        section.scrollIntoView({
            behavior :"smooth",
        });
    });
});


//scroll to top button

let topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 190) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
   window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});