import winax = require('winax')
import { execSync } from 'child_process'
import * as path from 'path'
import {
  Coordinate,
  DmRet,
  ErrorDisplay,
  FindDir,
  FindRet,
  GetWindowFlag,
  KeyState,
  Size,
  WindowState
} from './types'

type DisplayType = 'normal' | 'gdi' | 'gdi2' | 'dx' | 'dx2' | 'dx3'
type MouseType = 'normal' | 'windows' | 'windows2' | 'windows3' | 'dx' | 'dx2'
type KeypadType = 'normal' | 'windows' | 'dx'

type FindPicDir =
  FindDir.LeftToRightAndTopToBottom
  | FindDir.LeftToRightAndBottomToTop
  | FindDir.RightToLeftAndTopToBottom
  | FindDir.RightToLeftAndBottomToTop

function getDM () {
  try {
    return new winax.Object('dm.dmsoft')
  } catch (e) {
    execSync(`regsvr32 ${path.resolve(__dirname, 'dm.dll')} /s`)
    return new winax.Object('dm.dmsoft')
  }
}

const dm = getDM()
export = {
  dll: dm,
  getPath (): string {
    return dm.GetPath()
  },
  setPath (path: string): DmRet {
    return dm.SetPath(path)
  },
  setErrorDisplay (flag: ErrorDisplay): DmRet {
    return dm.SetShowErrorMsg(flag)
  },
  getCursorPos (): Coordinate {
    let x = new winax.Variant(-1, 'byref')
    let y = new winax.Variant(-1, 'byref')
    dm.GetCursorPos(x, y)
    return { x: Number(x), y: Number(y) }
  },
  getKeyState (keyCode: number): KeyState {
    return dm.GetKeyState(keyCode)
  },
  moveTo (x: number, y: number): DmRet {
    return dm.MoveTo(x, y)
  },
  leftClick (): DmRet {
    return dm.LeftClick()
  },
  leftDoubleClick (): DmRet {
    return dm.LeftDoubleClick()
  },
  leftDown (): DmRet {
    return dm.LeftDown()
  },
  leftUp (): DmRet {
    return dm.LeftUp()
  },
  rightClick (): DmRet {
    return dm.RightClick()
  },
  rightDown (): DmRet {
    return dm.RightDown()
  },
  rightUp (): DmRet {
    return dm.RightUp()
  },
  wheelDown (): DmRet {
    return dm.WheelDown()
  },
  wheelUp (): DmRet {
    return dm.WheelUp()
  },
  keyPress (keyCode: number): DmRet {
    return dm.KeyPress(keyCode)
  },
  keyDown (keyCode: number): DmRet {
    return dm.KeyDown(keyCode)
  },
  keyUp (keyCode: number): DmRet {
    return dm.KeyUp(keyCode)
  },
  findWindow (className: string, title: string, parentHWnd?: number): number | undefined {
    const hWnd = parentHWnd ? this.enumWindow(className, title, 3, parentHWnd)[0] : dm.FindWindow(className, title)
    if (hWnd) return hWnd
  },
  enumWindow (className: string, title: string, filter: number, parentHWnd = 0): number[] {
    const wins: string = dm.EnumWindow(parentHWnd, title, className, filter)
    return wins.length > 0 ? wins.split(',').map(hWnd => Number(hWnd)) : []
  },
  getWindow (hWnd: number, flag: GetWindowFlag): number {
    return dm.GetWindow(hWnd, flag)
  },
  getPointWindow (x: number, y: number): number {
    return dm.GetPointWindow(x, y)
  },
  getClientSize (hWnd: number): Size | undefined {
    let width = new winax.Variant(-1, 'byref')
    let height = new winax.Variant(-1, 'byref')
    const ret = dm.GetClientSize(hWnd, width, height)
    if (ret) {
      return {
        width: Number(width),
        height: Number(height)
      }
    }
  },
  moveWindow (hWnd: number, x: number, y: number): DmRet {
    return dm.MoveWindow(hWnd, x, y)
  },
  setWindowSize (hWnd: number, width: number, height: number): DmRet {
    return dm.SetWindowSize(hWnd, width, height)
  },
  setWindowState (hWnd: number, state: WindowState): DmRet {
    return dm.SetWindowState(hWnd, state)
  },
  sendPaste (hWnd: number): DmRet {
    return dm.sendPaste(hWnd)
  },
  sendString (hWnd: number, content: string): DmRet {
    return dm.SendString(hWnd, content)
  },
  bindWindow (hWnd: number, display: DisplayType, mouse: MouseType, keypad: KeypadType, mode: 0 | 2 | 4): DmRet {
    return dm.BindWindow(hWnd, display, mouse, keypad, mode)
  },
  unBindWindow (): DmRet {
    return dm.UnBindWindow()
  },
  capture (x1: number, y1: number, x2: number, y2: number, fileName: string) {
    return dm.Capture(x1, y1, x2, y2, fileName)
  },
  findPic (x1: number, y1: number, x2: number, y2: number, picName: string, deltaColor: string, sim: number, dir: FindPicDir): FindRet | undefined {
    let x = new winax.Variant(-1, 'byref')
    let y = new winax.Variant(-1, 'byref')
    const index = dm.FindPic(x1, y1, x2, y2, picName, deltaColor, sim, dir, x, y)
    if (index !== -1) {
      return {
        x: Number(x),
        y: Number(y),
        index
      }
    }
  },
  findPicEx (x1: number, y1: number, x2: number, y2: number, picName: string, deltaColor: string, sim: number, dir: FindPicDir): FindRet[] {
    const ret = dm.FindPicEx(x1, y1, x2, y2, picName, deltaColor, sim, dir)
    if (ret.length > 0) {
      return ret
        .split('|')
        .map((pic: string) => {
          const [index, x, y] = pic.split(',')
          return { index: Number(index), x: Number(x), y: Number(y) }
        })
    } else return []
  },
  getColor (x: number, y: number): string {
    return dm.GetColor(x, y)
  },
  getColorNum (x1: number, y1: number, x2: number, y2: number, color: string, sim: number): number {
    return dm.GetColorNum(x1, y1, x2, y2, color, sim)
  },
  getAveRGB (x1: number, y1: number, x2: number, y2: number): string {
    return dm.GetAveRGB(x1, y1, x2, y2)
  },
  findColor (x1: number, y1: number, x2: number, y2: number, color: string, sim: number, dir: FindDir): Coordinate | undefined {
    let x = new winax.Variant(-1, 'byref')
    let y = new winax.Variant(-1, 'byref')
    const ret = dm.FindColor(x1, y1, x2, y2, color, sim, dir, x, y)
    if (ret) {
      return {
        x: Number(x),
        y: Number(y)
      }
    }
  },
  setDict (index: number, file: string): DmRet {
    return dm.SetDict(index, file)
  },
  findStr (x1: number, y1: number, x2: number, y2: number, string: string, colorFormat: string, sim: number): FindRet | undefined {
    let x = new winax.Variant(-1, 'byref')
    let y = new winax.Variant(-1, 'byref')
    const index = dm.FindStr(x1, y1, x2, y2, string, colorFormat, sim, x, y)
    if (index !== -1) {
      return {
        index,
        x: Number(x),
        y: Number(y)
      }
    }
  },
  getScreenSize (): Size {
    return {
      width: dm.GetScreenWidth(),
      height: dm.GetScreenHeight()
    }
  }
}
