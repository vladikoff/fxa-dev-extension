# fxa-dev-extension

> FxA Browser Extension to make development faster

![](http://i.imgur.com/PwAjCkP.png)

## Usage

Press the "FxA" button on any FxA sign up page to create an account.
If you are developing locally you have to manually verify your account using the terminal, [read this](https://github.com/mozilla/fxa-local-dev#workflow).

### Firefox

Hack up Firefox via `about:config`, set `xpinstall.signatures.required` to `false`. Drag the `.xpi` from `dist` into Firefox. 

Coming soon: This extension should also be packaged with https://github.com/mozilla/fxa-local-dev when you use `npm start`

### Chrome

Load this project directory as an unpacked extension using `chrome://extensions/`.

![](http://i.imgur.com/C6bDvIq.gif)

## Contributing

> Install using `npm install`

### `npm run build`

Build the latest version into `dist/`.
