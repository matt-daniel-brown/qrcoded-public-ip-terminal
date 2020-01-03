# qrcoded-public-ip-terminal [![Build Status](https://travis-ci.com/matt-daniel-brown/qrcoded-public-ip-terminal.svg?branch=master)](https://travis-ci.com/matt-daniel-brown/qrcoded-public-ip-terminal)

> Generate and display your public/dev/testing IP address as QR code in your terminal.


## Install

```
$ npm install qrcoded-public-ip-terminal
```


## Usage

```js
const qrcodedPublicIpTerminal = require('qrcoded-public-ip-terminal');

qrcodedPublicIpTerminal('unicorns');
//=> 'unicorns & rainbows'
```


## API

### qrcodedPublicIpTerminal(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global qrcoded-public-ip-terminal
```

```
$ qrcoded-public-ip-terminal --help

  Usage
    qrcoded-public-ip-terminal [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ qrcoded-public-ip-terminal
    unicorns & rainbows
    $ qrcoded-public-ip-terminal ponies
    ponies & rainbows
```
