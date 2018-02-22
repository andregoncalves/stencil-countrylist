![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# st-countrylist

st-countrylist is a web component built with [Stencil](https://stenciljs.com/) to add a select/dropdown list of countries and their respective ISO country codes (ISO-3166-1 - Alpha 2 Codes).

## Demo

## Getting Started

To try this component:

```bash
git clone git@github.com:andregoncalves/stencil-countrylist.git 
cd stencil-countrylist
git remote rm origin
```

and run:

```bash
npm install
npm start
```

## Using this component

### Script tag


- Put `<script src='https://unpkg.com/stencil-countrylist@latest/dist/countrylist.js'></script>` in the head of your index.html
- Then you can use the component

### Node Modules
- Run `npm install stencil-countrylist --save`
- Put a script tag similar to this `<script src='node_modules/stencil-countrylist/dist/countrylist.js></script>` in the head of your index.html
- Then you can use the element `<st-countrylist>` anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install stencil-countrylist --save`
- Add `{ name: 'stencil-countrylist' }` to your [collections](https://github.com/ionic-team/stencil-starter/blob/master/stencil.config.js#L5)
- Then you can use the element `<st-countrylist>` anywhere in your template, JSX, html etc

## Parameters

Attribute | Default | Description
------------ | ------------- | -------------
selected | '' | The selected country, either a country name or ISO code
highlighted | '' | A comma separeated list of countries to show at the top of the list

## Events

The st-countrylist element emits a `countryChange` event whenever the selected value changes
```js
element = document.querySelector('st-countrylist');
element.addEventListener('countryChange', (e) => {
  // Country code
  console.log(e.detail.code);
  // Country name
  console.log(e.detail.name);
})
```

You can also listen to the normal select `change` event that will bubble up.
```js
element = document.querySelector('st-countrylist');
element.addEventListener('change', (e) => {
  // e.target points to the select element
  console.log(e.target);
})
```

## Example usage

```html
<st-countrylist name="country1" highlighted="PT,DE,Hungary" class="my-class"></st-countrylist>
<st-countrylist name="country2" selected="DE"></st-countrylist>
<st-countrylist name="country3" selected="Germany"></st-countrylist>
```
