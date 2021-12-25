# Music .js

![Version](https://img.shields.io/badge/version-1.0-brightgreen)
![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg)

### Music.js is a complete javascript package for playing and controlling audio files. You only need a URL of the audio file. This package provides Public API to control the playback of the audio.

![JavaScript](https://img.shields.io/badge/JavaScript_ES6-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Supported Browsers
![Chrome](https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white)
![Opeara](https://img.shields.io/badge/Opera_Browser-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white)
![Firefox](https://img.shields.io/badge/Mozilla_Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)
![Brave](https://img.shields.io/badge/Brave_Browser-FF1B2D?style=for-the-badge&logo=Brave&logoColor=white)
![Edge](https://img.shields.io/badge/Microsoft_Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-FF1B2D?style=for-the-badge&logo=Safari&logoColor=white)


## Features

- Multi Browser and Cross Platform Support.
- Change Playback Speed.
- Keyboard Keys Binded to control the Playback.
- Queue Supported. Play from Queue.
- Repeat from Posotion A to Position B.
- Error Logging to console.
- Seek audio file to any position.

## Basic Usage

#### index.html
```html
<html>
    <head>
        <title>Music.js</title>
    </head>
    <body>
        <button onclick="playSong()">Play Song</button>
    </body>

    <!-- including Music.js script file -->
    <script type="text/javascript" src="./Music-js-v-1.0.js"></script>

    <!-- including my own custom script file -->
    <script type="text/javascript" src="./script.js"></script>
</html>
```

#### script.js
```js
function playSong(){
    let myAudio = new MJS();
    myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
    myAudio.play()
}
```

### Optional Settings
| Property Name | Default Value | Description |
| ------------- | ------------- | ----------- |
| **errorLog** | true | Any type of error or warning will show in the console. Set to false to not show any error in the browser console. |
| **continuePlay** | true | Work only if song is playing from the queue. Auto next song from queue. To pause after every song, set this to false. |
| **customQueue** | false | While setting the song queue. The list will be filtered for only "src" objects. To make queue with own properties in the object, set this to true. |
| **keyBind** | false | Set this true to use keyboard keys to control the audio. Key list is given below. |

### Change Default Settings

```js
let aud = new MJS() 

// OR

let aud = new MJS({
    errorLog: false, // optional {default: true}
    continuePlay: false, // optional {default: true}
    customQueue: true, // optional {default: false}
    keyBind: true // optional {default: false}
})
```

### customQueue
```js
let myAudio = new MJS() // not changing any default setting of the package
let myQueue = [
    { 
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        thumb: '01.jpg'
    },
    { 
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        thumb: '02.jpg'
    },
    { 
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        thumb: '03.jpg'
    }
]
myAudio.QUEUE.set(myQueue)
// the set() function will filter the queue for only src properties.
// Package will make and store the list like:
// [
//     { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
//     { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
//     { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
// ]

```

---

```js
let myAudio = new MJS({customQueue: true}) // changing the default setting for queue
let myQueue = [
    { 
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        thumb: '01.jpg'
    },
    { 
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        thumb: '02.jpg'
    },
    { 
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        thumb: '03.jpg'
    }
]
myAudio.QUEUE.set(myQueue)
// the set() function will no filter the queue and store everything.
// Package will make and store the list like:
// [
//     { 
//         src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//         thumb: '01.jpg'
//     },
//     { 
//         src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//         thumb: '02.jpg'
//     },
//     { 
//         src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//         thumb: '03.jpg'
//    }
// ]

```

---


## Available Public Methods

| Method Name            | Returns      | Parameters           | Description |
| -----------            | -------      | ----------           | ----------- |
| [**setAudio()**](#setAudio)         | Audio Object   | `String`             | Sets the audio source. |
| [**play()**](#play)             | null               | N/A                  | Play the audio. |
| [**pause()**](#pause-and-stop)            | boolean           | N/A                  | Pause the audio. |
| [**toggle()**](#toggle)           | null             | N/A                  | (Pause \| Stop => Play) (Play => Pause) |
| [**stop()**](#pause-and-stop)             | null               | N/A                  | Stop the audio. |
| [**prev()**](#prev-and-next)             | null               | N/A                  | Go to previous Audio. Only work if playing from the Queue. |
| [**next()**](#prev-and-next)             | null               | N/A                  | Go to next audio. Only work if playing from the Queue. |
| [**mute()**](#mute-and-setVolume)             | null               | `Boolean`            | Mute the audio sound. |
| [**seekTo()**](#seekTo)           | Boolean          | `Number`             | Change the audio current playing time. |
| [**setVolume()**](#mute-and-setVolume)        | Boolean       | `Number`             | Sets the audio volume. |
| [**speed()**](#speed)            | Boolean           | `Number`             | Sets the audio playing speed. |
| [**repeat()**](#repeat)           | null             | `Boolean`            | Enable or Disable repeat Mode. |
| [**repeatAB()**](#repeatAB-and-dismissABrepeat)         | null           | (`Number`, `Number`) | Repeat audio from A second to B second. |
| [**dismissABrepeat()**](#repeatAB-and-dismissABrepeat)  | null    | N/A                  | Disable A to B position repeat. |
| [**getCurrentTime()**](#getCurrentTime-and-getAudioDuration)   | Number   | N/A                  | Returns current time of the audio. |
| [**getAudioDuration()**](#getCurrentTime-and-getAudioDuration) | Number | N/A                  | Returns total duration of the audio file. |
| [**getVolumeLevel()**](#getVolumeLevel)   | Number   | N/A                  | Returns sound volume of the audio. |
| [**getAudioSource()**](#getAudioSource)   | String   | N/A                  | Returns URL of the audio. |
| [**getAudioState()**](#getAudioState)    | String    | N/A                  | Returns state of the audio. Play \| Pause \| Stop |
| [**listenKey()**](#listenKey)        | null          | `Boolean`            | Enable \| Disable keyboard keys functions. |

---
## Available Queue Methods
| Method Name                           | Returns | Parameters | Description |
| -----------                           | ------- | ---------- | ----------- |
| [**set()**](#QUEUE.set-and-QUEUE.play)             | null    | `Object`   | Sets the list of audio sources in the queue. |
| [**play()**](#QUEUE.set-and-QUEUE.play)           | Number  | `Number`   | Play the audio from queue from particular index. |
| [**removeAll()**](#QUEUE.removeAll) | null    | N/A        | Clear the queue. |
| [**removeOne()**](#QUEUE.removeOne) | Object  | `Number`   | Remove one object from the list. |
| [**getList()**](#QUEUE.getList)     | Object  | N/A        | Returns the complete queue. |

---

## Functions Usage

### setAudio()
```javascript
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
```

### play() 
```js
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

// OR

let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
myAudio.play()

```

### pause() and stop()
```js
// <button onclick="pauseAudio()">Pause</button>
// <button onclick="stopAudio()">Stop</button>
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

function pauseAudio(){
    myAudio.pause()
}

function stopAudio(){
    myAudio.stop()
}

```

### toggle()
```js
// <button onclick="toggleAudio()">Play / Pause</button>
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

function toggleAudio(){
    myAudio.toggle()
}
```

### prev() and next()
```js
// <button onclick="previousSong()">Previous Song</button>
// <button onclick="nextSong()">Next Song</button>
let myAudio = new MJS()

// prev() and next() functions will only work if song is playing from the queue.
// so set at queue first
myAudio.QUEUE.set([
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
])

// play the audio. 
myAudio.play()

function previousSong(){
    myAudio.prev()
}

function nextSong(){
    myAudio.next()
}
```

### mute() and setVolume()
```js
// <button onclick="muteAudio()">Mute</button>
// <button onclick="volDown()">Volume Down</button>
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

function muteAudio(){
    myAudio.mute()
}

function volDown(){
    myAudio.setVolume(50) // min: 0, max: 100
}
```

### seekTo()
```js
// <input type="range" min="0" max="0" value="0" onchange="seekSong()" id="seeker" />
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()
// set max value of the input tag = total duration of the audio in seconds
myAudio.setAttribute('max', parseInt(myAudio.getAudioDuration()))

function seekSong(){
    let val = document.getElementById("seeker").value
    myAudio.seekTo(val)
}
```

### speed()
```js
// <button onclick="changeSpeed()">Change Speed</button>
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

function changeSpeed(){
    myAudio.speed(2.0) // 1 is default speed { Limit 0.1 to 5}
}
```

### repeat()
```js
// <button onclick="repeatSong()">Repeat Song</button>
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

function repeatSong(){
    myAudio.repeat(true)
} 
```

### repeatAB() and dismissABrepeat()
```js
// <button onclick="repeatFromAB()">Repeat Song from A to B</button>
// <button onclick="disableRepeatAB()">Disable Repeat Song AB</button>
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

function repeatFromAB(){
    myAudio.repeatAB(15, 30)// will repeat the song from 15 seconds to 30 seconds.
}

function disableRepeatAB(){
    myAudio.dismissABrepeat()// Disable repeat from position A to B
}
```

### getCurrentTime() and getAudioDuration()
```js
// <input type="range" min="0" max="100" value="0" id="seek" />
let myAudio = new MJS()
setInterval( () => {
    let elem = document.getElementById("seek")
    elem.setAttribute('max', parseInt(myAudio.getAudioDuration()))
    elem.value = parseInt(myAudio.getCurrentTime())
}, 1000)
```

### getVolumeLevel()
```js
// <button onclick="volumeLevel()">Check Volume</button>
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

function volumeLevel(){
    console.log(myAudio.getVolumeLevel()) // Audio volume from 0 to 100
} 
```

### getAudioSource()
```js
// <button onclick="audSource()">Audio Source</button>
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

function audSource(){
    console.log(myAudio.getAudioSource()) // URL of the audio
} 
```

### getAudioState()
```js
// <button onclick="checkState()">Audio State</button>
let myAudio = new MJS()
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

function checkState(){
    console.log(myAudio.getAudioState()) // play | pause | stop
} 
```

### listenKey()
```js
// <button onclick="disableKeys()">Disable Keys</button>
let myAudio = new MJS({
    keyBind: true // (IMPORTANT) to use listenKey(), set this to true
})
myAudio.setAudio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3").play()

function disableKeys(){
    myAudio.listenKey(false)
}
```


## Queue Functions Usage

### QUEUE.set() and QUEUE.play()
```js
let myAudio = new MJS()
myAudio.QUEUE.set([
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
])
myAudio.play() // play the first song from the list 

// OR

myAudio.QUEUE.play(0) // parameter is the index number of the audio in the list.
```


### QUEUE.removeAll()
```js
let myAudio = new MJS()
myAudio.QUEUE.set([
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
])
myAudio.QUEUE.play(1)

myAudio.QUEUE.removeAll() // empty the list
```


### QUEUE.removeOne()
```js
let myAudio = new MJS()
myAudio.QUEUE.set([
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
])
myAudio.QUEUE.play(0)
myAudio.removeOne(1) // remove 1 audio from 2nd position
```


### QUEUE.getList()
```js
let myAudio = new MJS()
myAudio.QUEUE.set([
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
])
myAudio.QUEUE.play(0)

console.log(myAudio.QUEUE.getList()) // prints the updated list
```
## Keyboard Keys
| Key | Description |
| --- | ----------- |
| s          | Stop the audio |
| p          | Play previous audio (Queue Only) |
| n          | Play next audio (Queue Only) |
| m          | Mute / Unmute audio |
| r          | Enable / Disable Repeat mode |
| space      | Play / Pause |
| + (Numpad) | Volume Up (Max 100) |
| - (Numpad) | Volume Down (Min 0) |
| a          | Capture start position for Repeat A to B |
| b          | Capture end position for Repeat A to B and start repeating. |
|            | **press a or b again to disable A to B Repeat.** |


## Authors

- [@shanuraj715](https://www.github.com/shanuraj715)


---

#### Thank You...