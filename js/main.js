window.onload = initAll;
//window.addEventListener("resize", initResize);

var array;

/**
 * Initializes everything on window load
 */
function initAll(){

  // Loads specific style sheet specified by the users settings
  loadTheme();

  // Initializes array
  array = [];

  // If it is the main page
  var pathname = window.location.pathname.split("/");
  if(pathname[pathname.length - 1] != "settings.html") {

    // Temporary error message for the sort and filter options
    document.getElementById("s").addEventListener("click", topp);
    // Initializes creation menu status
    document.getElementById("add").open = false;
    // Load saved items in the list
    loadItems();
  }

  // Coppied privacy policy from domenickdibiase.com
  // Initializes the privacy policy area
  var privacy = document.getElementById("privacy");
  privacy.active = false;
  privacy.onmouseover = privOver;
  privacy.onmouseout = privOut;
  privacy.onclick = privClick;
}

/**
 * Loads the theme saved in local storage or sets it to default
 */
function loadTheme(){
  var theme = document.createElement("link");
  theme.rel = "stylesheet";
  theme.type = "text/css";
  var settings = JSON.parse(localStorage.getItem('settings'));

  // If settings were not previously saved then make default settings
  if(settings == null) {
    settings = new Settings();
  }

  var index = settings.color;

  if (index == 1) {
    theme.href = "css/themes/red.css";
  } else if (index == 2) {
    theme.href = "css/themes/green.css";
  } else if (index == 3) {
    theme.href = "css/themes/orange.css";
  } else if (index == 4) {
    theme.href = "css/themes/yellow.css";
  } else if (index == 5) {
    theme.href = "css/themes/pink.css";
  } else if (index == 6) {
    theme.href = "css/themes/purple.css";
  } else if (index == 7) {
    theme.href = "css/themes/grey.css";
  } else if (index == 8) {
    theme.href = "css/themes/dark.css";
  } else {
    theme.href = "css/themes/blue.css";
  }

  document.getElementsByTagName("head")[0].appendChild(theme);
}

/**
 * Loads in the items saved in local storage
 */
function loadItems(){
  // Array of saved items
  var arrayLoad = JSON.parse(localStorage.getItem('list'));

  // If there there are items in local storage then remove
  // the default empty message
  if ( arrayLoad == null || arrayLoad.length == 0 )
    defaultMessage();

  if ( arrayLoad != null ) {
    // Create items from local storage, adds them to the screen,
    // and adds them to the array
    for(var i = 0; i < arrayLoad.length; i++){
       var next = new Item(arrayLoad[i].title, arrayLoad[i].description);
       next.add();
       array.push(next);
    }
  }
}

 /**
  * Autosaves the list after every update
  */
  function autoSave(){
    localStorage.setItem('list', JSON.stringify(array));
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
  autoSave();
}

/**
 * Removes the item at the index given
 *
 * @param itemIndex index of the item to be removed
 */
function removeItem(itemIndex){
  array.splice(parseInt(itemIndex), 1);
  var parent = document.getElementById('stretch');
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
  for(var i = 0; i < array.length; i++){
    array[i].add()
  }
  autoSave();
  if( array.length == 0 )
    defaultMessage();
}

/**
 * Adds the default message for an empty list to the screen
 */
function defaultMessage(){
  var deflt = document.createElement('div');
  deflt.setAttribute("class", "item");
  deflt.setAttribute("id", "empty-default");
  var mid = document.createElement('p');
  mid.innerHTML = "It looks like you have nothing on your to-do list.</br><span style='font-size:15px'>To add an item, click on the plus button in the top right.</span>";
  deflt.appendChild(mid);
  document.getElementById("stretch").appendChild(deflt);
}

/**
 * Temporary error message
 */
function topp(){
  alert("Sorry the sorting and filter options are not currently set up.");
}

/**
 * Event for mouseover the privacy policy link.
 */
function privOver(){
  this.style.color = "#888";
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

  policy.style.paddingTop = "25px";
  policy.style.paddingBottom = "60px";
  document.getElementsByTagName('footer')[0].appendChild(policy);
  document.getElementsByTagName('footer')[0].style.transition = "none";
  document.getElementsByTagName('footer')[0].style.height = "30%";

  // Scrolls to the bottom of the screen
  window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
}

/**
 * Event for mouse out of the privacy policy link
 */
function privOut(){
  this.style.color = "#000";v
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
 * Opens the slide menu
 */
function slideMenuOpen(){
  document.getElementById("slide-menu").style.width = "350px";
}

/**
 * Closes the slide menu
 */
function slideMenuClose(){
  document.getElementById("slide-menu").style.width = "0px";
}

/**
 * Settings object that holds values for the theme Color,
 * save preference, and version number.
 */
function Settings(){
  // Initializes settings to default atributes
  this.color = 0;
  this.save = 1;
  this.version = "1.0";
}
