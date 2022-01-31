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

import Nav from '../js/Navigation.js';

Nav();

import Heading from '../js/Heading.js';

Heading();

import Logout from '../js/Profile.js';

Logout();