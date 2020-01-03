# qrcoded-public-ip-terminal [![Build Status](https://travis-ci.com/matt-daniel-brown/qrcoded-public-ip-terminal.svg?branch=master)](https://travis-ci.com/matt-daniel-brown/qrcoded-public-ip-terminal)

> Generate and display your public/dev/testing IP address as QR code in your terminal.


## Install

```
$ npm install --global qrcoded-public-ip-terminal
```


## Usage

### Basic Usage:
```sh
 $  qrcode-myip [PORT]

 # Examples:

 qrcode-myip
    # Defaults to port 9000

 qrcode-myip 3000
    # -> localhost:3000
 qrcode-myip 8080
    # -> localhost:8080
```

### Extended Documentation
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
