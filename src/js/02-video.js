import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const savedSettings = localStorage.getItem('videoplayer-current-time');
const parsedSettings = JSON.parse(savedSettings);
try {
  player.setCurrentTime(parsedSettings.seconds);
} catch (error) {
  // seconds = 0
}

const onTimeupdate = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  console.log(data);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));
