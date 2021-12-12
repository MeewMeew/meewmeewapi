# Documentation

- [Documentation](#documentation)
  - [Access to API](#access-to-api)
  - [Get account infomation](#get-account-infomation)
  - [Get covid information](#get-covid-information)
  - [Get random image](#get-random-image)
  - [Get facebook avatar from user id](#get-facebook-avatar-from-user-id)
  - [Get tiktok video without watermark](#get-tiktok-video-without-watermark)
  - [Link word](#link-word)
  - [Arrange Word](#arrange-word)
  - [Chat with Simsimi](#chat-with-simsimi)
  - [Teach Simsimi](#teach-simsimi)

---------------------------------------
<a name="access-to-api"></a>

## Access to API

```js
const { MeewMeew } = require('meewmeewapi');
const meewmeew = new MeewMeew('YOUR_APIKEY_HERE'); // Get your free API key at https://meewmeew.info/site
```

---------------------------------------
<a name="get-account-infomation"></a>

## accountInfo()

Returns your account information

__Example__

```js
meewmeew.accountInfo()
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

---------------------------------------
<a name="get-covid-information"></a>

## covidInfo()

Returns Covid-19 information in Viet Nam and the world

__Example__

```js
meewmeew.covidInfo()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---------------------------------------
<a name="get-random-image"></a>

## randomImage(imageType[, path])

Get random image

__Arguments__

* `imageType`: `girl`, `boy`, `cosplay`, `sexy`, `wibu`, `dog`, `meow (cat)`
* `path`: Path for image

Returns buffer image

__Example__

```js
const fs = require('fs-extra');
meewmeew
    .randomImage('girl', 'image.png')
    .then(console.log)
    .catch(console.error)
```

---------------------------------------
<a name="get-facebook-avatar-from-user-id"></a>

## facebookAvatar(userId[, path])

Get facebook avatar from user id

__Arguments__

* `userId`: User id of Facebook user
* `path`: Path for image

Returns buffer image

__Example__

```js
const fs = require('fs-extra');
meewmeew.facebookAvatar(4, 'avatar.png') // Avatar of Mark Zuckerberg
    .then(console.log)
    .catch(console.error)
```

---------------------------------------
<a name="get-tiktok-video-without-watermark"></a>

## tiktokVideoNoWatermark(tiktokUrl)

Get tiktok video without watermark

__Arguments__

* `tiktokUrl`: Link to tiktok video

Returns object data

__Example__

```js
const fs = require('fs-extra');
meewmeew.tiktokVideoNoWatermark('https://www.tiktok.com/@choul2002/video/6996459846480465179')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---------------------------------------
<a name="link-word"></a>


## linkWord(word[, lang])

Link word

__Arguments__

* `word`: 1 word in English and 2 words in Vietnamese
* `lang`: `vi` and `en`, default is `vi`

Returns object data

__Example__

```js
meewmeew.linkWord('hello', 'en')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---------------------------------------
<a name="arrange-word"></a>

## arrangeWord(level)

Arrange Word

__Arguments__

* `level`: `easy`, `normal`, `hard`, `extreme`, `random`, default is `random`.

Returns object data

__Example__

```js
meewmeew.arrangeWord('easy')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---------------------------------------
<a name="chat-with-simsimi"></a>

## chatWithSimsimi(text)

Chat with Simsimi

__Arguments__

* `text`: A question or a message or something

Returns message of Simsimi

__Example__

```js
meewmeew.chatWithSimsimi('hello')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---------------------------------------
<a name="teach-simsimi"></a>

## teachSimsimi(ask, answer)

Teach Simsimi

__Arguments__

* `ask`: A question
* `answer`: An answer

Returns status

__Example__

```js
meewmeew.teachSimsimi('hello', 'hi bae')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---------------------------------------