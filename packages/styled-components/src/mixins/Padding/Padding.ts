import { css, FlattenSimpleInterpolation } from 'styled-components';
import { PaddingProps, FormattedPaddingProps } from './Padding.types';

function Padding(props: PaddingProps): FlattenSimpleInterpolation {
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
    const paddingFallback: FormattedPaddingProps = {
        b: props.blockEnd || blockArr?.[1] || props.block,
        l: props.inlineStart || inlineArr?.[0],
        r: props.inlineEnd || inlineArr?.[1] || props.inline,
        t: props.blockStart || blockArr?.[0],
    };
    const scrollFallback: FormattedPaddingProps = {
        b: props.scrollBlockEnd || scrollBlockArr?.[1] || props.scrollBlock,
        l: props.scrollInlineStart || scrollInlineArr?.[0],
        r: props.scrollInlineEnd || scrollInlineArr?.[1] || props.scrollInline,
        t: props.scrollBlockStart || scrollBlockArr?.[0],
    };

    return css`
        padding: ${props.padding};
        padding-block: ${props.block};
        padding-inline: ${props.inline};

        /* If an axis value exists, don't duplicate the style */
        padding-block-end: ${props.blockEnd};
        padding-block-start: ${props.blockStart};
        padding-inline-end: ${props.inlineEnd};
        padding-inline-start: ${props.inlineStart};

        scroll-padding: ${props.scroll};
        scroll-padding-block: ${props.scrollBlock};
        scroll-padding-inline: ${props.scrollInline};

        scroll-padding-block-end: ${props.scrollBlockEnd};
        scroll-padding-block-start: ${props.scrollBlockStart};
        scroll-padding-inline-end: ${props.scrollInlineEnd};
        scroll-padding-inline-start: ${props.scrollInlineStart};

        @supports not (padding-block-end: 1rem) {
            padding-bottom: ${paddingFallback.b};
            padding-left: ${paddingFallback.l};
            padding-right: ${paddingFallback.r};
            padding-top: ${paddingFallback.t};
        }

        @supports not (scroll-padding-block: 1rem) {
            scroll-padding-bottom: ${scrollFallback.b};
            scroll-padding-left: ${scrollFallback.l};
            scroll-padding-right: ${scrollFallback.r};
            scroll-padding-top: ${scrollFallback.t};
        }
    `;
}

export { Padding };
