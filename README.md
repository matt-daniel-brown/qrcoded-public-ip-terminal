# qrcoded-public-ip-terminal [![Build Status](https://travis-ci.com/matt-daniel-brown/qrcoded-public-ip-terminal.svg?branch=master)](https://travis-ci.com/matt-daniel-brown/qrcoded-public-ip-terminal)

> Generate and display your public/dev/testing IP address as QR code in your terminal.


## Install

```
$ npm install qrcoded-public-ip-terminal
```


## Usage

```sh
Usage
  $ qrcoded-public-ip-terminal [PORT]

Options
  --port  Port [Default: 9000]

Examples
  $ qrcoded-public-ip-terminal
    # ...  PUBLIC ADDRESS: 	 192.168.86.28:9000
    # ...  { QR Code Encoded Public IP Address }

  $ qrcoded-public-ip-terminal 3000
    # ...  PUBLIC ADDRESS: 	 192.168.86.28:3000
    # ...  { QR Code Encoded Public IP Address }
```


## API

### qrcodedPublicIpTerminal(input, options?)

#### input

Type: `integer`

Port

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
