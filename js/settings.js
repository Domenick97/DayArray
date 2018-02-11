window.addEventListener("load", fillSettings);

// Object of the current settings
var settings;

/**
 * Fills in the inputs with the current settings
 */
function fillSettings(){
  settings = JSON.parse(localStorage.getItem('settings'));

  // If settings were not previously saved then make default settings
  if(settings == null) {
    settings = new Settings();
  }

  document.getElementById("theme-color-input").selectedIndex = settings.color;
  document.getElementById("save-preference").selectedIndex = settings.save;
}

/**
 * Updates changes with the theme color
 */
function updateColor(){
  var c = document.getElementById("theme-color-input");
  settings.color = c.options[c.selectedIndex].value;
  localStorage.setItem('settings', JSON.stringify(settings));
  location.reload();
}

/**
 * Updates changes with the save preference
 */
function updateSave(){
  var s = document.getElementById("save-preference");
  settings.save = s.options[s.selectedIndex].value;
  localStorage.setItem('settings', JSON.stringify(settings));
}
