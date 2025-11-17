'use strict';

const trigger = document.getElementById('trigger');
const target  = document.getElementById('target');

const alkuperainen = target.src;
trigger.addEventListener('mouseover', function() {
  target.src = 'img/picB.jpg';
});
trigger.addEventListener('mouseout', function() {
  target.src = alkuperainen;
});