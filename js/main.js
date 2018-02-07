window.onload = initAll;
window.addEventListener("resize", initResize);

var array;

// Initializes all of the
function initAll(){
  document.getElementById("s").addEventListener("click", topp);

  var theme = document.createElement("link");
  theme.rel = "stylesheet";
  theme.type = "text/css";
  theme.href = "css/themes/blue.css"
  document.getElementsByTagName("head")[0].appendChild(theme);

  document.getElementById("add").open = false;

  array = [];

  // Coppied privacy policy from domenickdibiase.com
  var privacy = document.getElementById("privacy");
  privacy.active = false;
  privacy.onmouseover = privOver;
  privacy.onmouseout = privOut;
  privacy.onclick = privClick;
}

/**
 * Temporary error message
 */
function topp(){
  alert("Sorry the sorting and filter options are not currently set up.");
}

function initResize(){
  var windWidth = window.innerWidth;
  //console.log(windWidth);
}

/**
 * Event for mouseover the privacy policy link.
 */
function privOver(){
  this.style.color = "#555";
  document.body.style.cursor = "pointer";
}

/**
 * Event for clicking the privacy policy link.
 * Displays the policy and scrolls down for the user to read it.
 */
function privClick(){

  if(this.active == true){
    (document.getElementById("policy")).parentNode.removeChild(document.getElementById("policy"));
    document.getElementsByTagName('footer')[0].style.transition = ".5s";
    document.getElementsByTagName('footer')[0].style.height = "60px";
    this.active = false;
    return;
  }

  this.active = true;

  var policy = document.createElement('div');
  policy.id = "policy";
  var p1 = document.createElement('p');
  p1.innerHTML = "Like many other website developers, I use Google Analytics on dayarray.com. Google Analytics is software that fetchs data about my visitors (you). With it I use the data to improve my site to better suite my visitors.";
  policy.appendChild(p1);

  var h1 = document.createElement('p');
  h1.innerHTML = "What does Google Analytics record?";
  h1.className = "prompt";
  policy.appendChild(h1);

  var p2 = document.createElement('p');
  p2.innerHTML = "Google Analytics records what website you came from to get here, how long you stay here for, what kind of computer you're using, and much more anonymous infromation.";
  policy.appendChild(p2);

  var p3 = document.createElement('p');
  p3.innerHTML = "With this, all of my activity falls within the bounds of the /Google Analytics Terms of Service/.";
  policy.appendChild(p3);

  var h2 = document.createElement('p');
  h2.innerHTML = "Want to opt out of tracking?";
  h2.className = "prompt";
  policy.appendChild(h2);

  var p4 = document.createElement('p');
  p4.innerHTML = "Refer to Google's Privacy and Terms page to learn more about how to opt out of Google's advertising tracking cookie.";
  policy.appendChild(p4);
  //this.after(policy);
  policy.style.paddingTop = "25px";
  policy.style.paddingBottom = "60px";
  document.getElementsByTagName('footer')[0].appendChild(policy);
  document.getElementsByTagName('footer')[0].style.transition = "none";
  document.getElementsByTagName('footer')[0].style.height = "30%";


  window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
}

/**
 * Event for mouse out of the privacy policy link
 */
function privOut(){
  this.style.color = "#000";
  document.body.style.cursor = "auto";
}

/**
 * Opens the creation section for an item
 */
function openCreation(){
  if(document.getElementById("add").open)
    closeCreation();
  else {
    document.getElementById("addition-expansion").className = "create";
    document.getElementById("add").open = true;
  }
}

/**
 * Closes the creation section for an item
 */
function closeCreation(){
  document.getElementById("addition-expansion").className = "";
  document.getElementById("add").open = false;
}

/**
 * Creates an Item adding it to the list and displaying it to the user.
 */
function createItem(){
  if(document.getElementById('empty-default'))
    document.getElementById('stretch').removeChild(document.getElementById('stretch').children[0]);

  var title = document.getElementById('input-title').value;
  document.getElementById('input-title').value = null;
  var desc = document.getElementById('input-description').value;
  document.getElementById('input-description').value = null;
  var next = new Item(title, desc);
  next.add();
  array.push(next);
}

function removeItem(itemIndex){
  array.splice(parseInt(itemIndex), 1);
  var parent = document.getElementById('stretch');
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
  for(var i = 0; i < array.length; i++){
    array[i].add()
  }
}
