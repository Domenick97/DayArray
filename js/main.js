window.onload = initAll;
//window.addEventListener("resize", initResize);

// Array of all the items in the list
var array;
// Boolean to turn off drag and drop while editing
var dragSwitch = true;

/**
 * Initializes everything on window load
 */
function initAll(){

  // Loads specific style sheet specified by the users settings
  loadTheme();

  // Initializes array
  array = [];

  // Temporary error message for the sort and filter options
  initTabs();

  //document.getElementById("slide-menu").className = "slide-menu-close";
  // Load saved items in the list
  loadItems();

  // Hides the creation section
//  document.getElementById("addition-expansion").style.display = "none";

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
    //console.log(array);
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
 * Opens and closes the creation section for an item
 */
function animateCH(){
  if(document.getElementById("add").open == null || !document.getElementById("add").open) {
    //document.getElementById("addition-expansion").style.display = "block";
    document.getElementById("addition-expansion").className = "create";
    document.getElementById("add").open = true;
  } else {
    document.getElementById("addition-expansion").className = "";
    document.getElementById("add").open = false;
    //document.getElementById("addition-expansion").style.display = "none";
  }
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

/**
 * Prevents default events for drag over
 *
 * @param ev ondragover event
 */
function allowDrop(ev) {
  if(dragSwitch)
    ev.preventDefault();
}

/**
 * On item drag it sets the data to the items id
 *
 * @param ev ondragstart event
 */
function drag(ev) {
  if(dragSwitch){
    ev.dataTransfer.setData("text", ev.target.id);
  }
}

/**
 * When the item is droped to another position the it
 * updates the item list to reflect
 *
 * @param ev ondrop event
 */
function drop(ev) {
  if(dragSwitch){
    if( array.swap == null )
      array.swap = true;
    else
      array.swap = !array.swap;

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    var targ = ev.target;
    while(targ.id == null || targ.id == ""){
      targ = targ.parentElement;
    }

    if( array.swap && ev.target != null){
      moveItem(targ.id, data);
    }
  }
}

/**
 * Moves the item at the given index to the desired position
 *
 * @param moveIndex desired index of the item being moved
 * @param index current index of the item being moved
 */
function moveItem(moveIndex, index){
  var tempItem = array[index];

  // Removes the item thats being moved
  array.splice(parseInt(index), 1);

  // Inserts item into the array at the desired index
  array.splice(moveIndex, 0, tempItem);

  // Resets all of the items queue values
  for(var i = 0; i < array.length; i++){
    array[i].queue = i;
  }

  autoSave();
  //location.reload();
  var parent = document.getElementById('stretch');
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
  for(var i = 0; i < array.length; i++){
    array[i].add()
  }
}
