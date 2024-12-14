/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  let pronoun = ["her", "his", "their"];
  let adj = ["bad", "small", "fast"];
  let noun = ["book", "bed", "cake"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        console.log(pronoun[p] + adj[a] + noun[n] + ".com");
      }
    }
  }
};
