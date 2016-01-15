var Elgamecontainer = document.getElementById("backgscene");
var Elwelcom = document.createElement("div");
Elwelcom.className="welcom";

alert(Elgamecontainer);
Elgamecontainer.appendChild(Elwelcom);

var welcomtext = function () {
// TEXT
  var Elwelcomtxt = document.createElement("p");
  Elwelcomtxt.className="welcomtxt";
  Elwelcomtxt.innerHTML="Bienvenue dans le tutoriel Playmystory";
  Elwelcom.appendChild(Elwelcomtxt);
// BOUTON
  var Elwelcombtn = document.createElement("button");
  Elwelcombtn.className="btn-general";
  Elwelcombtn.style.width="80%";
  Elwelcombtn.style.marginLeft="10%";
  Elwelcombtn.style.opacity="0";
  Elwelcombtn.innerHTML="Let's go!";
  Elwelcom.appendChild(Elwelcombtn);

  var opacity = 0;
  var showfadein = function() {
  var pas = 0.1;
  var newopacity=pas+opacity;
    Elwelcomtxt.style.opacity=newopacity.toString();
    Elwelcombtn.style.opacity=newopacity.toString();
    opacity += pas;
    if (opacity>=1){
      clearTimeout(animfade);

    }
  };
  var animfade = setInterval(showfadein,50);

};

var width = 0;
var open = function() {
var pas = 1;
  Elwelcom.style.width=width+pas+"%";
  width += pas;
  if (width>=50){
    clearTimeout(animopen);
    welcomtext();
  }
};
var animopen = setInterval(open,50);
