<p align="center">
  <img src="/assets/organicss-logo-full.png" alt="OrganiCSS standard logo with icon and name" width="500" />
</p>

# Styled Components

[![npm version](https://badge.fury.io/js/@organicss%2Fstyled-components.svg)](https://badge.fury.io/js/@organicss%2Fstyled-components)

The OrganiCSS Styled Components package provides a collection of TypeScript-ready functions to
support writing progressively-enhanced logical CSS with
[Styled Components](https://styled-components.com/). The mixins will generate logical CSS properties
first, with fallbacks to catch when not supported.

## :robot: Installation

To use OrganiCSS Styled Components, first install the package into a Styled Components project.

```bash
npm i @organicss/styled-components
```

```bash
yarn add @organicss/styled-components
```

## :rocket: Getting Started

Get started using OrganiCSS Styled Components by importing a mixin and calling it from inside of a
Styled Components style block.

```jsx
import { Margin, Padding } from '@organicss/styled-components';

const Container = styled.section`
    ${Margin({ inline: 'auto' })};
    ${Padding({ block: 'var(--custom-property-value)' })};
    // ...any addition styles
`;
```

### Using with CSS Custom Properties

```jsx
import { Margin } from '@organicss/styled-components';

const Container = styled.section`
    ${Margin({ block: 'var(--space-lg)', inline: 'calc(var(--space-lg) * 2)' })};
`;
```

### Using with Styled Components Props

```jsx
import { Margin } from '@organicss/styled-components';

return <Container $margin="var(--space-lg)">...</Container>;

const Container = styled.section`
    ${({ $margin }) => Margin({ all: $margin })};
`;
```

## :book: Documentation

### Border

```jsx
import { Border } from '@organicss/styled-components';
```

| Prop             | Type                                                                                 | CSS Property (_Fallback_)                                 |
| ---------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| border           | string \| 0                                                                          | border                                                    |
| borderColor      | string                                                                               | border-color                                              |
| borderStyle      | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-style                                              |
| borderWidth      | string \| 0                                                                          | border-width                                              |
| block            | string \| 0                                                                          | border-block-start/end (_border-top/bottom_)              |
| blockColor       | string                                                                               | border-block-start/end-color (_border-top/bottom-color_)  |
| blockStyle       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-block-start/end-style (_border-top/bottom-style_)  |
| blockWidth       | string \| 0                                                                          | border-block-start/end-width (_border-top/bottom-width_)  |
| blockEnd         | string \| 0                                                                          | border-block-end (_border-bottom_)                        |
| blockEndColor    | string                                                                               | border-block-end-color (_border-bottom-color_)            |
| blockEndStyle    | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-block-end-style (_border-bottom-style_)            |
| blockEndWidth    | string \| 0                                                                          | border-block-end-width (_border-bottom-width_)            |
| blockStart       | string \| 0                                                                          | border-block-start (_border-top_)                         |
| blockStartColor  | string                                                                               | border-block-start-color (_border-top-color_)             |
| blockStartStyle  | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-block-start-style (_border-top-style_)             |
| blockStartWidth  | string \| 0                                                                          | border-block-start-width (_border-top-width_)             |
| inline           | string \| 0                                                                          | border-inline-start/end (_border-left/right_)             |
| inlineColor      | string                                                                               | border-inline-start/end-color (_border-left/right-color_) |
| inlineStyle      | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-inline-start/end-style (_border-left/right-style_) |
| inlineWidth      | string \| 0                                                                          | border-inline-start/end-width (_border-left/right-width_) |
| inlineEnd        | string \| 0                                                                          | border-inline-end (_border-right_)                        |
| inlineEndColor   | string                                                                               | border-inline-end-color (_border-right-color_)            |
| inlineEndStyle   | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-inline-end-style (_border-right-style_)            |
| inlineEndWidth   | string \| 0                                                                          | border-inline-end-width (_border-right-width_)            |
| inlineStart      | string \| 0                                                                          | border-inline-start (_border-left_)                       |
| inlineStartColor | string                                                                               | border-inline-start-color (_border-left-color_)           |
| inlineStartStyle | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax) | border-inline-start-style (_border-left-style_)           |
| inlineStartWidth | string \| 0                                                                          | border-inline-start-width (_border-left-width_)           |

### Border Radius

```jsx
import { BorderRadius } from '@organicss/styled-components';
```

| Prop        | Type        | CSS Property (_Fallback_)                             |
| ----------- | ----------- | ----------------------------------------------------- |
| bottomLeft  | string \| 0 | border-end-start-radius (_border-bottom-left-radius_) |
| bottomRight | string \| 0 | border-end-end-radius (_border-bottom-right-radius_)  |
| radius      | string \| 0 | border-radius                                         |
| topLeft     | string \| 0 | border-start-start-radius (_border-top-left-radius_)  |
| topRight    | string \| 0 | border-start-end-radius (_border-top-right-radius_)   |

### Layout

```jsx
import { Layout } from '@organicss/styled-components';
```

| Prop                     | Type                                                                                        | CSS Property (_Fallback_)                            |
| ------------------------ | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| blockSize                | string \| 0                                                                                 | block-size (_height_)                                |
| captionSide              | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side#syntax)        | caption-side                                         |
| clear                    | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/clear#syntax)               | clear                                                |
| maxBlockSize             | string \| 0                                                                                 | max-block-size (_max-height_)                        |
| minBlockSize             | string \| 0                                                                                 | min-block-size (_min-height_)                        |
| inlineSize               | string \| 0                                                                                 | inline-size (_width_)                                |
| maxInlineSize            | string \| 0                                                                                 | max-inline-size (_max-width_)                        |
| minInlineSize            | string \| 0                                                                                 | min-inline-size (_min-width_)                        |
| overflow                 | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#syntax)            | overflow                                             |
| overflowBlock            | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#syntax)            | overflow-block (_overflow-x_)                        |
| overflowInline           | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#syntax)            | overflow-inline (_overflow-y_)                       |
| overscrollBehavior       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#syntax) | overscroll-behavior                                  |
| overscrollBehaviorBlock  | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#syntax) | overscroll-behavior-block (_overscroll-behavior-x_)  |
| overscrollBehaviorInline | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior#syntax) | overscroll-behavior-inline (_overscroll-behavior-y_) |
| resize                   | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/resize#syntax)              | resize                                               |
| textAlign                | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align#syntax)          | text-align                                           |

### Margin

```jsx
import { Margin } from '@organicss/styled-components';
```

| Prop              | Type                                                                                  | CSS Property (_Fallback_)                                   |
| ----------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| block             | string \| 0                                                                           | margin-block-start/end (_margin-bottom/top_)                |
| blockEnd          | string \| 0                                                                           | margin-block-end (_margin-bottom_)                          |
| blockStart        | string \| 0                                                                           | margin-block-start (_margin-top_)                           |
| inline            | string \| 0                                                                           | margin-inline-start/end (_margin-left/right_)               |
| inlineEnd         | string \| 0                                                                           | margin-inline-end (_margin-right_)                          |
| inlineStart       | string \| 0                                                                           | margin-inline-start (_margin-left_)                         |
| margin            | string \| 0                                                                           | margin                                                      |
| scroll            | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin                                               |
| scrollBlock       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-block-start/end (_scroll-margin-top/bottom_)  |
| scrollBlockEnd    | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-block-end (_scroll-margin-bottom_)            |
| scrollBlockStart  | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-block-start (_scroll-margin-top_)             |
| scrollInline      | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-inline-start/end (_scroll-margin-left/right_) |
| scrollInlineEnd   | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-inline-end (_scroll-margin-right_)            |
| scrollInlineStart | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin#syntax) | scroll-margin-inline-start (_scroll-margin-left_)           |

### Padding

```jsx
import { Padding } from '@organicss/styled-components';
```

| Prop              | Type                                                                                   | CSS Property (_Fallback_)                                     |
| ----------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| block             | string \| 0                                                                            | padding-block-start/end (_padding-top/bottom_)                |
| blockEnd          | string \| 0                                                                            | padding-block-end (_padding-bottom_)                          |
| blockStart        | string \| 0                                                                            | padding-block-start (_padding-top_)                           |
| inline            | string \| 0                                                                            | padding-inline-start/end (_padding-left/right_)               |
| inlineEnd         | string \| 0                                                                            | padding-inline-end (_padding-right_)                          |
| inlineStart       | string \| 0                                                                            | padding-inline-start (_padding-left_)                         |
| padding           | string \| 0                                                                            | padding                                                       |
| scroll            | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding                                                |
| scrollBlock       | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-block-start/end (_scroll-padding-top/bottom_)  |
| scrollBlockEnd    | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-block-end (_scroll-padding-bottom_)            |
| scrollBlockStart  | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-block-start (_scroll-padding-top_)             |
| scrollInline      | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-inline-start/end (_scroll-padding-left/right_) |
| scrollInlineEnd   | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-inline-end (_scroll-padding-right_)            |
| scrollInlineStart | [See MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding#syntax) | scroll-padding-inline-start (_scroll-padding-left_)           |

### Position

```jsx
import { Position } from '@organicss/styled-components';
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
