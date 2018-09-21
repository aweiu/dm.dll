export interface Coordinate {
    x: number;
    y: number;
}
export interface FindRet extends Coordinate {
    index: number;
}
export interface OcrRet extends Coordinate {
    words: string;
}
export interface Area {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
export interface Size {
    width: number;
    height: number;
}
export declare const enum DmRet {
    Failed = 0,
    Success = 1
}
export declare const enum FindDir {
    LeftToRightAndTopToBottom = 0,
    LeftToRightAndBottomToTop = 1,
    RightToLeftAndTopToBottom = 2,
    RightToLeftAndBottomToTop = 3,
    CenterToOutSide = 4,
    TopToBottomAndLeftToRight = 5,
    TopToBottomAndRightToLeft = 6,
    BottomToTopAndLeftToRight = 7,
    BottomToTopAndRightToLeft = 8
}
export declare const enum ErrorDisplay {
    Hidden = 0,
    Show = 1
}
export declare const enum GetWindowFlag {
    Parent = 0,
    FirstChild = 1,
    First = 2,
    Last = 3,
    Next = 4,
    Previous = 5,
    Owner = 6,
    Top = 7
}
export declare const enum WindowState {
    Close = 0,
    Active = 1,
    MinimizeAndInactive = 2,
    MinimizeAndReleaseMemoryAndActive = 3,
    MaximizeAndActive = 4,
    RestoreAndInactive = 5,
    Hide = 6,
    Show = 7,
    Top = 8,
    CancelTop = 9,
    Disable = 10,
    CancelDisable = 11,
    RestoreAndActive = 12,
    ForceExit = 13
}
export declare const enum KeyState {
    Up = 0,
    Down = 1
}
