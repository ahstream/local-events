/* eslint-disable no-alert */
/* JavaScript entry point for Webpack bundler. */

import _ from 'lodash';
import 'normalize.css';
import 'src/styles/index.css';
import sampleData from 'src/data/sample-data.json';
import sampleImage from 'src/images/sample-image.png';

function alert2(msg) {
  alert(`alert2: ${msg}`);
}

function mountApplication() {
  const header = document.createElement('h1');
  header.innerHTML = _.join(['Application 2', 'mounted', ' here!'], ' ');
  header.classList.add('header');

  const section1 = document.createElement('section');
  section1.innerHTML += '<p>Links to project pages:</p>';
  section1.innerHTML += '<ul>';
  section1.innerHTML += '<li><a href="./prototype.html">prototype.html</a>';
  section1.innerHTML += '</ul>';

  const section2 = document.createElement('section');
  const p1 = document.createElement('p');
  p1.innerText = 'Sample image:';
  const img = document.createElement('img');
  img.src = sampleImage;
  section2.appendChild(p1);
  section2.appendChild(img);

  const section3 = document.createElement('section');
  const p3 = document.createElement('p');
  p3.innerText = 'Sample JSON data:';
  const pre = document.createElement('code');
  pre.innerText = JSON.stringify(sampleData);
  section3.appendChild(p3);
  section3.appendChild(pre);

  const section4 = document.createElement('section');
  const p4 = document.createElement('p');
  p4.innerText = 'Sample button:';
  const btn = document.createElement('button');
  btn.innerText = 'Click me!';
  btn.addEventListener('click', () => {
    alert2('Hello World');
  });
  section4.appendChild(p4);
  section4.appendChild(btn);

  const section5 = document.createElement('section');
  const h = 'Sample button with inline html click handler: <button onClick="alert2(\'foo\');">Click me!</button>';
  section5.innerHTML = h;

  const appElement = document.createElement('div');
  appElement.classList.add('mounted-app');
  appElement.appendChild(header);
  appElement.appendChild(section1);
  appElement.appendChild(section2);
  appElement.appendChild(section3);
  appElement.appendChild(section4);
  appElement.appendChild(section5);

  document.getElementById('app').appendChild(appElement);
}

mountApplication();
