var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//icon loop
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".scrolling-wrapper");
  const content = document.querySelector(".scrolling-content");

  const clone = content.cloneNode(true);
  clone.style.marginLeft = "1.5rem";
  wrapper.appendChild(clone);
});