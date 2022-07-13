import { GlobalValue, DefaultValue } from '../../types/global';

export type Float = GlobalValue | 'inline-end' | 'inline-start' | 'left' | 'none' | 'right';

export type PositionProps = {
    block?: DefaultValue;
    blockEnd?: DefaultValue;
    blockStart?: DefaultValue;
    float?: Float;
    inline?: DefaultValue;
    inlineEnd?: DefaultValue;
    inlineStart?: DefaultValue;
    inset?: GlobalValue | 'auto' | string | 0;
};
