export function burgerMenu() {
    // console.log("buttons ready!");
    const btn = document.querySelector(".btn");
  
    btn.addEventListener('click', function() {
      //toggles burger visible hidden
      if (btn.classList[1]=="not-active") {
        btn.classList.remove("not-active");
        btn.classList.add("active");
        btn.querySelectorAll("span").forEach(element => {
          element.style.transitionDuration = "1s";
          element.style.backgroundColor = "#212323";
          element.style.backgroundColor = "#212323";
        });
        document.querySelector(".site_links").classList.remove("hidden");
  
        document.querySelector(".site_links").classList.remove("activeOut");
  
        document.querySelector(".site_links").classList.add("activeIn");
      }
      //hides burger menu
      else if (btn.classList[1]=="active") {
        btn.classList.remove("active");
        btn.classList.add("not-active");
        btn.querySelectorAll("span").forEach(element => {
          element.style.backgroundColor = "#c1272d";
          element.style.backgroundColor = "#c1272d";
        });
        setTimeout(function(){
          if (btn.classList[1]!=="active") {
          document.querySelector(".site_links").classList.add("hidden");
          }
        },500)
        
  
        document.querySelector(".site_links").classList.remove("activeIn");
  
        document.querySelector(".site_links").classList.add("activeOut");
      }
  
  });
  }