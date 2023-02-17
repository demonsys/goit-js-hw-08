const throttle = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');
const inputEmailEl = feedbackForm.elements.email;
const messageEl = feedbackForm.elements.message;
const LOCALSTORAGE_KEY = 'feedback-form-state';
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
// const savedSettings = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || '';
const savedSettings = load(LOCALSTORAGE_KEY) || '';
const formData = {
  email: savedSettings.email || '',
  message: savedSettings.message || '',
};
inputEmailEl.value = formData.email;
messageEl.value = formData.message;
feedbackForm.addEventListener('input', throttle(onInputForm, 500));
function onInputForm() {
  formData.email = inputEmailEl.value;
  formData.message = messageEl.value;
  save(LOCALSTORAGE_KEY, formData);
  //   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
feedbackForm.addEventListener('submit', onSubmitForm);
function onSubmitForm(e) {
  e.preventDefault();
  console.log(formData);
  feedbackForm.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
