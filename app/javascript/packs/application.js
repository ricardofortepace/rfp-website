import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import "channels";

Rails.start();
Turbolinks.start();

let i = 0;
let txt = "It's me, Ricardo!_"; /* The text */
let speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
