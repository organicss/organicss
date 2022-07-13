import { css, CSSInterpolation } from '@emotion/css';
import { PositionProps } from './Position.types';
import { logicalMap } from '../../utils/maps';

function Position(props: PositionProps): CSSInterpolation {
    const insetArr = props.inset?.toString().split(' ') || [];
    const blockArr = props.block?.toString().split(' ') || [];
    const inlineArr = props.inline?.toString().split(' ') || [];

    const insetLength = insetArr.length;

    return css`
        float: ${props.float === 'left' || props.float === 'right'
            ? logicalMap[props.float]
            : props.float};

        inset: ${props.inset};

        inset-block: ${props.block};
        inset-inline: ${props.inline};

        inset-block-end: ${props.blockEnd};
        inset-block-start: ${props.blockStart};
        inset-inline-end: ${props.inlineEnd};
        inset-inline-start: ${props.inlineStart};

        @supports not (inset: 1rem) {
            ${props.inset &&
            insetLength < 2 &&
            css`
                bottom: ${props.inset};
                left: ${props.inset};
                right: ${props.inset};
                top: ${props.inset};
            `};
            ${insetLength === 2 &&
            css`
                bottom: ${insetArr[0]};
                left: ${insetArr[1]};
                right: ${insetArr[1]};
                top: ${insetArr[0]};
            `};
            ${insetLength === 3 &&
            css`
                bottom: ${insetArr[2]};
                left: ${insetArr[1]};
                right: ${insetArr[1]};
                top: ${insetArr[0]};
            `};
            ${insetLength >= 4 &&
            css`
                bottom: ${insetArr[2]};
                left: ${insetArr[3]};
                right: ${insetArr[1]};
                top: ${insetArr[0]};
            `};
        }

        @supports not (inset-block-end: 1rem) {
            bottom: ${props.blockEnd || blockArr[1] || blockArr[0]};
            left: ${props.inlineStart || inlineArr[0]};
            right: ${props.inlineEnd || inlineArr[1] || inlineArr[0]};
            top: ${props.blockStart || blockArr[0]};
        }

        ${props.float &&
        logicalMap.hasOwnProperty(props.float) &&
        css`
            @supports not (float: inline-end) {
                float: ${props.float === 'inline-start' || props.float === 'inline-end'
                    ? logicalMap[props.float]
                    : props.float};
            }
        `};
    `;
}

export { Position };
