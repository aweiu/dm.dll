"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winax = require("winax");
const child_process_1 = require("child_process");
const path = require("path");
function getDM() {
    try {
        return new winax.Object('dm.dmsoft');
    }
    catch (e) {
        child_process_1.execSync(`regsvr32 ${path.resolve(__dirname, 'dm.dll')} /s`);
        return new winax.Object('dm.dmsoft');
    }
}
const dm = getDM();
exports.default = {
    dll: dm,
    getPath() {
        return dm.GetPath();
    },
    setPath(path) {
        return dm.SetPath(path);
    },
    setErrorDisplay(flag) {
        return dm.SetShowErrorMsg(flag);
    },
    getCursorPos() {
        let x = new winax.Variant(-1, 'byref');
        let y = new winax.Variant(-1, 'byref');
        dm.GetCursorPos(x, y);
        return { x: Number(x), y: Number(y) };
    },
    getKeyState(keyCode) {
        return dm.GetKeyState(keyCode);
    },
    moveTo(x, y) {
        return dm.MoveTo(x, y);
    },
    leftClick() {
        return dm.LeftClick();
    },
    leftDoubleClick() {
        return dm.LeftDoubleClick();
    },
    leftDown() {
        return dm.LeftDown();
    },
    leftUp() {
        return dm.LeftUp();
    },
    rightClick() {
        return dm.RightClick();
    },
    rightDown() {
        return dm.RightDown();
    },
    rightUp() {
        return dm.RightUp();
    },
    wheelDown() {
        return dm.WheelDown();
    },
    wheelUp() {
        return dm.WheelUp();
    },
    keyPress(keyCode) {
        return dm.KeyPress(keyCode);
    },
    keyDown(keyCode) {
        return dm.KeyDown(keyCode);
    },
    keyUp(keyCode) {
        return dm.KeyUp(keyCode);
    },
    findWindow(className, title, parentHWnd) {
        return parentHWnd ? dm.EnumWindow(parentHWnd, title, className, 3) / 1 : dm.FindWindow(className, title);
    },
    enumWindow(className, title, filter, parentHWnd = 0) {
        const wins = dm.EnumWindow(parentHWnd, title, className, filter);
        return wins.split(',').map(hWnd => Number(hWnd));
    },
    getWindow(hWnd, flag) {
        return dm.GetWindow(hWnd, flag);
    },
    getPointWindow(x, y) {
        return dm.GetPointWindow(x, y);
    },
    getClientSize(hWnd) {
        let width = new winax.Variant(-1, 'byref');
        let height = new winax.Variant(-1, 'byref');
        const ret = dm.GetClientSize(hWnd, width, height);
        if (ret) {
            return {
                width: Number(width),
                height: Number(height)
            };
        }
    },
    moveWindow(hWnd, x, y) {
        return dm.MoveWindow(hWnd, x, y);
    },
    setWindowState(hWnd, state) {
        return dm.SetWindowState(hWnd, state);
    },
    sendPaste(hWnd) {
        return dm.sendPaste(hWnd);
    },
    sendString(hWnd, content) {
        return dm.SendString(hWnd, content);
    },
    bindWindow(hWnd, display, mouse, keypad, mode) {
        return dm.BindWindow(hWnd, display, mouse, keypad, mode);
    },
    capture(x1, y1, x2, y2, fileName) {
        return dm.Capture(x1, y1, x2, y2, fileName);
    },
    findPic(x1, y1, x2, y2, picName, deltaColor, sim, dir) {
        let x = new winax.Variant(-1, 'byref');
        let y = new winax.Variant(-1, 'byref');
        const index = dm.FindPic(x1, y1, x2, y2, picName, deltaColor, sim, dir, x, y);
        if (index !== -1) {
            return {
                x: Number(x),
                y: Number(y),
                index
            };
        }
    },
    findPicEx(x1, y1, x2, y2, picName, deltaColor, sim, dir) {
        const ret = dm.FindPicEx(x1, y1, x2, y2, picName, deltaColor, sim, dir);
        if (ret.length > 0) {
            return ret
                .split('|')
                .map((pic) => {
                const [index, x, y] = pic.split(',');
                return { index: Number(index), x: Number(x), y: Number(y) };
            });
        }
    },
    getColor(x, y) {
        return dm.GetColor(x, y);
    },
    getColorNum(x1, y1, x2, y2, color, sim) {
        return dm.GetColorNum(x1, y1, x2, y2, color, sim);
    },
    findColor(x1, y1, x2, y2, color, sim, dir) {
        let x = new winax.Variant(-1, 'byref');
        let y = new winax.Variant(-1, 'byref');
        const ret = dm.FindColor(x1, y1, x2, y2, color, sim, dir, x, y);
        if (ret) {
            return {
                x: Number(x),
                y: Number(y)
            };
        }
    },
    setDict(index, file) {
        return dm.SetDict(index, file);
    },
    findStr(x1, y1, x2, y2, string, colorFormat, sim) {
        let x = new winax.Variant(-1, 'byref');
        let y = new winax.Variant(-1, 'byref');
        const index = dm.FindStr(x1, y1, x2, y2, string, colorFormat, sim, x, y);
        if (index !== -1) {
            return {
                index,
                x: Number(x),
                y: Number(y)
            };
        }
    },
    getScreenSize() {
        return {
            width: dm.GetScreenWidth(),
            height: dm.GetScreenHeight()
        };
    }
};
