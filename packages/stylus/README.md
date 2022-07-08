<p align="center">
  <img src="organicss-logo-full.png" alt="OrganiCSS standard logo with icon and name" width="500" />
</p>

# Stylus

[![npm version](https://badge.fury.io/js/@organicss%2Fstylus.svg)](https://badge.fury.io/js/@organicss%2Fstylus)

The OrganiCSS SCSS package provides a collection of
[Sass (Syntactically Awesome Style Sheets)](https://sass-lang.com/) mixins to support writing
progressively-enhanced logical CSS with. The mixins will generate logical CSS properties first, with
fallbacks to catch when not supported.

> As of version 1.0.0, OrganiCSS supports all logical properties documented on
> [MDN: CSS Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties).

## :robot: Installation

To use OrganiCSS Stylus, first install the package into a Stylus project.

```bash
npm i @organicss/stylus
```

```bash
yarn add @organicss/stylus
```

## :rocket: Getting Started

To use the different OrganiCSS Stylus mixins, first import them into an existing `.styl` file.

```styl
// Import all mixins at once

@import '/node_modules/@organicss/stylus'

// Or import a specific mixin at a time.

@import '/node_modules/@organicss/stylus/margin'
```

### Using with CSS Custom Properties

```styl
@import '/node_modules/@organicss/stylus/margin'

.container
    margin()
```

### Using with Stylus Variables

```styl
@import '/node_modules/@organicss/stylus/margin'

space = var(--space-large)

.container
    margin()
```

## :book: Documentation

### Border

```styl
@import "/node_modules/@organicss/stylus/border";

.container {
  border(...);
}
```

| Prop             | Type                                                                                 | CSS Property (_Fallback_)                                 |
| ---------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| border           | -                                                                                    | border                                                    |
| borderColor      | -                                                                                    | border-color                                              |
| borderStyle      | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-style                                              |
| borderWidth      | -                                                                                    | border-width                                              |
| block            | -                                                                                    | border-block-start/end (_border-top/bottom_)              |
| blockColor       | -                                                                                    | border-block-start/end-color (_border-top/bottom-color_)  |
| blockStyle       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-block-start/end-style (_border-top/bottom-style_)  |
| blockWidth       | -                                                                                    | border-block-start/end-width (_border-top/bottom-width_)  |
| blockEnd         | -                                                                                    | border-block-end (_border-bottom_)                        |
| blockEndColor    | -                                                                                    | border-block-end-color (_border-bottom-color_)            |
| blockEndStyle    | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-block-end-style (_border-bottom-style_)            |
| blockEndWidth    | -                                                                                    | border-block-end-width (_border-bottom-width_)            |
| blockStart       | -                                                                                    | border-block-start (_border-top_)                         |
| blockStartColor  | -                                                                                    | border-block-start-color (_border-top-color_)             |
| blockStartStyle  | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-block-start-style (_border-top-style_)             |
| blockStartWidth  | -                                                                                    | border-block-start-width (_border-top-width_)             |
| inline           | -                                                                                    | border-inline-start/end (_border-left/right_)             |
| inlineColor      | -                                                                                    | border-inline-start/end-color (_border-left/right-color_) |
| inlineStyle      | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-inline-start/end-style (_border-left/right-style_) |
| inlineWidth      | -                                                                                    | border-inline-start/end-width (_border-left/right-width_) |
| inlineEnd        | -                                                                                    | border-inline-end (_border-right_)                        |
| inlineEndColor   | -                                                                                    | border-inline-end-color (_border-right-color_)            |
| inlineEndStyle   | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-inline-end-style (_border-right-style_)            |
| inlineEndWidth   | -                                                                                    | border-inline-end-width (_border-right-width_)            |
| inlineStart      | -                                                                                    | border-inline-start (_border-left_)                       |
| inlineStartColor | -                                                                                    | border-inline-start-color (_border-left-color_)           |
| inlineStartStyle | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-inline-start-style (_border-left-style_)           |
| inlineStartWidth | -                                                                                    | border-inline-start-width (_border-left-width_)           |

### Border Radius

```styl
@import "/node_modules/@organicss/stylus/borderRadius";

.container {
  border-radius(...);
}
```

| Prop        | Type | CSS Property (_Fallback_)                             |
| ----------- | ---- | ----------------------------------------------------- |
| bottomLeft  | -    | border-end-start-radius (_border-bottom-left-radius_) |
| bottomRight | -    | border-end-end-radius (_border-bottom-right-radius_)  |
| radius      | -    | border-radius                                         |
| topLeft     | -    | border-start-start-radius (_border-top-left-radius_)  |
| topRight    | -    | border-start-end-radius (_border-top-right-radius_)   |

### Layout

```styl
@import "/node_modules/@organicss/stylus/layout";

.container {
  layout(...);
}
```

| Prop                     | Type                                                                                        | CSS Property (_Fallback_)                            |
| ------------------------ | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| blockSize                | -                                                                                           | block-size (_height_)                                |
| captionSide              | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side#syntax)        | caption-side                                         |
| clear                    | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/clear#syntax)               | clear                                                |
| maxBlockSize             | -                                                                                           | max-block-size (_max-height_)                        |
| minBlockSize             | -                                                                                           | min-block-size (_min-height_)                        |
| inlineSize               | -                                                                                           | inline-size (_width_)                                |
| maxInlineSize            | -                                                                                           | max-inline-size (_max-width_)                        |
| minInlineSize            | -                                                                                           | min-inline-size (_min-width_)                        |
| overflow                 | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#syntax)            | overflow                                             |
| overflowBlock            | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#syntax)            | overflow-block (_overflow-x_)                        |
| overflowInline           | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#syntax)            | overflow-inline (_overflow-y_)                       |
| overscrollBehavior       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#syntax) | overscroll-behavior                                  |
| overscrollBehaviorBlock  | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#syntax) | overscroll-behavior-block (_overscroll-behavior-x_)  |
| overscrollBehaviorInline | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#syntax) | overscroll-behavior-inline (_overscroll-behavior-y_) |
| resize                   | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/resize#syntax)              | resize                                               |
| textAlign                | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align#syntax)          | text-align                                           |

### Margin

```styl
@import "/node_modules/@organicss/stylus/margin";

.container {
  margin(...);
}
```

| Prop              | Type                                                                                  | CSS Property (_Fallback_)                                   |
| ----------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| block             | -                                                                                     | margin-block-start/end (_margin-bottom/top_)                |
| blockEnd          | -                                                                                     | margin-block-end (_margin-bottom_)                          |
| blockStart        | -                                                                                     | margin-block-start (_margin-top_)                           |
| inline            | -                                                                                     | margin-inline-start/end (_margin-left/right_)               |
| inlineEnd         | -                                                                                     | margin-inline-end (_margin-right_)                          |
| inlineStart       | -                                                                                     | margin-inline-start (_margin-left_)                         |
| margin            | -                                                                                     | margin                                                      |
| scroll            | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin                                               |
| scrollBlock       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-block-start/end (_scroll-margin-top/bottom_)  |
| scrollBlockEnd    | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-block-end (_scroll-margin-bottom_)            |
| scrollBlockStart  | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-block-start (_scroll-margin-top_)             |
| scrollInline      | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-inline-start/end (_scroll-margin-left/right_) |
| scrollInlineEnd   | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-inline-end (_scroll-margin-right_)            |
| scrollInlineStart | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-inline-start (_scroll-margin-left_)           |

### Padding

```styl
@import "/node_modules/@organicss/stylus/padding";

.container {
  padding(...);
}
```

| Prop              | Type                                                                                   | CSS Property (_Fallback_)                                     |
| ----------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| block             | -                                                                                      | padding-block-start/end (_padding-top/bottom_)                |
| blockEnd          | -                                                                                      | padding-block-end (_padding-bottom_)                          |
| blockStart        | -                                                                                      | padding-block-start (_padding-top_)                           |
| inline            | -                                                                                      | padding-inline-start/end (_padding-left/right_)               |
| inlineEnd         | -                                                                                      | padding-inline-end (_padding-right_)                          |
| inlineStart       | -                                                                                      | padding-inline-start (_padding-left_)                         |
| padding           | -                                                                                      | padding                                                       |
| scroll            | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding                                                |
| scrollBlock       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-block-start/end (_scroll-padding-top/bottom_)  |
| scrollBlockEnd    | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-block-end (_scroll-padding-bottom_)            |
| scrollBlockStart  | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-block-start (_scroll-padding-top_)             |
| scrollInline      | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-inline-start/end (_scroll-padding-left/right_) |
| scrollInlineEnd   | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-inline-end (_scroll-padding-right_)            |
| scrollInlineStart | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-inline-start (_scroll-padding-left_)           |

### Position

```styl
@import "/node_modules/@organicss/stylus/position";

.container {
  position(...);
}
```

| Prop        | Type                                                                                 | CSS Property (_Fallback_)       |
| ----------- | ------------------------------------------------------------------------------------ | ------------------------------- |
| block       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block#syntax)  | inset-block (_top/bottom_)      |
| blockEnd    | -                                                                                    | inset-block-end (_bottom_)      |
| blockStart  | -                                                                                    | inset-block-start (_top_)       |
| float       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/float#syntax)        | float                           |
| inline      | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline#syntax) | inset-inline (_left/right_)     |
| inlineEnd   | -                                                                                    | inset-inline-end (_right_)      |
| inlineStart | -                                                                                    | inset-inline-start (_left_)     |
| inset       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inset#syntax)        | inset (_top/right/bottom/left_) |
