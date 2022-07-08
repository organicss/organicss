import { css, FlattenSimpleInterpolation } from 'styled-components';
import { BorderProps, FormattedBorderProps } from './Border.types';

function Border(props: BorderProps): FlattenSimpleInterpolation {
    /* Split the axis properties to map specific values for fallbacks */
    const blockColorArr = props.blockColor?.split(' ');
    const blockStyleArr = props.blockStyle?.split(' ');
    const blockWidthArr = props.blockWidth?.toString().split(' ');
    const inlineColorArr = props.inlineColor?.split(' ');
    const inlineStyleArr = props.inlineStyle?.split(' ');
    const inlineWidthArr = props.inlineWidth?.toString().split(' ');

    /*
      Map and prioritize possible values.
      1. Side-specific values have the highest priority
      2. Dual-value axis properties have next priority
      3. Axis general values are used last
    */
    const colorFallback: FormattedBorderProps = {
        b: props.blockEndColor || blockColorArr?.[1] || props.blockColor,
        l: props.inlineStartColor || inlineColorArr?.[0],
        r: props.inlineEndColor || inlineColorArr?.[1] || props.inlineColor,
        t: props.blockStartColor || blockColorArr?.[0],
    };
    const styleFallback: FormattedBorderProps = {
        b: props.blockEndStyle || blockStyleArr?.[1] || props.blockStyle,
        l: props.inlineStartStyle || inlineStyleArr?.[0],
        r: props.inlineEndStyle || inlineStyleArr?.[1] || props.inlineStyle,
        t: props.blockStartStyle || blockStyleArr?.[0],
    };
    const widthFallback: FormattedBorderProps = {
        b: props.blockEndWidth || blockWidthArr?.[1] || props.blockWidth,
        l: props.inlineStartWidth || inlineWidthArr?.[0],
        r: props.inlineEndWidth || inlineWidthArr?.[1] || props.inlineWidth,
        t: props.blockStartWidth || blockWidthArr?.[0],
    };

    return css`
        border: ${props.border};
        border-color: ${props.borderColor};
        border-style: ${props.borderStyle};
        border-width: ${props.borderWidth};

        border-block: ${props.block};
        border-block-color: ${props.blockColor};
        border-block-style: ${props.blockStyle};
        border-block-width: ${props.blockWidth};

        border-inline: ${props.inline};
        border-inline-color: ${props.inlineColor};
        border-inline-style: ${props.inlineStyle};
        border-inline-width: ${props.inlineWidth};

        border-block-end: ${props.blockEnd};
        border-block-end-color: ${props.blockEndColor};
        border-block-end-style: ${props.blockEndStyle};
        border-block-end-width: ${props.blockEndWidth};

        border-block-start: ${props.blockStart};
        border-block-start-color: ${props.blockStartColor};
        border-block-start-style: ${props.blockStartStyle};
        border-block-start-width: ${props.blockStartWidth};

        border-inline-end: ${props.inlineEnd};
        border-inline-end-color: ${props.inlineEndColor};
        border-inline-end-style: ${props.inlineEndStyle};
        border-inline-end-width: ${props.inlineEndWidth};

        border-inline-start: ${props.inlineStart};
        border-inline-start-color: ${props.inlineStartColor};
        border-inline-start-style: ${props.inlineStartStyle};
        border-inline-start-width: ${props.inlineStartWidth};

        @supports not (border-block-end: 1rem solid red) {
            border-bottom: ${props.blockEnd || props.block};
            border-bottom-color: ${colorFallback.b};
            border-bottom-style: ${styleFallback.b};
            border-bottom-width: ${widthFallback.b};

            border-left: ${props.inlineStart || props.inline};
            border-left-color: ${colorFallback.l};
            border-left-style: ${styleFallback.l};
            border-left-width: ${widthFallback.l};

            border-right: ${props.inlineEnd || props.inline};
            border-right-color: ${colorFallback.r};
            border-right-style: ${styleFallback.r};
            border-right-width: ${widthFallback.r};

            border-top: ${props.blockStart || props.block};
            border-top-color: ${colorFallback.t};
            border-top-style: ${styleFallback.t};
            border-top-width: ${widthFallback.t};
        }
    `;
}

export { Border };
