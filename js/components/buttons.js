export function buttonEvents() {
    worksButton();
    }
    
    function worksButton() {
      if (document.querySelector("#skills button")!==null) {
        document.querySelector("#skills button").addEventListener("click", function(){
          window.location.href = "./works.html";
        })
      }
    }