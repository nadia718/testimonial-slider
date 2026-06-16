const testimonials = [
    {
        name:"Skincare-Cosmetic",
        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text:"I would recommend IT COMPANY for anyone trying to get the word out about their business. It has saved me so much time!",
    },
    {
        name:"softwear house",
        photoUrl:"https://images.unsplash.com/photo-1678286742832-26543bb49959?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text:"software house is the ultimate time saver for small business owners like me.",
    },
    {
        name:"week days",
        photoUrl:"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHwyfDB8fHww",
        text:"I have tried a few software of this kind and week days is the best by far!",
    },
]
const imgEl = document.querySelector(".img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
const dotsContainer = document.querySelector(".dots");

let idx = 0;
let interval;


testimonials.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if(i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        idx = i;
        updateTestimonial();
        resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    usernameEl.innerHTML = name;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[idx].classList.add("active");


    idx++;
    if(idx===testimonials.length){
        idx=0;
    }
    // setTimeout(()=>{
    //    updateTestimonial();
    // },5000);
}

// next slide

function showNext(){
    idx = (idx + 1) % testimonials.length;
    updateTestimonial();
}

// prev slide
function showPrev(){
    idx = (idx - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

// auto slide
function startAutoSlide(){
    interval = setInterval(showNext, 3000);
}

function resetAutoSlide(){
    clearInterval(interval);
    startAutoSlide();
}

// buttons click
// rightBtn.addEventListener("click", () => {
//     showNext();
//     resetAutoSlide();
// });

// leftBtn.addEventListener("click", () => {
//     showPrev();
//     resetAutoSlide();
// });

// start
updateTestimonial();
startAutoSlide();
