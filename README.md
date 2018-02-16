# mvCheckbox.js
mvCheckbox is a custom checkboxes tiny javascript library

## DEMO PAGE
[link](http://mazurinv.ru/demo/mvCheckbox/)
## Installation

just include mvCheckbox.js to your page
```
<script src="scripts/mvCheckbox.js"></script>
```

## Usage
To init instance of mvCheckbox you must add several DIV elements to your page with some custom class.
Let the class be .mvCheckbox.
```
<div class="mvCheckbox"></div>
```

Add this in JS part of your code:
```
    new mvCheckbox({
        cssClass: 'mvCheckbox',
        width: 40,
        height: 20,
        radius: 1,
        innerRadius: 2,
        padding: 5,
        defaultColor: "#fbf9ff",
        selectedColor: "#b6ffa4",
        background: "#365123",
        clicked: function (el, object) {
          console.log(el, object.params.cssClass)
        }
    });
```
Where:
```
cssClass        - element class in DOM (.mvCheckbox for example)
width           - width of checkbox elements
height          - height of checkbox elements
radius          - radius of external rectangle
innerRadius     - radius of inner rectangle
padding         - distance between inner and outer rectangles
defaultColor    - disbled state color of the inner rectangle
selectedColor   - enabled state color of the inner rectangle
background      - color of the outer rectangle
clicked         - onclick trigger function
```
Copyright 2018 Vladimir Mazourin