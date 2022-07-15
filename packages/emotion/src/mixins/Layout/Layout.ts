import { css, CSSInterpolation } from '@emotion/css';
import { LayoutProps } from './Layout.types';
import { logicalMap, alignmentMap } from '../../utils/maps';

function Layout(props: LayoutProps): CSSInterpolation {
    return css`
        caption-side: ${props.captionSide === 'top' || props.captionSide === 'bottom'
            ? logicalMap[props.captionSide]
            : props.captionSide};
        clear: ${props.clear === 'left' || props.clear === 'right'
            ? logicalMap[props.clear]
            : props.clear};
        resize: ${props.resize === 'horizontal' || props.resize === 'vertical'
            ? logicalMap[props.resize]
            : props.resize};
        text-align: ${props.textAlign === 'left' || props.textAlign === 'right'
            ? alignmentMap[props.textAlign]
            : props.textAlign};
        text-align-last: ${props.textAlignLast === 'left' || props.textAlignLast === 'right'
            ? alignmentMap[props.textAlignLast]
            : props.textAlignLast};

        block-size: ${props.blockSize};
        max-block-size: ${props.maxBlockSize};
        min-block-size: ${props.minBlockSize};
        inline-size: ${props.inlineSize};
        max-inline-size: ${props.maxInlineSize};
        min-inline-size: ${props.minInlineSize};
        overflow: ${props.overflow};
        overflow-block: ${props.overflowBlock};
        overflow-inline: ${props.overflowInline};
        overscroll-behavior: ${props.overscrollBehavior};
        overscroll-behavior-block: ${props.overscrollBehaviorBlock};
        overscroll-behavior-inline: ${props.overscrollBehaviorInline};

        ${props.captionSide &&
        logicalMap.hasOwnProperty(props.captionSide) &&
        css`
            @supports not (caption-side: block-end) {
                caption-side: ${props.captionSide === 'block-start' ||
                props.captionSide === 'block-end'
                    ? logicalMap[props.captionSide]
                    : props.captionSide};
            }
        `};

        ${props.clear &&
        logicalMap.hasOwnProperty(props.clear) &&
        css`
            @supports not (clear: inline-end) {
                clear: ${props.clear === 'inline-start' || props.clear === 'inline-end'
                    ? logicalMap[props.clear]
                    : props.clear};
            }
        `};

        ${props.resize &&
        logicalMap.hasOwnProperty(props.resize) &&
        css`
            @supports not (resize: block) {
                resize: ${props.resize === 'block' || props.resize === 'inline'
                    ? logicalMap[props.resize]
                    : props.resize};
            }
        `};

        ${props.textAlign &&
        alignmentMap.hasOwnProperty(props.textAlign) &&
        css`
            @supports not (text-align: end) {
                text-align: ${props.textAlign === 'start' || props.textAlign === 'end'
                    ? alignmentMap[props.textAlign]
                    : props.textAlign};
            }
        `};

        ${props.textAlignLast &&
        alignmentMap.hasOwnProperty(props.textAlignLast) &&
        css`
            @supports not (text-align-last: end) {
                text-align-last: ${props.textAlignLast === 'start' || props.textAlignLast === 'end'
                    ? alignmentMap[props.textAlignLast]
                    : props.textAlignLast};
            }
        `};

        @supports not (block-size: 1rem) {
            height: ${props.blockSize};
            max-height: ${props.maxBlockSize};
            min-height: ${props.minBlockSize};
        }

        @supports not (inline-size: 1rem) {
            max-width: ${props.maxInlineSize};
            min-width: ${props.minInlineSize};
            width: ${props.inlineSize};
        }

        @supports not (overflow-block: auto) {
            overflow-x: ${props.overflowInline};
            overflow-y: ${props.overflowBlock};
        }

        @supports not (overscroll-behavior-block: auto) {
            overscroll-behavior-x: ${props.overscrollBehaviorInline};
            overscroll-behavior-y: ${props.overscrollBehaviorBlock};
        }
    `;
}

export { Layout };
