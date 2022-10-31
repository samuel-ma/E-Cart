# E-Cart
An Ecommerce cart with pre-selected items

### VIEW LIVE SITE HERE
----> https://samuel-ma.github.io/E-Cart/

### LANGUAGES USED
<ul>
  <li>Html</li>
  <li>CSS</li>
  <li>Javascript</li>
</ul>

### TOOS USED
<ul>
  <li>Adobe XD</li>
  <li>Visual Studio Code</li>
  <li>Codepen</li>
  <li>Git</li>
</ul>

### ICONS USED
<ul>
  <li>IconsFont (fav)</li>
  <li>Friconix</li>
  <li>Font Awesome</li>
  <li>Google Fonts</li>
  <li>Icons8</li>
  <li>Flavicon</li>
</ul>

### SOME CODE SNIPPETS
```Javascript
  //changing the color of the first item
  let heart = document.getElementById('heart');
  let index = 0;
  const colors = ['red', 'grey'];

  heart.addEventListener('click', function onClick() {
    heart.style.color = colors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;
  });
```
