import { DefaultValue, GlobalValue } from '../../types/global';

export type BorderStyle =
    | GlobalValue
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'hidden'
    | 'inset'
    | 'none'
    | 'outset'
    | 'ridge'
    | 'solid';

export type BorderProps = {
    border?: DefaultValue;
    borderColor?: string;
    borderStyle?: BorderStyle;
    borderWidth?: DefaultValue;

    block?: DefaultValue;
    blockColor?: string;
    blockStyle?: BorderStyle;
    blockWidth?: DefaultValue;

    blockEnd?: DefaultValue;
    blockEndColor?: string;
    blockEndStyle?: BorderStyle;
    blockEndWidth?: DefaultValue;

    blockStart?: DefaultValue;
    blockStartColor?: string;
    blockStartStyle?: BorderStyle;
    blockStartWidth?: DefaultValue;

    inline?: DefaultValue;
    inlineColor?: string;
    inlineStyle?: BorderStyle;
    inlineWidth?: DefaultValue;

    inlineEnd?: DefaultValue;
    inlineEndColor?: string;
    inlineEndStyle?: BorderStyle;
    inlineEndWidth?: DefaultValue;

    inlineStart?: DefaultValue;
    inlineStartColor?: string;
    inlineStartStyle?: BorderStyle;
    inlineStartWidth?: DefaultValue;
};

export type FormattedBorderProps = {
    b?: DefaultValue;
    l?: DefaultValue;
    r?: DefaultValue;
    t?: DefaultValue;
};
