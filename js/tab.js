function initTabs() {
  document.getElementById("tab-center").addEventListener("mouseover", centerMouseOver);
  document.getElementById("tab-center").addEventListener("mouseout", centerMouseOff);
  document.getElementById("tab-left").addEventListener("mouseover", leftMouseOver);
  document.getElementById("tab-left").addEventListener("mouseout", leftMouseOff);
  document.getElementById("tab-right").addEventListener("mouseover", rightMouseOver);
  document.getElementById("tab-right").addEventListener("mouseout", rightMouseOff);
  document.getElementById("tabs").addEventListener("mouseover", tabBarMouseOver);
  document.getElementById("tabs").addEventListener("mouseout", tabBarMouseOff);
}

/**
 *
 */
function rightMouseOver(tab) {
  var tab = document.getElementById("tab-right");
  tab.style.marginLeft = "10px";
  tab.style.marginRight = "100px";
}

/**
 *
 */
function rightMouseOff(tab) {
  var tab = document.getElementById("tab-right");
  tab.style.margin = "0px";
}

/**
 *
 */
function leftMouseOver() {
  var tab = document.getElementById("tab-left");
  tab.style.marginLeft = "100px";
  tab.style.marginRight = "10px";
}

/**
 *
 */
function leftMouseOff() {
  var tab = document.getElementById("tab-left");
  tab.style.margin = "0px";
}

/**
 *
 */
function centerMouseOver() {
  var tab = document.getElementById("tab-center");
  tab.style.margin = "4px";
  tab.style.marginLeft = "10px";
  tab.style.marginRight = "10px";
  tab.style.boxShadow = "0px 3px 4px #333";
}

/**
 *
 */
function centerMouseOff() {
  var tab = document.getElementById("tab-center");
  tab.style.margin = "0px";
  tab.style.boxShadow = "0px 2px 4px #333";
}

/**
 *
 */
function tabBarMouseOver() {
  document.getElementById("tab-center").style.marginTop = "0px";
  var tab = document.getElementById("tabs");
  tab.style.height = "30px";
}

/**
 *
 */
function tabBarMouseOff() {
  document.getElementById("tab-center").style.marginTop = "0px";
  var tab = document.getElementById("tabs");
  tab.style.height = "30px";
}
