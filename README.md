# Simple Flexbox Grid
Based on simple grid from awesome people [@benchmarkstudios](https://github.com/benchmarkstudios)!

## Markup

### Basic usage
Simple column set - `<div class="col col--xs-12 col--sm-12 col--md-12 col--lg-12"></div>` - inside a `.row`.

```html
  <div class="row">
    <div class="col col--xs-12 col--sm-12 col--md-12 col--lg-12">
      <p>Col 1</p>
    </div>
  </div>
  <div class="row">
    <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6">
      <p>Col 1</p>
    </div>
    <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6">
      <p>Col 2</p>
    </div>
  </div>
  <div class="row">
    <div class="col col--xs-12 col--sm-12 col--md-4 col--lg-4">
      <p>Col 1</p>
    </div>
    <div class="col col--xs-12 col--sm-12 col--md-4 col--lg-4">
      <p>Col 2</p>
    </div>
    <div class="col col--xs-12 col--sm-12 col--md-4 col--lg-4">
      <p>Col 3</p>
    </div>
  </div>
  <div class="row">
    <div class="col col--xs-12 col--sm-12 col--md-8 col--lg-8">
      <p>Col 1</p>
    </div>
    <div class="col col--xs-12 col--sm-12 col--md-4 col--lg-4">
      <p>Col 2</p>
    </div>
  </div>
```

### Offsetting columns
Increase the left margin of a column by the number of columns you want, along with the responsive class prefixes, if you need.

```html
  <div class="row">
    <div class="col col--xs-12 col--sm-12 col--md-4 col--lg-4">
      <p>Col 1 with offset 0</p>
    </div>
    <div class="col col--xs-12 col--sm-12 col--md-4 col--lg-4 col--xs-offset-4 col--sm-offset-0 col--md-offset-4 col--lg-offset-4">
      <p>Col 2 with offset 4</p>
    </div>
  </div>
  <div class="row">
    <div class="col col--xs-12 col--sm-12 col--md-3 col--lg-3 col--xs-offset-0 col--sm-offset-0 col--md-offset-3 col--lg-offset-3">
      <p>Col 3 with offset 3</p>
    </div>
    <div class="col col--xs-12 col--sm-12 col--md-3 col--lg-3 col--xs-offset-0 col--sm-offset-0 col--md-offset-6 col--lg-offset-6">
      <p>Col 4 with offset 6</p>
    </div>
  </div>
  <div class="row">
    <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6 col--xs-offset-0 col--sm-offset-0 col--md-offset-3 col--lg-offset-3">
      <p>Col 5 with offset 3</p>
    </div>
  </div>
```

### Nesting columns
To nest your content, add a new `.row` inside a `.col`, and set of `.col-ld-*` columns within an existing `.col-ld-*` column. Nested rows should include a set of columns that add up to 12 or less.

```html
  <div class="row">
    <div class="col col--xs-12 col--sm-12 col--md-12 col--lg-12">
      <p>Col 1</p>
      <div class="row">
        <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6">
          <p>Nested col 1.1</p>
        </div>
        <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6">
          <p>Nested col 1.2</p>
        </div>
      </div>
    </div>
  </div>
```

### Gutterless columns
To remove all the gutters from your columns just add the class `.row--gutterless` to your `.row` element.

```html
  <div class="row row--gutterless">
    <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6">
      <p>Col 1</p>
    </div>
    <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6">
      <p>Col 2</p>
    </div>
  </div>
```

### Reverse columns
Flexboox is awesome and so you can do things like making your columns reverse order. Just add the class `.row--reverse` to your `.row` element.

```html
  <div class="row row--reverse">
    <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6">
      <p>Col 2</p>
    </div>
    <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6">
      <p>Col 2</p>
    </div>
  </div>
```

### Column Align
Add the class `.row--align-bottom` to your `.col` element to bottom align it's content.

Other available options are: `.col--align-top`, `.col--align-center`, `.col--align-baseline` and `.col--align-stretch`

```html
  <div class="row">
    <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6 col--align-bottom">
      <p>This paragraph will be bottom aligned</p>
    </div>
    <div class="col col--xs-12 col--sm-12 col--md-6 col--lg-6">
      <p>Standard column aligned on top by default</p>
    </div>
  </div>
```

## Dev

### Tasks

#### Default / Development
```js
gulp
```

#### Development (Watch)
Runs Default / Development task along with watch.

```js
gulp watch
```

#### Build
By default build task will bump **patch** version in package.json
```js
gulp build
```

In order to bump **major** or **minor** version use following flags:
```js
gulp build --major
```
or
```js
gulp build --minor
```
