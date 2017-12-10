//document.getElementByID().addEventListener('');
window.onload = initAll;
window.addEventListener("resize", initResize);


//document.getElementById("title").addEventListener("click", topp);
//document.getElementById("title").addEventListener("resize", topp);

// Initializes all of the
function initAll(){
  document.getElementById("s").addEventListener("click", topp);

}
function topp(){
  alert("You Clicked the purp");
}

function initResize(){
  var windWidth = window.innerWidth;
  //<div class="bg-purple" id="s">dfs</div>

  console.log(windWidth);

}

// Session Storage
// JS for list of undo's storing the deleted todo's

//Local Storage
// JS to store the has been here berfore info and settings
// JS to store the to do list
