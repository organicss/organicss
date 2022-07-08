import { DefaultValue, GlobalValue } from '../../types/global';

export type Overflow = GlobalValue | 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible';
export type Resize = GlobalValue | 'block' | 'both' | 'horizontal' | 'inline' | 'none' | 'vertical';
export type OverscrollBehavior = GlobalValue | 'auto' | 'contain' | 'none';
export type TextAlign =
    | GlobalValue
    | 'center'
    | 'end'
    | 'justify'
    | 'justify-all'
    | 'left'
    | 'match-parent'
    | 'right'
    | 'start'
    | string;
export type Clear =
    | GlobalValue
    | 'both'
    | 'inline-end'
    | 'inline-start'
    | 'left'
    | 'none'
    | 'right';
export type CaptionSide =
    | GlobalValue
    | 'block-end'
    | 'block-start'
    | 'bottom'
    | 'inline-end'
    | 'inline-start'
    | 'top';

export type LayoutProps = {
    blockSize?: DefaultValue;
    captionSide?: CaptionSide;
    clear?: Clear;
    inlineSize?: DefaultValue;
    maxBlockSize?: DefaultValue;
    maxInlineSize?: DefaultValue;
    minBlockSize?: DefaultValue;
    minInlineSize?: DefaultValue;
    overflow?: string;
    overflowBlock?: Overflow;
    overflowInline?: Overflow;
    overscrollBehavior?: OverscrollBehavior;
    overscrollBehaviorBlock?: OverscrollBehavior;
    overscrollBehaviorInline?: OverscrollBehavior;
    resize?: Resize;
    textAlign?: TextAlign;
};
