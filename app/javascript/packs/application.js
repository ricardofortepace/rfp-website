import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import "channels";

Rails.start();
Turbolinks.start();

var i = 0;
var txt = "It's me, Ricardo!_"; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
