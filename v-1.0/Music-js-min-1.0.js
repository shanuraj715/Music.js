/**
 *   |------------------------------------------------------------------|
 *   | ------------------------- VERSION: 1.0 ------------------------- |
 *   | -----------Licensed To: SHANU RAJ { New Delhi, INDIA}----------- |
 *   | --------Developer GitHub: HTTPS://GITHUB.COM/SHANURAJ715-------- |
 *   | -------GitHub Repository: HTTPS://GITHUB.COM/SHANURAJ715/------- |
 *   | ------------Developer Email: shanuraj715@gmail.com-------------- |
 *   |																	|
 *   | ----This class is free to use and can be modify by anyone.------ |
 *   | -------You can use this in your projects and products----------- |
 *   | --- CODE AVAILABILITY: Plain Code, Minified, Encrypted (HEX) --- |
 *   |------------------------------------------------------------------|
 */
class MJS{#el=!0
#pc=!0
#cq=!1
#kb=!0
#ad=null
#ao=null
#paused=!1
#playing=!1
#stopped=!1
#muted=!1
#repeating=!1
#ABinter
#repAB=!1
#repA
#repB
#pifq=0
#queue=[]
#interval
constructor(obj){if(typeof obj==='undefined')return
if(typeof obj!=="object"){console.error("parameter must be a type of \"object\" in \"constructor\"")
return}
this.#el=obj.errorLog===undefined?!0:obj.errorLog
this.#pc=obj.continuePlay===undefined?!0:obj.continuePlay
this.#cq=obj.customOueue===undefined?!0:obj.customOueue
this.#kb=obj.keyBind===undefined?!0:obj.keyBind
if(this.#kb)document.addEventListener('keypress',this.#keyListen)}
#setAudState=audState=>{switch(audState){case "play":this.#playing=!0
this.#paused=!1
this.#stopped=!1
break
case "pause":this.#playing=!1
this.#paused=!0
this.#stopped=!1
break
case "stop":this.#playing=!1
this.#paused=!1
this.#stopped=!0
break}
return!0}
setAudio=url=>{if(!url){this.#el?console.warn("\"setAudio\" method must accept an URL as audio source."):null
return!1}
this.#ad=url
try{window.AudioContext=window.AudioContext||window.webkitAudioContext}catch(e){console.error("Web Audio API is not supported by the browser.")
return!1}
this.#ao=new Audio(url)
this.#ao.onpause=()=>{if(parseInt(this.#ao.currentTime)===parseInt(this.#ao.duration)){this.#setAudState('stop')}else{this.#setAudState('pause')}}
this.#ao.onplay=()=>{this.#setAudState('play')}
return this.#ao}
play=()=>{if(this.#ad===null){if((this.#queue).length!==0){this.QUEUE.play(0)
return}
this.#el?console.warn("Please set the audio source by calling \"setAudio\" method"):null
return}
if(this.#playing){this.#el?console.log("Already playing"):null
return}
this.#ao.play()
if(this.#pc&&this.#queue.length!==0){this.#interval=setInterval(()=>{if(parseInt(this.getCurrentTime())===parseInt(this.getAudioDuration())){!this.#repeating&&this.next()}},500)}}
pause=()=>{if(this.#playing){this.#ao.pause()
return!0}
return!1}
toggle=()=>{if(this.#ad===null){this.#el?console.warn("Please set the audio source by calling \"setAudio\" method"):null
return}
this.#playing?this.pause():this.play()}
stop=()=>{if(this.#playing||this.#paused){this.#ao.pause()
this.#ao.currentTime=0}
clearInterval(this.#interval)
return!0}
prev=()=>{let queue=this.#queue
if(queue.length===0)return
let prevIndex=this.#pifq-1
if(prevIndex>=0){this.stop()
this.setAudio(queue[prevIndex].src).play()
this.#pifq--}}
next=()=>{let queue=this.#queue
if(queue.length===0)return
let nextIndex=this.#pifq+1
if(nextIndex<queue.length){this.#pifq=nextIndex
this.stop()
this.setAudio(queue[nextIndex].src).play()}}
mute=bool=>{this.#muted=!!bool
this.#ao.muted=!!bool}
seekTo=sec=>{if(isNaN(sec)){this.#el?console.warn("seekTo function must accept a parameter of type integer"):null
return!1}
if(sec>this.#ao.duration){this.#el?console.warn("Unable to seek the audio because the time is greater than total duration of audio."):null
return!1}
this.#ao.currentTime=sec
return!0}
setVolume=vol=>{if(isNaN(vol)){this.#el?console.warn("Volume limit must be an integer type."):null
return!1}
vol=vol<0?0:vol>100?100:vol
this.#ao.volume=parseInt(vol)/100
return!0}
speed=val=>{if(isNaN(val)){this.#el?console.error("parametr of method \'speed\" must be type of integer"):null
return}
if(parseInt(val)<0.1&&parseInt(val)>5){this.#el?console.error("Invalid speed range. Range must between 0.1 to 5"):null
return}
this.#ao.playbackRate=val
return!0}
repeat=bool=>{if(typeof bool!=="boolean"){this.#el?console.error("repeat method must accept a boolean parameter"):null
return}
this.#repeating=bool
this.#ao.loop=bool}
repeatAB=(from,to)=>{if(isNaN(from)){this.#el?console.error("\"RepeatAB()\" method takes only integer parameters."):null
return}
if(isNaN(to)){this.#el?console.error("\"RepeatAB()\" method takes only integer parameters."):null
return}
if(parseInt(from)>=this.#ao.duration){this.#el?console.error("Value of starting position of method \"repeatAB()\" is greater than the duration of the audio."):null
return}
if(parseInt(to)>this.#ao.duration){this.#el?console.error("Value of ending position of method \"repeatAB()\" is greater than the duration of the audio."):null
return}
if(parseInt(from)===parseInt(to)){this.#el?console.error("Value of starting position and ending position is equal in method \"repeatAB()\""):null
return}
if(from>to){this.#el?console.error("Value of starting position is greater than the ending position of method \"repeatAB()\""):null
return}
if(this.#repAB=!0){this.seekTo(from)
this.#ABinter=setInterval(()=>{if(parseInt(this.#ao.currentTime)>=parseInt(to))this.seekTo(from)},200)}}
dismissABrepeat=()=>{this.#repAB=!1
clearInterval(this.#ABinter)}
QUEUE={set:obj=>{if(typeof obj!=='object'){this.#el?console.error("set method of QUEUE must accept a parameter of type object"):null
return}
let tempQueue=[]
obj.map((item,index)=>{if(item.src===undefined){this.#el?console.error("missing \"src\" value from the object at index "+index):null
return}
this.#cq?tempQueue.push(item):tempQueue.push({src:item.src})})
this.#queue=tempQueue
return!0},play:index=>{if(isNaN(index)){this.#el?console.error("play method of QUEUE must accept a parameter of type integer"):null
return}
if(index<0||index>=(this.#queue).length){this.#el?console.error("index out of range from method QUEUE.play()"):null
return}
this.stop()
this.setAudio(this.#queue[index].src)
this.#pifq=index
this.play()
return index},removeAll:()=>this.#queue=[]&&!0,removeOne:index=>{if(isNaN(index)){this.#el?console.error("play method of QUEUE must accept a parameter of type integer"):null
return}
if(index>=0&&index<(this.#queue).length){(this.#queue).splice(index,1)
return this.#queue}},getList:()=>this.#queue}
getCurrentTime=()=>{if(!this.#ad){this.#el?console.warn("Unable to get current time of the audio."):null
return}
return this.#ao.currentTime}
getAudioDuration=()=>{if(!this.#ad){this.#el?console.warn("Unable to get duration of the audio."):null
return}
return this.#ao.duration}
getVolumeLevel=()=>this.#ao.volume*100
getAudioSource=()=>this.#ad.src
getAudioState=()=>this.#playing?'play':this.#paused?'pause':this.#stopped?'stop':'unknown'
listenKey=bool=>{this.#kb=!!bool}
#keyListen=e=>{let key=e.which
switch(key){case 115:this.stop()
break
case 112:this.prev()
break
case 110:this.next()
break
case 109:this.mute(!this.#muted)
break
case 114:this.repeat()
break
case 32:this.toggle()
break
case 43:this.setVolume(this.getVolumeLevel()+10)
break
case 45:this.setVolume(this.getVolumeLevel()-10)
break
case 97:if(this.#repAB){this.dismissABrepeat()
return}
this.#repA=parseInt(this.getCurrentTime())
break
case 98:if(this.#repAB){this.dismissABrepeat()
return}
this.#repB=parseInt(this.getCurrentTime())
this.#repAB=!0
this.repeatAB(this.#repA,this.#repB)
break}}}