import Card from '../js/Card.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(allCardElements => {
  Card(allCardElements);
});

import Form from '../js/Form.js';

const allFormElements = document.querySelectorAll('[data-js="form"]');

allFormElements.forEach(allFormElements => {
  Form(allFormElements);
});
