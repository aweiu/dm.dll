export interface Coordinate {
  x: number,
  y: number
}

export interface FindRet extends Coordinate {
  index: number
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

export enum DmRet {Failed, Success}

export enum FindDir {LeftToRightAndTopToBottom, LeftToRightAndBottomToTop, RightToLeftAndTopToBottom, RightToLeftAndBottomToTop, CenterToOutSide, TopToBottomAndLeftToRight, TopToBottomAndRightToLeft, BottomToTopAndLeftToRight, BottomToTopAndRightToLeft}

export enum ErrorDisplay {Hidden, Show}

export enum GetWindowFlag {
  Parent,
  FirstChild,
  First,
  Last,
  Next,
  Previous,
  Owner,
  Top
}

export enum WindowState {
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

export enum KeyState {
  Up,
  Down
}