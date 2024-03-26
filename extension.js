const vscode = require('vscode');
const suggestion = require('./const/suggestions.js')

function activate(context) {
    console.log('Congratulations, your extension "retino-css-snippet" is now active!');

    let disposable = vscode.languages.registerCompletionItemProvider({ language: '*', scheme: 'file' }, {
        provideCompletionItems(document, position) {
		    const currentPosition = document.lineAt(position).text
            if (currentPosition.trim().includes("var()")) {
                return suggestion.map((suggestion) => ({
                    ...suggestion,
                    kind: vscode.CompletionItemKind.Variable,
                }));
            }
            return [];
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};