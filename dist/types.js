"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DmRet;
(function (DmRet) {
    DmRet[DmRet["Failed"] = 0] = "Failed";
    DmRet[DmRet["Success"] = 1] = "Success";
})(DmRet = exports.DmRet || (exports.DmRet = {}));
var FindDir;
(function (FindDir) {
    FindDir[FindDir["LeftToRightAndTopToBottom"] = 0] = "LeftToRightAndTopToBottom";
    FindDir[FindDir["LeftToRightAndBottomToTop"] = 1] = "LeftToRightAndBottomToTop";
    FindDir[FindDir["RightToLeftAndTopToBottom"] = 2] = "RightToLeftAndTopToBottom";
    FindDir[FindDir["RightToLeftAndBottomToTop"] = 3] = "RightToLeftAndBottomToTop";
    FindDir[FindDir["CenterToOutSide"] = 4] = "CenterToOutSide";
    FindDir[FindDir["TopToBottomAndLeftToRight"] = 5] = "TopToBottomAndLeftToRight";
    FindDir[FindDir["TopToBottomAndRightToLeft"] = 6] = "TopToBottomAndRightToLeft";
    FindDir[FindDir["BottomToTopAndLeftToRight"] = 7] = "BottomToTopAndLeftToRight";
    FindDir[FindDir["BottomToTopAndRightToLeft"] = 8] = "BottomToTopAndRightToLeft";
})(FindDir = exports.FindDir || (exports.FindDir = {}));
var ErrorDisplay;
(function (ErrorDisplay) {
    ErrorDisplay[ErrorDisplay["Hidden"] = 0] = "Hidden";
    ErrorDisplay[ErrorDisplay["Show"] = 1] = "Show";
})(ErrorDisplay = exports.ErrorDisplay || (exports.ErrorDisplay = {}));
var GetWindowFlag;
(function (GetWindowFlag) {
    GetWindowFlag[GetWindowFlag["Parent"] = 0] = "Parent";
    GetWindowFlag[GetWindowFlag["FirstChild"] = 1] = "FirstChild";
    GetWindowFlag[GetWindowFlag["First"] = 2] = "First";
    GetWindowFlag[GetWindowFlag["Last"] = 3] = "Last";
    GetWindowFlag[GetWindowFlag["Next"] = 4] = "Next";
    GetWindowFlag[GetWindowFlag["Previous"] = 5] = "Previous";
    GetWindowFlag[GetWindowFlag["Owner"] = 6] = "Owner";
    GetWindowFlag[GetWindowFlag["Top"] = 7] = "Top";
})(GetWindowFlag = exports.GetWindowFlag || (exports.GetWindowFlag = {}));
var WindowState;
(function (WindowState) {
    WindowState[WindowState["Close"] = 0] = "Close";
    WindowState[WindowState["Active"] = 1] = "Active";
    WindowState[WindowState["MinimizeAndInactive"] = 2] = "MinimizeAndInactive";
    WindowState[WindowState["MinimizeAndReleaseMemoryAndActive"] = 3] = "MinimizeAndReleaseMemoryAndActive";
    WindowState[WindowState["MaximizeAndActive"] = 4] = "MaximizeAndActive";
    WindowState[WindowState["RestoreAndInactive"] = 5] = "RestoreAndInactive";
    WindowState[WindowState["Hide"] = 6] = "Hide";
    WindowState[WindowState["Show"] = 7] = "Show";
    WindowState[WindowState["Top"] = 8] = "Top";
    WindowState[WindowState["CancelTop"] = 9] = "CancelTop";
    WindowState[WindowState["Disable"] = 10] = "Disable";
    WindowState[WindowState["CancelDisable"] = 11] = "CancelDisable";
    WindowState[WindowState["RestoreAndActive"] = 12] = "RestoreAndActive";
    WindowState[WindowState["ForceExit"] = 13] = "ForceExit";
})(WindowState = exports.WindowState || (exports.WindowState = {}));
var KeyState;
(function (KeyState) {
    KeyState[KeyState["Up"] = 0] = "Up";
    KeyState[KeyState["Down"] = 1] = "Down";
})(KeyState = exports.KeyState || (exports.KeyState = {}));
