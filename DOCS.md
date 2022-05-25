# Documentation
- [Get account infomation](#get-account-infomation)
- [Get covid information](#get-covid-information)
- [Get random image](#get-random-image)
- [Get facebook avatar from user id](#get-facebook-avatar-from-user-id)
- [Get facebook id from facebook url](#get-facebook-id-from-facebook-url)
- [Get tiktok video without watermark](#get-tiktok-video-without-watermark)
- [Link word](#link-word)
- [Sort Word](#sort-word)
- [Chat with Simsimi](#chat-with-simsimi)
- [Teach Simsimi](#teach-simsimi)
- [Get results lottery today](#lottery)

---------------------------------------
<a name="get-account-infomation"></a>

## Get account infomation

### ***`account.info()`***

__Example__

```js
const account = new MeewMeew.Account('<YOUR_API_KEY>');
account.info()
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

---------------------------------------
<a name="get-covid-information"></a>

## Get covid information

### ***`covid.info()`***

__Example__

```js
const covid = new MeewMeew.Covid('<YOUR_API_KEY>');
covid.info()
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

---------------------------------------
<a name="get-random-image"></a>

## Get random image

### ***`image.random(imageType[, path])`***

__Arguments__

* `imageType`: `girl`, `boy`, `cosplay`, `sexy`, `wibu`, `dog`, `meow (cat)`
* `path`: Path for image

__Example__

```js
const image = new MeewMeew.Image('<YOUR_APIKEY_HERE>')
image.random('girl', 'image.png')
    .then(console.log)
    .catch(console.error)
```

---------------------------------------
## Facebook
<a name="get-facebook-avatar-from-user-id"></a>

### ***`facebook.avatar(userId[, path])`***

__Arguments__

* `userId`: User id of Facebook user
* `path`: Path for image

__Example__

```js
const facebook = new MeewMeew.Facebook('<YOUR_APIKEY_HERE>')
facebook.avatar('4', 'avatar.png') // Avatar of Mark Zuckerberg
    .then(console.log)
    .catch(console.error)
```

<a name="get-facebook-id-from-facebook-url"></a>

### ***`facebook.id(profileUrl[, fcaApi])`***

__Arguments__

* `profileUrl`: Profile url of Facebook user
* `fcaApi`: API from [facebook-chat-api](https://github.com/Schmavery/facebook-chat-api)

__Example__

```js
const facebook = new MeewMeew.Facebook('<YOUR_APIKEY_HERE>')
facebook.id('https://www.facebook.com/mark.zuckerberg', '<YOUR_API_KEY_HERE>')
    .then(console.log)
    .catch(console.error)
```

---------------------------------------
<a name="get-tiktok-video-without-watermark"></a>

## Get tiktok video without watermark

### ***`tiktok.video(url[, path])`***

__Arguments__

* `url`: Link to tiktok video
* `path`: Path for video

__Example__

```js
const tiktok = new MeewMeew.Tiktok('<YOUR_APIKEY_HERE>')
tiktok.video('https://www.tiktok.com/@choul2002/video/6996459846480465179', 'video.mp4')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---------------------------------------

## Word
<a name="link-word"></a>

### ***`word.linkWord(word[, lang])`***

__Arguments__

* `word`: 1 word in English and 2 words in Vietnamese
* `lang`: `vi` and `en`, default is `vi`

__Example__

```js
const word = new MeewMeew.Word('<YOUR_APIKEY_HERE>')
word.linkWord('hello', 'en')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

<a name="sort-word"></a>

### ***`word.sortWord(level)`***

__Arguments__

* `level`: `easy`, `normal`, `hard`, `extreme`, `random`, default is `random`.

__Example__

```js
const word = new MeewMeew.Word('<YOUR_APIKEY_HERE>')
word.sortWord('easy')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---------------------------------------

## Simsimi

<a name="teach-simsimi"></a>
### ***`simsimi.teach(ask, answer)`***

__Arguments__

* `ask`: A question
* `answer`: An answer

__Example__

```js
const simsimi = new MeewMeew.Simsimi('<YOUR_API_KEY>');
simsimi.teach('hello', 'hi')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

<a name="chat-with-simsimi"></a>
### ***`simsimi.chat(ask)`***

__Arguments__

* `ask`: A question

__Example__

```js
const simsimi = new MeewMeew.Simsimi('<YOUR_API_KEY>');
simsimi.chat('hello')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---------------------------------------
<a name="lottery"></a>

## Get results lottery today

### ***`lottery.result(location)`***

__Arguments__

* `location`: Default `all`, see more [here](https://meewmeew.info/site/docs#lottery).

__Example__

```js
const lottery = new MeewMeew.Lottery('<YOUR_API_KEY>');
lottery.result('all')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---------------------------------------