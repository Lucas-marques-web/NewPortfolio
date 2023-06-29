
let emailImg =document.getElementById("email-img");

// function copy email  to User's clipboard
emailImg.addEventListener("click", function() {
    let email = 'lp411301@gmail.com';
    navigator.clipboard.writeText(email)
        .then(function() {
            console.log("Email copied to clipboard");
            alert('Email copied to clipboard');

        })
        .catch(function(error) {
            console.error("Failed to copy email to clipboard: ", error);
        });
});

// Add/remove shadow to img from emailImg in the footer 
emailImg.addEventListener("mouseover", function() {
   emailImg.style.opacity= 0.5;
   console.log('mouseOver')
});
emailImg.addEventListener("mouseout", function() {
   emailImg.style.opacity= 1;
   console.log('mouseOut')
});

// Add/remove shadow to img from LinkedinImg in the footer 
let linkedinImg = document.getElementById('img-linkedin');
linkedinImg.addEventListener("mouseover", function() {
   linkedinImg.style.opacity= 0.5;
   console.log('mouseOver')
});
linkedinImg.addEventListener("mouseout", function() {
   linkedinImg.style.opacity= 1;
   console.log('mouseOut')
});

// Add/remove shadow to img from GithubImg in the footer 
let githubImg = document.getElementById('img-github');
githubImg.addEventListener("mouseover", function() {
   githubImg.style.opacity= 0.5;
   console.log('mouseOver')
});
githubImg.addEventListener("mouseout", function() {
   githubImg.style.opacity= 1;
   console.log('mouseOut')
});

// Wrap every letter in a span -   Used in the animation of the h1 name in HomePage
let textWrapperName = document.querySelector('.h1-name');
textWrapperName.innerHTML = textWrapperName.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.h1-name .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.h1-name',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  // Wrap every letter in a span -   Used in the animation of the h1 job in HomePage
let textWrapperJob = document.querySelector('.h1-job');
textWrapperJob.innerHTML = textWrapperJob.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.h1-job .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.h1-job',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
 
//  -   Used in the animation of the nav Home in the HomePage
  let textWrapperHome = document.querySelector('.home');
  textWrapperHome.innerHTML = textWrapperHome.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.home  .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.home',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


//  -   Used in the animation of the nav about in the HomePage
  let textWrapperAbout = document.querySelector('.about');
  textWrapperAbout.innerHTML = textWrapperAbout.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.about .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.about',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//  -   Used in the animation of the nav projects in the HomePage
  let textWrapperProjects = document.querySelector('.projects');
  textWrapperProjects.innerHTML = textWrapperProjects.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.projects .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.projects',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//  -   Used in the animation of the nav contact in the HomePage
  let textWrapperContact = document.querySelector('.contact');
  textWrapperContact.innerHTML = textWrapperContact.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.contact .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.contact',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//  -   Used in the animation of the phoneImg xoxo-divs  in the HomePage
  anime.timeline({loop: false})
  .add({
    targets: '.phone-img, .xoxo-div, .xoxo-div-2',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 6000,
  })