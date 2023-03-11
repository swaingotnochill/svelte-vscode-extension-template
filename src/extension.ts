import { ChildProcess, spawn } from 'child_process';
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "todo" is now active!');

	let disposable = vscode.commands.registerCommand('todo.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri)
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(
		vscode.commands.registerCommand('todo.move2kube', async () => {
			try {
				// const childProcess = spawn('move2kube', ['version'])
				const terminal = vscode.window.createTerminal({name :"Mov2kube cli"})
				terminal.show()
				spawn('move2kube', ['version']).stdout.on('data', data => {
					terminal.sendText(data.toString())}
				)
			} catch(err : any) {
				vscode.window.showErrorMessage(err.message)
			}
		})
	)
	context.subscriptions.push(
		vscode.commands.registerCommand('todo.refresh', ()=> {
			HelloWorldPanel.kill();
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	)
	context.subscriptions.push(
		vscode.commands.registerCommand('todo.askQuestion', async () => {
		const answer = await	vscode.window.showInformationMessage("You good?", "Yes", "No");
			if ( answer  === "No") {
				vscode.window.showInformationMessage("Sorry to hear that.");
			} else {
				console.log("Yes")
				console.log(answer)
				vscode.window.showInformationMessage("Why are you good? You are rajeev. You should be depressed.");
			}
		})
	);
}

export function deactivate() {}
