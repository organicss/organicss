import { DefaultValue, GlobalValue } from '../../types/global';

export type ScrollPadding = GlobalValue | string;

export type PaddingProps = {
    block?: DefaultValue;
    blockEnd?: DefaultValue;
    blockStart?: DefaultValue;
    inline?: DefaultValue;
    inlineEnd?: DefaultValue;
    inlineStart?: DefaultValue;
    padding?: DefaultValue;
    scroll?: ScrollPadding;
    scrollBlock?: ScrollPadding;
    scrollBlockEnd?: ScrollPadding;
    scrollBlockStart?: ScrollPadding;
    scrollInline?: ScrollPadding;
    scrollInlineEnd?: ScrollPadding;
    scrollInlineStart?: ScrollPadding;
};

export type FormattedPaddingProps = {
    b?: DefaultValue;
    l?: DefaultValue;
    r?: DefaultValue;
    t?: DefaultValue;
};
