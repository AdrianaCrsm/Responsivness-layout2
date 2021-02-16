const reviewMenuBtn = document.getElementById('reviewMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');

var review = function(){
    var reviewMenu = document.getElementById('reviewMenu');
    var homePage = document.getElementById('homePage');
    if(reviewMenu.classList.contains('hidden')){
        reviewMenu.classList.remove('hidden');
        homePage.classList.add('hidden');
    }
    else if(homePage.classList.contains('hidden')){
        homePage.classList.remove('hidden');
        reviewMenu.classList.add('hidden');
    }
}
console.log(reviewMenuBtn);

reviewMenuBtn.addEventListener('click',review);
closeMenuBtn.addEventListener('click',review);


