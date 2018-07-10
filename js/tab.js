var tabs = Object.freeze({"LEFT":1, "CENTER":2, "RIGHT":3});

function initTabs() {
  document.getElementById("tab-left").addEventListener("mouseover", function(){tabMouseOver("LEFT");});
  document.getElementById("tab-center").addEventListener("mouseover", function(){tabMouseOver("CENTER");});
  document.getElementById("tab-right").addEventListener("mouseover", function(){tabMouseOver("RIGHT");});

  document.getElementById("tab-left").addEventListener("mouseout", function(){tabMouseOut("LEFT");});
  document.getElementById("tab-center").addEventListener("mouseout", function(){tabMouseOut("CENTER");});
  document.getElementById("tab-right").addEventListener("mouseout", function(){tabMouseOut("RIGHT");});
}

/**
 *
 */
function tabMouseOver(tab) {
  switch (tab) {
    case "LEFT":
      var tab = document.getElementById("tab-left");
      tab.style.marginLeft = "80px";
      tab.style.marginRight = "10px";
      break;
    case "CENTER":
      var tab = document.getElementById("tab-center");
      tab.style.marginLeft = "10px";
      tab.style.marginRight = "10px";
      tab.style.boxShadow = "0px 3px 4px #333";
      break;
    case "RIGHT":
      var tab = document.getElementById("tab-right");
      tab.style.marginLeft = "10px";
      tab.style.marginRight = "80px";
      break;
    default:
      // Nothing
  }
}

/**
 *
 */
function tabMouseOut(tab) {
  switch (tab) {
    case "LEFT":
      var tab = document.getElementById("tab-left");
      tab.style.margin = "0px";
      break;
    case "CENTER":
      var tab = document.getElementById("tab-center");
      tab.style.margin = "0px";
      tab.style.boxShadow = "0px 2px 4px #333";
      break;
    case "RIGHT":
      var tab = document.getElementById("tab-right");
      tab.style.margin = "0px";
      break;
    default:
    // Nothing
  }
}
