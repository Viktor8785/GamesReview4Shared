const pageBody=document.querySelector(".page__body"),genreSelect=document.querySelector(".genre__select"),genreButton=document.querySelector(".genre__button"),gameLink=document.querySelector(".genre__img-link"),watchButton=document.querySelector("#watch-button");pageBody.style.minHeight=window.innerHeight+"px",genreSelect.addEventListener("change",(()=>{genreButton.classList.add("genre__button--active")})),genreButton.addEventListener("click",(()=>{genreSelect.value&&(window.location.href="games.html?param="+genreSelect.value)})),gameLink.addEventListener("click",(()=>{gameLink.href="game.html?param=06&param2=home"})),watchButton.addEventListener("click",(()=>{watchButton.href="games.html?param=watch"}));