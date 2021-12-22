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
function b(c, d) {
    const e = a();
    b = function (f, g) {
        f = f - 0x17e;
        let h = e[f];
        return h;
    };
    return b(c, d);
}
const n = b;
(function (c, d) {
    const h = b;
    const e = c();
    while (!![]) {
        try {
            const f = -parseInt(h(0x1c0)) / 0x1 * (-parseInt(h(0x198)) / 0x2) + parseInt(h(0x183)) / 0x3 * (-parseInt(h(0x195)) / 0x4) + parseInt(h(0x1bf)) / 0x5 * (parseInt(h(0x181)) / 0x6) + -parseInt(h(0x185)) / 0x7 * (-parseInt(h(0x1ba)) / 0x8) + parseInt(h(0x188)) / 0x9 + parseInt(h(0x1c4)) / 0xa + -parseInt(h(0x1bd)) / 0xb;
            if (f === d) {
                break;
            } else {
                e['push'](e['shift']());
            }
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x25f71));
function a() {
    const I = [
        'which',
        '2599810xHhihu',
        'Invalid\x20speed\x20range.\x20Range\x20must\x20between\x200.1\x20to\x205',
        'boolean',
        'getAudioState',
        'undefined',
        'muted',
        '40422Vofamb',
        'listenKey',
        '227499llAglb',
        'seekTo\x20function\x20must\x20accept\x20a\x20parameter\x20of\x20type\x20integer',
        '28QEXCcy',
        'next',
        'Value\x20of\x20ending\x20position\x20of\x20method\x20\x22repeatAB()\x22\x20is\x20greater\x20than\x20the\x20duration\x20of\x20the\x20audio.',
        '1210410RzmXon',
        'play\x20method\x20of\x20QUEUE\x20must\x20accept\x20a\x20parameter\x20of\x20type\x20integer',
        'duration',
        'addEventListener',
        'setAudio',
        'Web\x20Audio\x20API\x20is\x20not\x20supported\x20by\x20the\x20browser.',
        'speed',
        'repeat',
        'playbackRate',
        'setVolume',
        'Unable\x20to\x20seek\x20the\x20audio\x20because\x20the\x20time\x20is\x20greater\x20than\x20total\x20duration\x20of\x20audio.',
        'play',
        'getAudioDuration',
        '8iddlHU',
        'warn',
        'index\x20out\x20of\x20range\x20from\x20method\x20QUEUE.play()',
        '484VDvnrL',
        'getVolumeLevel',
        'continuePlay',
        'currentTime',
        'pause',
        'onplay',
        'log',
        'repeat\x20method\x20must\x20accept\x20a\x20boolean\x20parameter',
        'Value\x20of\x20starting\x20position\x20is\x20greater\x20than\x20the\x20ending\x20position\x20of\x20method\x20\x22repeatAB()\x22',
        'prev',
        'set\x20method\x20of\x20QUEUE\x20must\x20accept\x20a\x20parameter\x20of\x20type\x20object',
        'Volume\x20limit\x20must\x20be\x20an\x20integer\x20type.',
        '\x22RepeatAB()\x22\x20method\x20takes\x20only\x20integer\x20parameters.',
        'src',
        'getAudioSource',
        'error',
        'keyBind',
        'seekTo',
        'repeatAB',
        'length',
        'toggle',
        'Unable\x20to\x20get\x20current\x20time\x20of\x20the\x20audio.',
        'object',
        'mute',
        'push',
        'getCurrentTime',
        'keypress',
        'customOueue',
        'volume',
        'Value\x20of\x20starting\x20position\x20and\x20ending\x20position\x20is\x20equal\x20in\x20method\x20\x22repeatAB()\x22',
        'parameter\x20must\x20be\x20a\x20type\x20of\x20\x22object\x22\x20in\x20\x22constructor\x22',
        'onpause',
        'AudioContext',
        'Please\x20set\x20the\x20audio\x20source\x20by\x20calling\x20\x22setAudio\x22\x20method',
        '400056mrYRrh',
        'stop',
        'dismissABrepeat',
        '5992987FkMdxG',
        'loop',
        '155eHVpDB',
        '201HoCJer',
        'map',
        'parametr\x20of\x20method\x20\x27speed\x22\x20must\x20be\x20type\x20of\x20integer'
    ];
    a = function () {
        return I;
    };
    return a();
}
class MJS {
    #el = !![];
    #pc = !![];
    #cq = ![];
    #kb = !![];
    #ad = null;
    #ao = null;
    #paused = ![];
    #playing = ![];
    #stopped = ![];
    #muted = ![];
    #repeating = ![];
    #ABinter;
    #repAB = ![];
    #repA;
    #repB;
    #pifq = 0x0;
    #queue = [];
    #interval;
    constructor(c) {
        const i = b;
        if (typeof c === i(0x17f))
            return;
        if (typeof c !== i(0x1ae)) {
            console[i(0x1a7)](i(0x1b6));
            return;
        }
        this.#el = c['errorLog'] === undefined ? !![] : c['errorLog'];
        this.#pc = c[i(0x19a)] === undefined ? !![] : c['continuePlay'];
        this.#cq = c[i(0x1b3)] === undefined ? !![] : c[i(0x1b3)];
        this.#kb = c[i(0x1a8)] === undefined ? !![] : c['keyBind'];
        if (this.#kb)
            document[i(0x18b)](i(0x1b2), this.#keyListen);
    }
    #setAudState = c => {
        const j = b;
        switch (c) {
        case j(0x193):
            this.#playing = !![];
            this.#paused = ![];
            this.#stopped = ![];
            break;
        case j(0x19c):
            this.#playing = ![];
            this.#paused = !![];
            this.#stopped = ![];
            break;
        case 'stop':
            this.#playing = ![];
            this.#paused = ![];
            this.#stopped = !![];
            break;
        }
        return !![];
    };
    ['setAudio'] = c => {
        const k = b;
        if (!c) {
            this.#el ? console['warn']('\x22setAudio\x22\x20method\x20must\x20accept\x20an\x20URL\x20as\x20audio\x20source.') : null;
            return ![];
        }
        this.#ad = c;
        try {
            window[k(0x1b8)] = window[k(0x1b8)] || window['webkitAudioContext'];
        } catch (d) {
            console[k(0x1a7)](k(0x18d));
            return ![];
        }
        this.#ao = new Audio(c);
        this.#ao[k(0x1b7)] = () => {
            const l = k;
            if (parseInt(this.#ao[l(0x19b)]) === parseInt(this.#ao[l(0x18a)])) {
                this.#setAudState(l(0x1bb));
            } else {
                this.#setAudState(l(0x19c));
            }
        };
        this.#ao[k(0x19d)] = () => {
            const m = k;
            this.#setAudState(m(0x193));
        };
        return this.#ao;
    };
    [n(0x193)] = () => {
        const o = n;
        if (this.#ad === null) {
            if (this.#queue[o(0x1ab)] !== 0x0) {
                this['QUEUE'][o(0x193)](0x0);
                return;
            }
            this.#el ? console[o(0x196)](o(0x1b9)) : null;
            return;
        }
        if (this.#playing) {
            this.#el ? console[o(0x19e)]('Already\x20playing') : null;
            return;
        }
        this.#ao['play']();
        if (this.#pc && this.#queue['length'] !== 0x0) {
            this.#interval = setInterval(() => {
                const p = o;
                if (parseInt(this['getCurrentTime']()) === parseInt(this[p(0x194)]())) {
                    !this.#repeating && this[p(0x186)]();
                }
            }, 0x1f4);
        }
    };
    [n(0x19c)] = () => {
        const q = n;
        if (this.#playing) {
            this.#ao[q(0x19c)]();
            return !![];
        }
        return ![];
    };
    [n(0x1ac)] = () => {
        const r = n;
        if (this.#ad === null) {
            this.#el ? console[r(0x196)]('Please\x20set\x20the\x20audio\x20source\x20by\x20calling\x20\x22setAudio\x22\x20method') : null;
            return;
        }
        this.#playing ? this[r(0x19c)]() : this[r(0x193)]();
    };
    ['stop'] = () => {
        const s = n;
        if (this.#playing || this.#paused) {
            this.#ao[s(0x19c)]();
            this.#ao['currentTime'] = 0x0;
        }
        clearInterval(this.#interval);
        return !![];
    };
    ['prev'] = () => {
        const t = n;
        let c = this.#queue;
        if (c[t(0x1ab)] === 0x0)
            return;
        let d = this.#pifq - 0x1;
        if (d >= 0x0) {
            this[t(0x1bb)]();
            this[t(0x18c)](c[d][t(0x1a5)])[t(0x193)]();
            this.#pifq--;
        }
    };
    ['next'] = () => {
        const u = n;
        let c = this.#queue;
        if (c[u(0x1ab)] === 0x0)
            return;
        let d = this.#pifq + 0x1;
        if (d < c[u(0x1ab)]) {
            this.#pifq = d;
            this[u(0x1bb)]();
            this[u(0x18c)](c[d][u(0x1a5)])[u(0x193)]();
        }
    };
    [n(0x1af)] = c => {
        const v = n;
        this.#muted = !!c;
        this.#ao[v(0x180)] = !!c;
    };
    ['seekTo'] = c => {
        const w = n;
        if (isNaN(c)) {
            this.#el ? console[w(0x196)](w(0x184)) : null;
            return ![];
        }
        if (c > this.#ao[w(0x18a)]) {
            this.#el ? console[w(0x196)](w(0x192)) : null;
            return ![];
        }
        this.#ao[w(0x19b)] = c;
        return !![];
    };
    [n(0x191)] = c => {
        const x = n;
        if (isNaN(c)) {
            this.#el ? console[x(0x196)](x(0x1a3)) : null;
            return ![];
        }
        c = c < 0x0 ? 0x0 : c > 0x64 ? 0x64 : c;
        this.#ao['volume'] = parseInt(c) / 0x64;
        return !![];
    };
    [n(0x18e)] = c => {
        const y = n;
        if (isNaN(c)) {
            this.#el ? console['error'](y(0x1c2)) : null;
            return;
        }
        if (parseInt(c) < 0.1 && parseInt(c) > 0x5) {
            this.#el ? console[y(0x1a7)](y(0x1c5)) : null;
            return;
        }
        this.#ao[y(0x190)] = c;
        return !![];
    };
    [n(0x18f)] = c => {
        const z = n;
        if (typeof c !== z(0x1c6)) {
            this.#el ? console[z(0x1a7)](z(0x19f)) : null;
            return;
        }
        this.#repeating = c;
        this.#ao[z(0x1be)] = c;
    };
    ['repeatAB'] = (c, d) => {
        const A = n;
        if (isNaN(c)) {
            this.#el ? console[A(0x1a7)](A(0x1a4)) : null;
            return;
        }
        if (isNaN(d)) {
            this.#el ? console['error'](A(0x1a4)) : null;
            return;
        }
        if (parseInt(c) >= this.#ao[A(0x18a)]) {
            this.#el ? console['error']('Value\x20of\x20starting\x20position\x20of\x20method\x20\x22repeatAB()\x22\x20is\x20greater\x20than\x20the\x20duration\x20of\x20the\x20audio.') : null;
            return;
        }
        if (parseInt(d) > this.#ao[A(0x18a)]) {
            this.#el ? console[A(0x1a7)](A(0x187)) : null;
            return;
        }
        if (parseInt(c) === parseInt(d)) {
            this.#el ? console[A(0x1a7)](A(0x1b5)) : null;
            return;
        }
        if (c > d) {
            this.#el ? console[A(0x1a7)](A(0x1a0)) : null;
            return;
        }
        if (this.#repAB = !![]) {
            this[A(0x1a9)](c);
            this.#ABinter = setInterval(() => {
                if (parseInt(this.#ao['currentTime']) >= parseInt(d))
                    this['seekTo'](c);
            }, 0xc8);
        }
    };
    [n(0x1bc)] = () => {
        this.#repAB = ![];
        clearInterval(this.#ABinter);
    };
    ['QUEUE'] = {
        'set': obj => {
            const B = n;
            if (typeof obj !== B(0x1ae)) {
                this.#el ? console[B(0x1a7)](B(0x1a2)) : null;
                return;
            }
            let tempQueue = [];
            obj[B(0x1c1)]((item, index) => {
                const C = B;
                if (item[C(0x1a5)] === undefined) {
                    this.#el ? console[C(0x1a7)]('missing\x20\x22src\x22\x20value\x20from\x20the\x20object\x20at\x20index\x20' + index) : null;
                    return;
                }
                this.#cq ? tempQueue['push'](item) : tempQueue[C(0x1b0)]({ 'src': item['src'] });
            });
            this.#queue = tempQueue;
            return !![];
        },
        'play': index => {
            const D = n;
            if (isNaN(index)) {
                this.#el ? console['error'](D(0x189)) : null;
                return;
            }
            if (index < 0x0 || index >= this.#queue[D(0x1ab)]) {
                this.#el ? console[D(0x1a7)](D(0x197)) : null;
                return;
            }
            this['stop']();
            this[D(0x18c)](this.#queue[index][D(0x1a5)]);
            this.#pifq = index;
            this[D(0x193)]();
            return index;
        },
        'removeAll': () => this.#queue = [] && !![],
        'removeOne': index => {
            const E = n;
            if (isNaN(index)) {
                this.#el ? console[E(0x1a7)](E(0x189)) : null;
                return;
            }
            if (index >= 0x0 && index < this.#queue[E(0x1ab)]) {
                this.#queue['splice'](index, 0x1);
                return this.#queue;
            }
        },
        'getList': () => this.#queue
    };
    [n(0x1b1)] = () => {
        const F = n;
        if (!this.#ad) {
            this.#el ? console['warn'](F(0x1ad)) : null;
            return;
        }
        return this.#ao[F(0x19b)];
    };
    ['getAudioDuration'] = () => {
        const G = n;
        if (!this.#ad) {
            this.#el ? console['warn']('Unable\x20to\x20get\x20duration\x20of\x20the\x20audio.') : null;
            return;
        }
        return this.#ao[G(0x18a)];
    };
    [n(0x199)] = () => this.#ao[n(0x1b4)] * 0x64;
    [n(0x1a6)] = () => this.#ad[n(0x1a5)];
    [n(0x17e)] = () => this.#playing ? n(0x193) : this.#paused ? n(0x19c) : this.#stopped ? n(0x1bb) : 'unknown';
    [n(0x182)] = c => {
        this.#kb = !!c;
    };
    #keyListen = c => {
        const H = n;
        let d = c[H(0x1c3)];
        switch (d) {
        case 0x73:
            this[H(0x1bb)]();
            break;
        case 0x70:
            this[H(0x1a1)]();
            break;
        case 0x6e:
            this[H(0x186)]();
            break;
        case 0x6d:
            this[H(0x1af)](!this.#muted);
            break;
        case 0x72:
            this[H(0x18f)]();
            break;
        case 0x20:
            this['toggle']();
            break;
        case 0x2b:
            this[H(0x191)](this[H(0x199)]() + 0xa);
            break;
        case 0x2d:
            this[H(0x191)](this['getVolumeLevel']() - 0xa);
            break;
        case 0x61:
            if (this.#repAB) {
                this[H(0x1bc)]();
                return;
            }
            this.#repA = parseInt(this[H(0x1b1)]());
            break;
        case 0x62:
            if (this.#repAB) {
                this[H(0x1bc)]();
                return;
            }
            this.#repB = parseInt(this[H(0x1b1)]());
            this.#repAB = !![];
            this[H(0x1aa)](this.#repA, this.#repB);
            break;
        }
    };
}