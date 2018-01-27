window.onload = initAll;
window.addEventListener("resize", initResize);

//document.getElementById("title").addEventListener("click", topp);
//document.getElementById("title").addEventListener("resize", topp);

// Initializes all of the
function initAll(){
  document.getElementById("s").addEventListener("click", topp);

  var theme = document.createElement("link");
  theme.rel = "stylesheet";
  theme.type = "text/css";
  theme.href = "css/themes/blue.css"
  document.getElementsByTagName("head")[0].appendChild(theme);

  // Coppied privacy policy from domenickdibiase.com
  var privacy = document.getElementById("privacy");
    privacy.active = false;
    privacy.onmouseover = privOver;
    privacy.onmouseout = privOut;
    privacy.onclick = privClick;
}
function topp(){
  alert("Sorry the sorting and filter options are not currently set up.");
}

function initResize(){
  var windWidth = window.innerWidth;
  //<div class="bg-purple" id="s">dfs</div>
  console.log(windWidth);
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
  this.after(policy);


  window.scrollTo(0,document.body.scrollHeight);
}

/**
 * Event for mouse out of the privacy policy link
 */
function privOut(){
  this.style.color = "#000";
  document.body.style.cursor = "auto";
}

/**
 * Test function to add a to-do item
 */
function testAdd(){
  new item("Test JS Title", "Test JS Desc").add();

  //document.getElementById("addition-expansion").style.height = '100%';
  document.getElementById("addition-expansion").className = "create";
}
