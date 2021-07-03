/*==========MOBILE NAV BAR==========*/
const body = document.querySelector("body");
const main = document.querySelector("main");
const navList = document.querySelector(".nav-list");
const navBtn = document.querySelector(".nav-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navLinks = document.querySelectorAll(".nav a");
const navIcons = document.querySelectorAll(".nav-icon");

// on clicking the hamburger button
const navBtnClick = () => {
  navList.classList.add("open");
  navBtn.classList.add("hide");
  cancelBtn.classList.remove("hide");
  body.classList.add("disabledScroll");
  main.classList.add("blur");
  navIcons.forEach(elem => elem.classList.remove("hide"));
}
// on clicking the cancel button
const cancelBtnClick = () => {
  navList.classList.remove("open");
  navBtn.classList.remove("hide");
  cancelBtn.classList.add("hide");
  body.classList.remove("disabledScroll");
  main.classList.remove("blur");
  navIcons.forEach(elem => elem.classList.add("hide"));
}
// on clicking any of the links in nav bar
const navLinkClick = () => {
  if(navList.classList.contains("open")){
    cancelBtn.click();
  }
}

navBtn.addEventListener("click", navBtnClick);
cancelBtn.addEventListener("click", cancelBtnClick);
navLinks.forEach(elem => elem.addEventListener("click", navLinkClick));


