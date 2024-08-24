document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".switcherButton");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            buttons.forEach(btn => btn.classList.remove("switchedButton"));
            this.classList.add("switchedButton");
        });
    });
});


// function showPageExamples() {
//     let examplesPage = document.querySelector(".content");
//     examplesPage.style.display = 'block'
//     document.querySelector(".about-me").style.display = 'none'
//     document.querySelector(".repositories").style.display = 'none'
// }
// function showPageAbout() {
//     document.querySelector(".content").style.display = 'none'
//     document.querySelector(".about-me").style.display = 'block'
//     document.querySelector(".repositories").style.display = 'none'
// }
// function showPageRepositories() {
//     document.querySelector(".content").style.display = 'none'
//     document.querySelector(".about-me").style.display = 'none'
//     document.querySelector(".repositories").style.display = 'block'
// }
// about.addEventListener("click", showPageAbout);
// examples.addEventListener("click", showPageExamples);
// repositories.addEventListener("click", showPageRepositories);

let mobileMenuButton = document.getElementById(mobileMenuIcon)
    //mobileMenu = document.querySelector('.navHeader1')

function showHidden() {
    mobileMenu = document.querySelector('.navHeaderMobile')
    if (mobileMenu.style.display ==='none') {
        mobileMenu.style.display = 'flex';
    } else {
        mobileMenu.style.display = 'none'
    }
}
// function showHidden() {
//     mobileMenu.classList.add("show"); 
// }

mobileMenuIcon.addEventListener("click", showHidden);

// полоса "загрузки" навыков
// document.addEventListener("DOMContentLoaded", function() {
//     const progressBars = document.querySelectorAll(".progress-bar");

//     progressBars.forEach(bar => {
//         const value = bar.getAttribute("data-value");
//         const progress = bar.querySelector(".progress");
//         progress.style.setProperty('--value', `${value}%`);

//         // Запуск анимации
//         setTimeout(() => {
//             progress.style.width = `${value}%`;
//         }, 100); // Небольшая задержка для обеспечения корректного старта анимации
//     });
// });