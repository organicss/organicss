import { css, CSSInterpolation } from '@emotion/css';
import { MarginProps, FormattedMarginProps } from './Margin.types';

function Margin(props: MarginProps): CSSInterpolation {
    // Split the axis properties to map specific values for fallbacks
    const blockArr = props.block?.toString().split(' ') || [];
    const inlineArr = props.inline?.toString().split(' ') || [];
    const scrollBlockArr = props.scrollBlock?.toString().split(' ') || [];
    const scrollInlineArr = props.scrollInline?.toString().split(' ') || [];

    /*
      Map and prioritize possible values.
      1. Side-specific values have the highest priority
      2. Dual-value axis properties have next priority
      3. Axis general values are used last
    */
    const marginFallback: FormattedMarginProps = {
        b: props.blockEnd || blockArr?.[1] || props.block,
        l: props.inlineStart || inlineArr?.[0],
        r: props.inlineEnd || inlineArr?.[1] || props.inline,
        t: props.blockStart || blockArr?.[0],
    };
    const scrollFallback: FormattedMarginProps = {
        b: props.scrollBlockEnd || scrollBlockArr?.[1] || props.scrollBlock,
        l: props.scrollInlineStart || scrollInlineArr?.[0],
        r: props.scrollInlineEnd || scrollInlineArr?.[1] || props.scrollInline,
        t: props.scrollBlockStart || scrollBlockArr?.[0],
    };

    return css`
        margin: ${props.margin};
        margin-block: ${props.block};
        margin-inline: ${props.inline};

        /* If an axis value exists, don't duplicate the style */
        margin-block-end: ${props.blockEnd};
        margin-block-start: ${props.blockStart};
        margin-inline-end: ${props.inlineEnd};
        margin-inline-start: ${props.inlineStart};

        scroll-margin: ${props.scroll};
        scroll-margin-block: ${props.scrollBlock};
        scroll-margin-inline: ${props.scrollInline};

        scroll-margin-block-end: ${props.scrollBlockEnd};
        scroll-margin-block-start: ${props.scrollBlockStart};
        scroll-margin-inline-end: ${props.scrollInlineEnd};
        scroll-margin-inline-start: ${props.scrollInlineStart};

        @supports not (margin-block-end: 1rem) {
            margin-bottom: ${marginFallback.b};
            margin-left: ${marginFallback.l};
            margin-right: ${marginFallback.r};
            margin-top: ${marginFallback.t};
        }

        @supports not (scroll-margin-block: 1rem) {
            scroll-margin-bottom: ${scrollFallback.b};
            scroll-margin-left: ${scrollFallback.l};
            scroll-margin-right: ${scrollFallback.r};
            scroll-margin-top: ${scrollFallback.t};
        }
    `;
}

export { Margin };
