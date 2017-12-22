
window.addEventListener('load', init);

//var videoEl=document.getElementById("movie");

function init() {
  console.log("In Init tapp1.js");
  //get the elements we need - the video and the msg
  var v = document.getElementsByTagName("video")[0];
  var msgEl=document.getElementById("msg");
  //set the opacity to 1.0 when the video restarts
  v.addEventListener("playing", function() { msgEl.style.opacity=1.0 }, true);
  //set the intitial opacity
  msgEl.style.opacity=1.0;
  //after 14s set the opacity back to 0.0
  window.setTimeout(function(){msgEl.style.opacity=0.0;}, 14000);
}


