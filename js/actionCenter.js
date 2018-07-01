// If it is the main page or not
var pathname = window.location.pathname.split("/");

if(pathname[pathname.length - 1] == "settings.html" || pathname[pathname.length - 1] == "faq.html" || pathname[pathname.length - 1] == "contact.html") {
  document.getElementsByClassName('arrow-back')[0].onmouseover = function(){backAnimationOn()};
  document.getElementsByClassName('arrow-back')[0].onmouseout = function(){backAnimationOff()};
}

/**
 * Animation for mousover on the back link
 */
function backAnimationOn(){
  var arrow = document.getElementsByClassName('arrow')[0];
  arrow.style.paddingLeft = "30px";
  var draw = document.getElementsByTagName('svg')[0];
  draw.style.fill = '#D00';
}

/**
 * Animation for mouseout on the back link
 */
function backAnimationOff(){
  var arrow = document.getElementsByClassName('arrow')[0];
  arrow.style.paddingLeft = "50px";
}

/**
 * Opens section in the FAQ page
 */
 function animateInfo(idNum){

   var qinfo = document.getElementById('info' + idNum);
   if( qinfo.open == null || !qinfo.open ){
     qinfo.style.maxHeight = window.innerHeight + "px";
     qinfo.open = true;
   } else {
     qinfo.style.maxHeight = "0px";
     qinfo.open = false;
   }
 }

 /**
  * Opens the slide menu
  */
 function changeSlideMenu(){
   var slideM = document.getElementById("slide-menu");
   if(slideM.open = null || !slideM.open){
     slideM.open = true;
     slideM.className = "slide-menu-open";
     //slideM.style.width = "350px";
   } else {
     slideM.className = "slide-menu-close";
     //slideM.style.width = "0px";
     slideM.open = false;
   }
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
   this.style.color = "#000";
   document.body.style.cursor = "auto";
 }
