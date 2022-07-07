<p align="center">
  <img src="assets/organicss-logo-full.png" alt="OrganiCSS standard logo with icon and name" width="500" />
</p>

OrganiCSS is a collection of mixins and functions to support writing progressively-enhanced logical
CSS in many different flavors.

## What is Logical CSS?

"The web has firmly shifted into an expectation of responsive, user-friendly sites and products.
That fluidity has allowed the platform to scale at tremendous rates, and has fully altered entire
markets and industries. But in the pursuit of supporting more and more devices, what happens if one
of those devices isn't in English? Or French? Or any other language that flows from top to bottom,
left to right?

> Building inclusive products doesn't mean supporting devices, but supporting the people using them.

Looking at Hebrew specifically, a language written and read from right to left, there're plenty of
styling challenges in handling this minor variation. Instances of `text-align: left` would need to
be conditionally updated to `text-align: right` or an entirely separate set of styles is loaded,
essentially creating a second unique version of the site or product.

What happens then with Japanese, where text flows from top to bottom, and content from right to
left? Or Mongolian where the text flows the same, but the content is flipped to flow left to right?

This is where CSS Logical Properties shine. When writing `text-align: left`, it's likely because the
text should be positioned where the content is expected to _start_. Only, as mentioned, content
doesn't always start at the left. So what would be ideal is something like `text-align: start` to
ensure our content is aligned with its expected starting point.

And that's exactly what CSS Logical Properties do."

[Read more about Logical CSS](https://www.danyuschick.com/articles/css-logical-properties-are-the-future-of-the-web-and-i18n/)

## Why OrganiCSS?

> As of version 1.0.0, OrganiCSS supports all logical properties documented on
> [MDN: CSS Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties).

Using OrganiCSS allows writing logical CSS now with the appropriate fallbacks when necessary. Let's
look at an example in SCSS.

```scss
.container {
    @include margin($blockEnd: 1rem, $inline: auto);
}
```

This will return the resulting CSS.

```css
.container {
    margin-block-end: 1rem;
    margin-inline-start: auto;
    margin-inline-end: auto;

    @supports not (margin-block-end: 1rem) {
        margin-bottom: 1rem;
        margin-left: auto;
        margin-right: auto;
    }
}
```

As browser support for logical CSS increases, the `@supports` query will be less and less necessary.
Eventually, leaving only the modern CSS required to create the most flexible and inclusive UIs.

## Packages

| Package           | Version      |
| ----------------- | ------------ |
| LESS              | Coming soon  |
| SCSS              | Coming soon  |
| Styled Components | Coming soon  |
| Stylus            | Coming soon  |
| Tailwind          | Coming later |
