window.addEventListener('scroll',function(){
    let navbar= document.querySelector('.navbar');
    if(window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

let burger=document.querySelector('.burger')
let nav=document.querySelector('.nav')
let navbarItems=document.querySelector('.navbar-items')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})
document.getElementById("contactForm")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.text();
        alert(result);

    } catch (error) {
        console.error(error);
        alert("Error sending message");
    }
});