import { DefaultValue, GlobalValue } from '../../types/global';

export type ScrollMargin = GlobalValue | string;

export type MarginProps = {
    block?: DefaultValue;
    blockEnd?: DefaultValue;
    blockStart?: DefaultValue;
    inline?: DefaultValue;
    inlineEnd?: DefaultValue;
    inlineStart?: DefaultValue;
    margin?: DefaultValue;
    scroll?: ScrollMargin;
    scrollBlock?: ScrollMargin;
    scrollBlockEnd?: ScrollMargin;
    scrollBlockStart?: ScrollMargin;
    scrollInline?: ScrollMargin;
    scrollInlineEnd?: ScrollMargin;
    scrollInlineStart?: ScrollMargin;
};

export type FormattedMarginProps = {
    a?: DefaultValue;
    b?: DefaultValue;
    l?: DefaultValue;
    r?: DefaultValue;
    t?: DefaultValue;
};
