export interface Coordinate {
  x: number,
  y: number
}

export interface FindRet extends Coordinate {
  index: number
}

export interface OcrRet extends Coordinate {
  words: string
}

export interface Area {
  x1: number,
  y1: number,
  x2: number,
  y2: number
}

export interface Size {
  width: number,
  height: number
}

export const enum DmRet {Failed, Success}

export const enum FindDir {LeftToRightAndTopToBottom, LeftToRightAndBottomToTop, RightToLeftAndTopToBottom, RightToLeftAndBottomToTop, CenterToOutSide, TopToBottomAndLeftToRight, TopToBottomAndRightToLeft, BottomToTopAndLeftToRight, BottomToTopAndRightToLeft}

export const enum ErrorDisplay {Hidden, Show}

export const enum GetWindowFlag {
  Parent,
  FirstChild,
  First,
  Last,
  Next,
  Previous,
  Owner,
  Top
}

export const enum WindowState {
  Close,
  Active,
  MinimizeAndInactive,
  MinimizeAndReleaseMemoryAndActive,
  MaximizeAndActive,
  RestoreAndInactive,
  Hide,
  Show,
  Top,
  CancelTop,
  Disable,
  CancelDisable,
  RestoreAndActive,
  ForceExit
}

export const enum KeyState {
  Up,
  Down
}
