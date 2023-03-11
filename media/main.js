// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.

(function () {
    const vscode = acquireVsCodeApi();

    // const oldState = /** @type {{ count: number} | undefined} */ (vscode.getState());

    // const counter = /** @type {HTMLElement} */ (document.getElementById('lines-of-code-counter'));

    const button = document.getElementById('button');
    console.log("hello from javascript in webview.")
}());