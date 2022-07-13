import { css, CSSInterpolation } from '@emotion/css';
import { BorderRadiusProps } from './BorderRadius.types';

function BorderRadius(props: BorderRadiusProps): CSSInterpolation {
    return css`
        /* General value that apply to more than one side */
        border-radius: ${props.radius};

        /* Side specific values to overwrite any general values */
        border-end-end-radius: ${props.bottomRight};
        border-end-start-radius: ${props.bottomLeft};
        border-start-end-radius: ${props.topRight};
        border-start-start-radius: ${props.topLeft};

        @supports not (border-end-end-radius: 1rem) {
            border-bottom-left-radius: ${props.bottomLeft};
            border-bottom-right-radius: ${props.bottomRight};
            border-top-left-radius: ${props.topLeft};
            border-top-right-radius: ${props.topRight};
        }
    `;
}

export { BorderRadius };
