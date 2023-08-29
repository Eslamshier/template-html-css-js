//selected element

let progressSpans = document.querySelectorAll(".the-progress span");
let sectionSkills = document.getElementById("ourSkills_id");

let nums = document.querySelectorAll(".container .box .number");
let sectionStats = document.getElementById("stats");

let btnScrollUp = document.querySelector(".scrollUp");



// section Stats
let started = false; // Function Started ? No

// Scroll 
window.onscroll = function () {

    if (this.scrollY >= 1000) {
        btnScrollUp.classList.add("show");
    } else {
        btnScrollUp.classList.remove("show");
    };

    btnScrollUp.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    });
};

    //skills
    if (window.scrollY >= sectionSkills.offsetTop - 400) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }

    // To-do -> this's for stats
    if (window.scrollY >= sectionStats.offsetTop - 400) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    };
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
};


// Event timer
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
    // Get Date Now 
    let dateNow = new Date().getTime();
    
    // Fine the differance between data now and countDownDate
    let dataDiff = countDownDate - dateNow;
    
    // Git time unite
    let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dataDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dataDiff % (1000 * 60)) / (1000));

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dataDiff < 0) {
        clearInterval(counter);
    }
    // console.log((dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}, 1000);

