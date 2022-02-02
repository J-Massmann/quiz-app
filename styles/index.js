import Card from '../components/Card.js';

const allCardElements = document.querySelectorAll('[data-js="card"]');

allCardElements.forEach(allCardElements => {
  Card(allCardElements);
});

import Form from '../components/Form.js';

const allFormElements = document.querySelectorAll('[data-js="form"]');

allFormElements.forEach(allFormElements => {
  Form(allFormElements);
});

import Nav from '../components/Navigation.js';

Nav();

import Heading from '../components/Heading.js';

Heading();

import Logout from '../components/Logout_button.js';

Logout();
