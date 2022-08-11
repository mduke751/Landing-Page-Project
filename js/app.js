const navBar = document.querySelector('.navbar__menu')
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');


function buildNav(){
   sections.forEach(section => {
       
       const navButton = document.createElement('li');
       
       navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
      
       navList.appendChild(navButton);

       scrollBehavior(navButton, section);
   });
   navBar.appendChild(navList);
}
buildNav();

function scrollBehavior(navButton, section){
   navButton.addEventListener('click', function(event){
       event.preventDefault();
       window.scrollTo({
           top: section.offsetTop,
           behavior:"smooth"
       });
   });
}
function activeSection (){
   const navActive = document.querySelectorAll(".menu__link")
   sections.forEach((section, i)=>{ 
       const sectionBond = section.getBoundingClientRect();
       if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
           section.classList.add("your-active-class");
           navActive[i].classList.add("active_button");
       } else{
           section.classList.remove("your-active-class");
           navActive[i].classList.remove("active_button");
       }
   })
}
function toggleNavBar(){
   let userScroll;
   header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
   window.clearTimeout( userScroll );
   userScroll = setTimeout(function() {
       header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
   }, 6000);
}
window.addEventListener('scroll',(event)=>{
   activeSection();
   toggleNavBar();
})
 
const goUpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
document.getElementById("return_top").addEventListener('click', function(){
   window.scrollTo({
       top: 0,
       behavior:"smooth"
   });
});
