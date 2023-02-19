import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedSettings = JSON.parse(savedSettings);
try {
  player.setCurrentTime(parsedSettings.seconds);
} catch (error) {
  // seconds = 0
}

const onTimeupdate = function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  console.log(data);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));
