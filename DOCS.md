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

## Get account infomation
__accountInfo()__

Returns your account information

```js
meewmeew.accountInfo()
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

---------------------------------------
<a name="get-covid-information"></a>

## Get covid information
__covidInfo()__

Returns Covid-19 information in Viet Nam and the world

```js
meewmeew.covidInfo()
    .then(data => console.log(data))
    /*{
        "time": "26/11 19:17",
        "vietnam": {
            "cases": "1.181.337",
            "deaths": "24.544",
            "recovering": "5.456",
            "recovered": "955.256"
        },
        "world": {
            "cases": "260.465.215",
            "deaths": "5.202.508",
            "recovering": "19.492.594",
            "recovered": "235.423.910"
        },
        "news": {
            "vietnam": "Ngày 26/11, Hà Nội ghi nhận 264 ca Covid-19 ở 29 quận, huyện ",
            "url": "https://covid19.gov.vn/ngay-26-11-ha-noi-ghi-nhan-264-ca-covid-19-o-29-quan-huyen-171211126184854099.htm"
        }
    }*/
    .catch(error => console.error(error));
```

---------------------------------------
<a name="get-random-image"></a>

## Get random image
__randomImage(imageType[, path])__

* `imageType`: `girl`, `boy`, `cosplay`, `sexy`, `wibu`, `dog`, `meow (cat)`
* `path`: Path for image
Returns buffer image

```js
const fs = require('fs-extra');
meewmeew
    .randomImage('girl', 'image.png')
    .then(console.log)
    .catch(console.error)
```

---------------------------------------
<a name="get-facebook-avatar-from-user-id"></a>

## Get facebook avatar from user id
__facebookAvatar(userId[, path])__

* `userId`: User id of Facebook user
* `path`: Path for image

Returns buffer image

```js
const fs = require('fs-extra');
meewmeew.facebookAvatar(4, 'avatar.png') // Avatar of Mark Zuckerberg
    .then(console.log)
    .catch(console.error)
```

---------------------------------------
<a name="get-tiktok-video-without-watermark"></a>

## Get tiktok video without watermark
__tiktokVideoNoWatermark(tiktokUrl)__

* `tiktokUrl`: Link to tiktok video

Returns object data

```js
const fs = require('fs-extra');
meewmeew.tiktokVideoNoWatermark('https://www.tiktok.com/@choul2002/video/6996459846480465179')
    .then(data => console.log(data))
    /*{
        "success": true,
        "url": "https://v3.tiktokcdn.com/c61af877738106d232dc1b0bbbc45a6d/61a1467c/video/tos/useast2a/tos-useast2a-pve-0037-aiso/6104b4723eba450a965b4d4ebfc911fd/?a=1180&br=2278&bt=1139&cd=0%7C0%7C0&ch=0&cr=3&cs=0&cv=1&dr=0&ds=6&er=&ft=xo0P~4yRgpXInz7T&l=202111261441200102450151530E3FFE06&lr=all&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2U7M2Q6Zjw5NzMzZjgzM0ApOGg5ZzZoNmRmNzlnaDVnaWdeZHNpcjRnamBgLS1kL2Nzcy5hMWFeYDRiM15gNTAvLTU6Yw%3D%3D&vl=&vr=",
        "more_data": {
            "tiktok_id": "6996459846480465179",
            "author_cover": "https://p77-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/5944e7af59359e1f492bb1c65d92670a.webp?x-expires=1638021600&x-signature=wViWmDfshlvYEWN9Yte9eeoCkLQ%3D",
            "desc": "2005 đến từ Quảng Ninh @meewmeew",
            "music_cover": "https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-v-2774/190c23e9d1354d208070083d6b3cae7e.jpeg",
            "music_author": "Đinh Đại Vũ",
            "music_url": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/9fa58f09280645da88427779cda8a4e0",
            "video_animated_cover": "https://p77-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/4bb585fc842f4a36a2b103c8c17dee9f_1628990255?x-expires=1637956800&x-signature=uvLKoHsSkPshEndyX4dUWsa0%2BAI%3D",
            "video_origin_cover": "https://p77-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/4c35dfdaefbf48afb240402511f51f56_1628990255~tplv-tiktokx-360p.webp?x-expires=1637956800&x-signature=ZsiXjciflvooNwU8FPk1ay0mSms%3D",
            "video_watermark": "https://v3.tiktokcdn.com/0c6b8519ab4d5839efc63ec0d13e6dff/61a1467c/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ec11f9fccf0e4a56b2c43503bcb804f5/?a=1180&br=2046&bt=1023&cd=0%7C0%7C0&ch=0&cr=3&cs=0&cv=1&dr=0&ds=3&er=&ft=xo0P~4yRgpXInz7T&l=202111261441200102450151530E3FFE06&lr=all&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2U7M2Q6Zjw5NzMzZjgzM0ApNDNkM2dkZGU0NzM1Zmg5O2deZHNpcjRnamBgLS1kL2NzczM0YzNhNi9fM15fLy0vMV86Yw%3D%3D&vl=&vr="
        }
    }*/
    .catch(error => console.error(error));
```

---------------------------------------
<a name="link-word"></a>

## Link word
__linkWord(Word, lang)__

* `word`: 1 word in English and 2 words in Vietnamese
* `lang`: `vi` and `en`, default is `vi`

Returns object data

```js
meewmeew.linkWord('hello', 'en')
    .then(data => console.log(data))
    /*{
        "success": true,
        "data": "ottava"
    }*/
    .catch(error => console.error(error));
```

---------------------------------------
<a name="arrange-word"></a>

## Arrange Word
__arrangeWord(level)__

* `level`: `easy`, `normal`, `hard`, `extreme`, `random`, default is `random`.

Returns object data

```js
meewmeew.arrangeWord('easy')
    .then(data => console.log(data))
    /*{
        "correct": "Parsi",
        "random": ["P", "a", "r", "s", "i"]
    }*/
    .catch(error => console.error(error));
```

---------------------------------------
<a name="chat-with-simsimi"></a>

## Chat with Simsimi
__chatWithSimsimi(text)__

* `text`: A question or a message or something

Returns message of Simsimi

```js
meewmeew.chatWithSimsimi('hello')
    .then(data => console.log(data))
    /*{
        "success": true,
        "msg": "hi"
    }*/
    .catch(error => console.error(error));
```

---------------------------------------
<a name="teach-simsimi"></a>

## Teach Simsimi
__teachSimsimi(ask, answer)__

* `ask`: A question
* `answer`: An answer

Returns status

```js
meewmeew.teachSimsimi('hello', 'hi bae')
    .then(data => console.log(data))
    /*{
        "success": true,
        "data": "Dạy sim thành công."
    }*/
    .catch(error => console.error(error));
```

---------------------------------------