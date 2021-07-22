export function buttonEvents() {
    worksButton();
    }
    
    function worksButton() {

      worksSingleView();






      if (document.querySelector("#skills button")!==null) {
        document.querySelector("#skills button").addEventListener("click", function(){
          window.location.href = "./works.html";
        })
      }
    }

    function worksSingleView() {
      if ( document.querySelector(".singleview svg")!==null ) {
        document.querySelector(".singleview svg").addEventListener("click", function(){
          window.location.href = "./works.html";
        })
      }
      if (window.location.pathname == "/works.html" || window.location.pathname == "/kea/portfolio/works.html") {;
        const works = document.querySelectorAll("#portfolio_grid .links");
        let count = 1;
        works.forEach( work => {

        goToSingle(work, (count.toString()));
  
        count++;
        })
      }
    }




function goToSingle(selector, theNumber) {
  
  const location = `./singleview${theNumber}.html`; 
  selector.style.cursor = "pointer";
  selector.addEventListener("click", function(){
    goTo(location);
  });
}

function goTo(location) {
  window.location.href = location;
}