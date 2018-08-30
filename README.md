# dm.dll
基于[大漠插件](http://www.dmwebsite.net/)封装的JS版按键精灵！从此可以用JS写自动脚本了~

## 使用
建议使用[typescript](https://www.tslang.cn/)来调用本插件，插件内置了很多[有用类型](types/types.d.ts)，你可以获得更好的代码提示
> 请务必使用管理员身份运行node，因为大漠插件的注册和某些后台绑定模式需要管理员权限

### 环境
* windows平台
* node <= 10.8.0（依赖[winax](https://github.com/durs/node-activex)最高支持的编译版本，并可能需要32位[node](https://npm.taobao.org/mirrors/node/v10.8.0/node-v10.8.0-x86.msi)，请自行测试）
* 预装[windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)编译环境

    ```
    // 管理员身份运行
    npm install --global --production windows-build-tools --add-python-to-path
    ```

### 安装
```
npm install dm.dll --save
```

## API
本插件的api基本同[大漠说明文档](https://github.com/aweiu/dm.dll/raw/master/%E5%A4%A7%E6%BC%A0%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E.CHM)保持一致，稍有改动的部分也会在后文指出，所以你可以对照它来查看对应api的详细说明

目前只封装了大漠插件最常用的功能，API太多，待整理...不过如果你需要的api本插件没有提供，你可以通过如下方式直接调用大漠插件的api
```
// node
// const dm = require('dm.dll')
// typescript
import dm = require('dm.dll')
console.log(dm.dll.ver())
```

### 基本设置
* getPath (): string
* setPath (path: string): [DmRet](types/types.d.ts#L18)
* setErrorDisplay (flag: [ErrorDisplay](types/types.d.ts#L33)): [DmRet](types/types.d.ts#L18)
    > 同大漠插件的SetShowErrorMsg

### 窗口
* findWindow (className: string, title: string, parentHWnd?: number): number | undefined
    > 增强了原生findWindow的功能，你可以直接传入一个父窗口句柄来查找子窗口句柄
* enumWindow (className: string, title: string, filter: number, parentHWnd = 0): number[]
* getWindow (hWnd: number, flag: [GetWindowFlag](types/types.d.ts#L37)): number
* getPointWindow (x: number, y: number): number
* getClientSize (hWnd: number): [Size](types/types.d.ts#L14)
* moveWindow (hWnd: number, x: number, y: number): [DmRet](types/types.d.ts#L18)
* setWindowSize (hWnd: number, width: number, height: number): [DmRet](types/types.d.ts#L18)
* setWindowState (hWnd: number, state: [WindowState](types/types.d.ts#L47)): [DmRet](types/types.d.ts#L18)
* sendPaste (hWnd: number): [DmRet](types/types.d.ts#L18)
* sendString (hWnd: number, content: string): [DmRet](types/types.d.ts#L18)

### 后台
* bindWindow (hWnd: number, display: [DisplayType](types/index.d.ts#L2), mouse: [MouseType](types/index.d.ts#L3), keypad: [KeypadType](types/index.d.ts#L4), mode: 0 | 2 | 4): [DmRet](types/types.d.ts#L18)

### 键鼠
* getCursorPos (): [Coordinate](types/types.d.ts#L1)
* getKeyState (keyCode: number): [KeyState](/types/types.d.ts#L63)
* moveTo (x: number, y: number): [DmRet](types/types.d.ts#L18)
* leftClick (): [DmRet](types/types.d.ts#L18)
* leftDoubleClick (): [DmRet](types/types.d.ts#L18)
* leftDown (): [DmRet](types/types.d.ts#L18)
* leftUp (): [DmRet](types/types.d.ts#L18)
* rightClick (): [DmRet](types/types.d.ts#L18)
* rightDown (): [DmRet](types/types.d.ts#L18)
* rightUp (): [DmRet](types/types.d.ts#L18)
* wheelDown (): [DmRet](types/types.d.ts#L18)
* wheelUp (): [DmRet](types/types.d.ts#L18)
* keyPress (keyCode: number): [DmRet](types/types.d.ts#L18)
* keyDown (keyCode: number): [DmRet](types/types.d.ts#L18)
* keyUp (keyCode: number): [DmRet](types/types.d.ts#L18)

### 图色
* capture (x1: number, y1: number, x2: number, y2: number, fileName: string)
* findPic (x1: number, y1: number, x2: number, y2: number, picName: string, deltaColor: string, sim: number, dir: [FindPicDir](types/index.d.ts#L5)): [FindRet](types/types.d.ts#L11) | undefined
* findPicEx (x1: number, y1: number, x2: number, y2: number, picName: string, deltaColor: string, sim: number, dir: [FindPicDir](types/index.d.ts#L5)): [FindRet](types/types.d.ts#L11)[]
* getColor (x: number, y: number): string
* getColorNum (x1: number, y1: number, x2: number, y2: number, color: string, sim: number): number
* findColor (x1: number, y1: number, x2: number, y2: number, color: string, sim: number, dir: [FindDir](types/types.d.ts#L22)): [Coordinate](types/types.d.ts#L1) | undefined

### 文字识别
* setDict (index: number, file: string): [DmRet](types/types.d.ts#L18)
* findStr (x1: number, y1: number, x2: number, y2: number, string: string, colorFormat: string, sim: number): [FindRet](types/types.d.ts#L11) | undefined

### 系统
* getScreenSize (): [Size](types/types.d.ts#L14)
    > 获取屏幕大小，该函数合并了GetScreenWidth和GetScreenHeight
