/* =====================================================
   PREMIUM WEBSITE
   SCRIPT.JS - PART 1
   ===================================================== */


/* ================= LOADER ================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1500);

});


/* ================= LIVE DATE ================= */

const date = new Date();

const options = {

    weekday: "long",

    year: "numeric",

    month: "long",

    day: "numeric"

};

document.getElementById("date").innerHTML =
date.toLocaleDateString("en-US", options);



/* ================= LIVE CLOCK ================= */

function updateClock() {

    const now = new Date();

    let hours = now.getHours();

    let minutes = now.getMinutes();

    let seconds = now.getSeconds();

    let session = "AM";

    if (hours >= 12) {

        session = "PM";

    }

    if (hours > 12) {

        hours -= 12;

    }

    if (hours === 0) {

        hours = 12;

    }

    hours = String(hours).padStart(2, "0");

    minutes = String(minutes).padStart(2, "0");

    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").innerHTML =
        `${hours}:${minutes}:${seconds} ${session}`;

}

setInterval(updateClock, 1000);

updateClock();



/* ================= DARK MODE ================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else {

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

};



/* ================= BACK TO TOP ================= */

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



/* ================= CONTACT FORM ================= */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    const data = {

        name: inputs[0].value,

        email: inputs[1].value,

        subject: inputs[2].value,

        message: inputs[3].value

    };

    localStorage.setItem("contactData",
    JSON.stringify(data));

    alert("✅ Message Sent Successfully!");

    form.reset();

});



/* ================= VISITOR COUNTER ================= */

let visitors =
localStorage.getItem("visitors");

if(visitors===null){

    visitors=12587;

}

else{

    visitors=parseInt(visitors)+1;

}

localStorage.setItem("visitors",visitors);

document.getElementById("visitorCount").innerHTML=visitors;

/* =====================================================
   SCRIPT.JS - PART 2 (FINAL)
===================================================== */


/* ================= WELCOME POPUP ================= */

setTimeout(function () {

    alert("🎉 Welcome to My Professional Website!");

}, 2000);


/* ================= BUTTON ANIMATION ================= */

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", function () {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave", function () {

        btn.style.transform = "scale(1)";

    });

});


/* ================= IMAGE HOVER EFFECT ================= */

const images = document.querySelectorAll(".gallery-card img");

images.forEach(img => {

    img.addEventListener("mouseover", function () {

        img.style.filter = "brightness(110%)";

    });

    img.addEventListener("mouseout", function () {

        img.style.filter = "brightness(100%)";

    });

});


/* ================= SECTION FADE-IN ================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = "all 1s ease";

    observer.observe(section);

});


/* ================= COUNTER ANIMATION ================= */

const counters = document.querySelectorAll(".counter-box h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = parseInt(counter.innerText);

        let count = 0;

        const increment = Math.ceil(target / 100);

        const interval = setInterval(() => {

            count += increment;

            if (count >= target) {

                counter.innerText = target + "+";

                clearInterval(interval);

            }

            else {

                counter.innerText = count + "+";

            }

        }, 25);

    };

    updateCounter();

});


/* ================= TYPING EFFECT ================= */

const heading = document.querySelector(".hero-left h1");

const originalText = heading.innerHTML;

heading.innerHTML = "";

let index = 0;

function typingEffect() {

    if (index < originalText.length) {

        heading.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typingEffect, 60);

    }

}

typingEffect();


/* ================= FLOATING ICONS ================= */

const icons = document.querySelectorAll(".service-card i");

icons.forEach(icon => {

    icon.animate(

        [

            { transform: "translateY(0px)" },

            { transform: "translateY(-10px)" },

            { transform: "translateY(0px)" }

        ],

        {

            duration: 2000,

            iterations: Infinity

        }

    );

});


/* ================= MUSIC BUTTON ================= */

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {

    alert("🎵 Background music can be added by linking an MP3 file.");

});


/* ================= NAVBAR SHADOW ================= */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";

    }

    else {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

    }

});


/* ================= RANDOM BACKGROUND COLOR ================= */

const colors = [

"#d8f3ff",

"#dff6ff",

"#e8f7ff",

"#d0ecff"

];

setInterval(() => {

    document.body.style.background =

        colors[Math.floor(Math.random() * colors.length)];

}, 12000);


/* ================= CONSOLE MESSAGE ================= */

console.log("🚀 Website Developed Successfully!");

console.log("Designed using HTML, CSS and JavaScript");

console.log("Project Loaded Successfully!");