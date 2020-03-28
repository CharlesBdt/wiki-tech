# VS Code

- [Settings](#settings)
- [Snippets](#snippets)
- [Extensions](#extensions)

## Settings

```json
{
  "workbench.startupEditor": "none",
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "workbench.colorTheme": "Nord",
  "workbench.iconTheme": "field-lights",
  "editor.renderWhitespace": "boundary",
  "files.autoSave": "afterDelay",
  "editor.wordWrap": "on",
  "editor.autoClosingQuotes": "never",
  "editor.autoClosingBrackets": "always",
  "breadcrumbs.enabled": true,
  "editor.renderLineHighlight": "all",
  "editor.tabCompletion": "on",
  "editor.cursorBlinking": "smooth",
  "editor.minimap.showSlider": "always",
  "editor.snippetSuggestions": "top",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "files.trimFinalNewlines": true,
  "workbench.list.multiSelectModifier": "alt",
  "window.restoreWindows": "all",
  "editor.formatOnType": true,
  "git.confirmSync": false,
  "emmet.showSuggestionsAsSnippets": true,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "editor.formatOnSave": true,
  "files.associations": {
      "*.html": "twig"
  },
  "emmet.includeLanguages": {
      "twig": "html",
      "vue": "html",
      "html": "html",
  },
  "editor.tokenColorCustomizations": {
      "[City Lights]": {
          "comments": "#11b166",
          "numbers": "#c74ef7",
          "types": "#c0e030",
          "variables": "#cc3265"
      }
  },
  "git.enableSmartCommit": true,
  "editor.tabSize": 2,
  "bookmarks.navigateThroughAllFiles": true,
  "css.lint.duplicateProperties": "warning",
  "css.lint.compatibleVendorPrefixes": "warning",
  "css.lint.boxModel": "warning",
  "css.lint.float": "warning",
  "css.lint.idSelector": "warning",
  "css.lint.ieHack": "warning",
  "css.lint.importStatement": "warning",
  "css.lint.zeroUnits": "warning",
  "emmet.triggerExpansionOnTab": true,
  "bookmarks.wrapNavigation": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "diffEditor.ignoreTrimWhitespace": false,
  "window.zoomLevel": 0,
  "files.exclude": {
      "**/.git": false
  },
}
```

## Snippets

```json
"Print to console": {
  "prefix": "log",
  "body": [
    "console.log('$1', $2);",
  ],
  "description": "Log output to console"
}
```

https://stackoverflow.com/questions/35773299/how-can-you-export-the-visual-studio-code-extension-list

╰─ code --list-extensions | xargs -L 1 echo code --install-extension

## Extensions

Make sure you have VS Code CLI command added to your path

* Open the Command Palette (Cmd + Shift + P on Mac / Ctrl + Shift + P on Windows)
* Type `shell command` to select `Shell Command: Install 'code' command in PATH`

You can now output extensions list by typing in your terminal

__Unix__ : `code --list-extensions | xargs -L 1 echo code --install-extension`

__Windows__ : `code --list-extensions | % { "code --install-extension $_" }`

You can re-past the output list in another VS Code to directly install them

```sh
code --install-extension alefragnani.Bookmarks
code --install-extension alefragnani.project-manager
code --install-extension arcticicestudio.nord-visual-studio-code
code --install-extension auchenberg.vscode-browser-preview
code --install-extension christian-kohler.path-intellisense
code --install-extension Dart-Code.dart-code
code --install-extension DavidAnson.vscode-markdownlint
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens
code --install-extension esbenp.prettier-vscode
code --install-extension mblode.twig-language-2
code --install-extension mhutchie.git-graph
code --install-extension mikestead.dotenv
code --install-extension ms-python.python
code --install-extension ms-vsliveshare.vsliveshare
code --install-extension mtxr.sqltools
code --install-extension octref.vetur
code --install-extension ritwickdey.live-sass
code --install-extension ritwickdey.LiveServer
code --install-extension sdras.vue-vscode-snippets
code --install-extension sveggiani.vscode-field-lights
code --install-extension titiaiev.vue-docs
code --install-extension tomoki1207.pdf
code --install-extension vscodevim.vim
code --install-extension WallabyJs.quokka-vscode
code --install-extension yummygum.city-lights-theme
```
