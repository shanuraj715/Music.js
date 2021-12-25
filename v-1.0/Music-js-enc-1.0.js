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
 const n = b;
function b(c, d) {
    const e = a();
    b = function (f, g) {
        f = f - 0x1e4;
        let h = e[f];
        return h;
    };
    return b(c, d);
}
(function (c, d) {
    const h = b;
    const e = c();
    while (!![]) {
        try {
            const f = parseInt(h(0x20b)) / 0x1 + -parseInt(h(0x223)) / 0x2 * (-parseInt(h(0x1f6)) / 0x3) + parseInt(h(0x1e8)) / 0x4 + parseInt(h(0x1f8)) / 0x5 + -parseInt(h(0x1fa)) / 0x6 + -parseInt(h(0x21a)) / 0x7 + -parseInt(h(0x209)) / 0x8 * (parseInt(h(0x210)) / 0x9);
            if (f === d) {
                break;
            } else {
                e['push'](e['shift']());
            }
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x87788));
function a() {
    const J = [
        '2rIOENm',
        'Please\x20set\x20the\x20audio\x20source\x20by\x20calling\x20\x22setAudio\x22\x20method',
        'duration',
        'toggle',
        'object',
        'QUEUE',
        'undefined',
        'Unable\x20to\x20get\x20duration\x20of\x20the\x20audio.',
        'play\x20method\x20of\x20QUEUE\x20must\x20accept\x20a\x20parameter\x20of\x20type\x20integer',
        'keypress',
        'setAudio',
        'speed',
        'stop',
        '2674308qCZDYh',
        'play',
        'getAudioDuration',
        'src',
        'next',
        'parametr\x20of\x20method\x20\x27speed\x22\x20must\x20be\x20type\x20of\x20integer',
        'repeatAB',
        'getVolumeLevel',
        'Unable\x20to\x20get\x20current\x20time\x20of\x20the\x20audio.',
        'warn',
        'map',
        'set\x20method\x20of\x20QUEUE\x20must\x20accept\x20a\x20parameter\x20of\x20type\x20object',
        'boolean',
        'webkitAudioContext',
        '1269348ETQeDy',
        'volume',
        '3845900DChRDT',
        'splice',
        '4127928lrYaVu',
        'muted',
        'keyBind',
        'dismissABrepeat',
        'getAudioSource',
        'Value\x20of\x20starting\x20position\x20and\x20ending\x20position\x20is\x20equal\x20in\x20method\x20\x22repeatAB()\x22',
        'Unable\x20to\x20seek\x20the\x20audio\x20because\x20the\x20time\x20is\x20greater\x20than\x20total\x20duration\x20of\x20audio.',
        'error',
        'mute',
        'index\x20out\x20of\x20range\x20from\x20method\x20QUEUE.play()',
        'addEventListener',
        'repeat\x20method\x20must\x20accept\x20a\x20boolean\x20parameter',
        'continuePlay',
        'parameter\x20must\x20be\x20a\x20type\x20of\x20\x22object\x22\x20in\x20\x22constructor\x22',
        'Value\x20of\x20ending\x20position\x20of\x20method\x20\x22repeatAB()\x22\x20is\x20greater\x20than\x20the\x20duration\x20of\x20the\x20audio.',
        '2680rLjwng',
        'AudioContext',
        '765428RLiiXt',
        'seekTo\x20function\x20must\x20accept\x20a\x20parameter\x20of\x20type\x20integer',
        'Value\x20of\x20starting\x20position\x20is\x20greater\x20than\x20the\x20ending\x20position\x20of\x20method\x20\x22repeatAB()\x22',
        'customOueue',
        'Value\x20of\x20starting\x20position\x20of\x20method\x20\x22repeatAB()\x22\x20is\x20greater\x20than\x20the\x20duration\x20of\x20the\x20audio.',
        '15399rEZVPT',
        'errorLog',
        'getCurrentTime',
        'push',
        'pause',
        'Invalid\x20speed\x20range.\x20Range\x20must\x20between\x200.1\x20to\x205',
        'Volume\x20limit\x20must\x20be\x20an\x20integer\x20type.',
        'playbackRate',
        'Already\x20playing',
        'loop',
        '5671680oADPlb',
        'seekTo',
        'currentTime',
        '\x22RepeatAB()\x22\x20method\x20takes\x20only\x20integer\x20parameters.',
        'setVolume',
        'prev',
        'length',
        'repeat',
        '\x22setAudio\x22\x20method\x20must\x20accept\x20an\x20URL\x20as\x20audio\x20source.'
    ];
    a = function () {
        return J;
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
        if (typeof c === i(0x229))
            return;
        if (typeof c !== i(0x227)) {
            console['error'](i(0x207));
            return;
        }
        this.#el = c[i(0x211)] === undefined ? !![] : c[i(0x211)];
        this.#pc = c[i(0x206)] === undefined ? !![] : c['continuePlay'];
        this.#cq = c[i(0x20e)] === undefined ? !![] : c['customOueue'];
        this.#kb = c[i(0x1fc)] === undefined ? ![] : c['keyBind'];
        if (this.#kb)
            document[i(0x204)](i(0x1e4), this.#keyListen);
    }
    #setAudState = c => {
        const j = b;
        switch (c) {
        case 'play':
            this.#playing = !![];
            this.#paused = ![];
            this.#stopped = ![];
            break;
        case 'pause':
            this.#playing = ![];
            this.#paused = !![];
            this.#stopped = ![];
            break;
        case j(0x1e7):
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
            this.#el ? console[k(0x1f1)](k(0x222)) : null;
            return ![];
        }
        this.#ad = c;
        try {
            window['AudioContext'] = window[k(0x20a)] || window[k(0x1f5)];
        } catch (d) {
            console[k(0x201)]('Web\x20Audio\x20API\x20is\x20not\x20supported\x20by\x20the\x20browser.');
            return ![];
        }
        this.#ao = new Audio(c);
        this.#ao['onpause'] = () => {
            const l = k;
            if (parseInt(this.#ao[l(0x21c)]) === parseInt(this.#ao[l(0x225)])) {
                this.#setAudState(l(0x1e7));
            } else {
                this.#setAudState('pause');
            }
        };
        this.#ao['onplay'] = () => {
            const m = k;
            this.#setAudState(m(0x1e9));
        };
        return this.#ao;
    };
    [n(0x1e9)] = () => {
        const o = n;
        if (this.#ad === null) {
            if (this.#queue[o(0x220)] !== 0x0) {
                this[o(0x228)][o(0x1e9)](0x0);
                return;
            }
            this.#el ? console[o(0x1f1)](o(0x224)) : null;
            return;
        }
        if (this.#playing) {
            this.#el ? console['log'](o(0x218)) : null;
            return;
        }
        this.#ao[o(0x1e9)]();
        if (this.#pc && this.#queue[o(0x220)] !== 0x0) {
            this.#interval = setInterval(() => {
                const p = o;
                if (parseInt(this[p(0x212)]()) === parseInt(this['getAudioDuration']())) {
                    !this.#repeating && this[p(0x1ec)]();
                }
            }, 0x1f4);
        }
    };
    [n(0x214)] = () => {
        const q = n;
        if (this.#playing) {
            this.#ao[q(0x214)]();
            return !![];
        }
        return ![];
    };
    [n(0x226)] = () => {
        const r = n;
        if (this.#ad === null) {
            this.#el ? console[r(0x1f1)](r(0x224)) : null;
            return;
        }
        this.#playing ? this[r(0x214)]() : this[r(0x1e9)]();
    };
    [n(0x1e7)] = () => {
        const s = n;
        if (this.#playing || this.#paused) {
            this.#ao[s(0x214)]();
            this.#ao[s(0x21c)] = 0x0;
        }
        clearInterval(this.#interval);
        return !![];
    };
    [n(0x21f)] = () => {
        const t = n;
        let c = this.#queue;
        if (c[t(0x220)] === 0x0)
            return;
        let d = this.#pifq - 0x1;
        if (d >= 0x0) {
            this[t(0x1e7)]();
            this['setAudio'](c[d]['src'])[t(0x1e9)]();
            this.#pifq--;
        }
    };
    [n(0x1ec)] = () => {
        const u = n;
        let c = this.#queue;
        if (c[u(0x220)] === 0x0)
            return;
        let d = this.#pifq + 0x1;
        if (d < c[u(0x220)]) {
            this.#pifq = d;
            this[u(0x1e7)]();
            this[u(0x1e5)](c[d][u(0x1eb)])['play']();
        }
    };
    [n(0x202)] = c => {
        const v = n;
        this.#muted = !!c;
        this.#ao[v(0x1fb)] = !!c;
    };
    ['seekTo'] = c => {
        const w = n;
        if (isNaN(c)) {
            this.#el ? console[w(0x1f1)](w(0x20c)) : null;
            return ![];
        }
        if (c > this.#ao[w(0x225)]) {
            this.#el ? console[w(0x1f1)](w(0x200)) : null;
            return ![];
        }
        this.#ao[w(0x21c)] = c;
        return !![];
    };
    [n(0x21e)] = c => {
        const x = n;
        if (isNaN(c)) {
            this.#el ? console['warn'](x(0x216)) : null;
            return ![];
        }
        c = c < 0x0 ? 0x0 : c > 0x64 ? 0x64 : c;
        this.#ao[x(0x1f7)] = parseInt(c) / 0x64;
        return !![];
    };
    [n(0x1e6)] = c => {
        const y = n;
        if (isNaN(c)) {
            this.#el ? console[y(0x201)](y(0x1ed)) : null;
            return;
        }
        if (parseInt(c) < 0.1 && parseInt(c) > 0x5) {
            this.#el ? console[y(0x201)](y(0x215)) : null;
            return;
        }
        this.#ao[y(0x217)] = c;
        return !![];
    };
    [n(0x221)] = c => {
        const z = n;
        if (typeof c !== z(0x1f4)) {
            this.#el ? console['error'](z(0x205)) : null;
            return;
        }
        this.#repeating = c;
        this.#ao[z(0x219)] = c;
    };
    [n(0x1ee)] = (c, d) => {
        const A = n;
        if (isNaN(c)) {
            this.#el ? console[A(0x201)](A(0x21d)) : null;
            return;
        }
        if (isNaN(d)) {
            this.#el ? console['error'](A(0x21d)) : null;
            return;
        }
        if (parseInt(c) >= this.#ao['duration']) {
            this.#el ? console[A(0x201)](A(0x20f)) : null;
            return;
        }
        if (parseInt(d) > this.#ao[A(0x225)]) {
            this.#el ? console[A(0x201)](A(0x208)) : null;
            return;
        }
        if (parseInt(c) === parseInt(d)) {
            this.#el ? console[A(0x201)](A(0x1ff)) : null;
            return;
        }
        if (c > d) {
            this.#el ? console[A(0x201)](A(0x20d)) : null;
            return;
        }
        if (this.#repAB = !![]) {
            this[A(0x21b)](c);
            this.#ABinter = setInterval(() => {
                const B = A;
                if (parseInt(this.#ao[B(0x21c)]) >= parseInt(d))
                    this[B(0x21b)](c);
            }, 0xc8);
        }
    };
    [n(0x1fd)] = () => {
        this.#repAB = ![];
        clearInterval(this.#ABinter);
    };
    ['QUEUE'] = {
        'set': obj => {
            const C = n;
            if (typeof obj !== 'object') {
                this.#el ? console[C(0x201)](C(0x1f3)) : null;
                return;
            }
            let tempQueue = [];
            obj[C(0x1f2)]((item, index) => {
                const D = C;
                if (item[D(0x1eb)] === undefined) {
                    this.#el ? console[D(0x201)]('missing\x20\x22src\x22\x20value\x20from\x20the\x20object\x20at\x20index\x20' + index) : null;
                    return;
                }
                this.#cq ? tempQueue[D(0x213)](item) : tempQueue[D(0x213)]({ 'src': item[D(0x1eb)] });
            });
            this.#queue = tempQueue;
            return !![];
        },
        'play': index => {
            const E = n;
            if (isNaN(index)) {
                this.#el ? console['error'](E(0x22b)) : null;
                return;
            }
            if (index < 0x0 || index >= this.#queue[E(0x220)]) {
                this.#el ? console[E(0x201)](E(0x203)) : null;
                return;
            }
            this[E(0x1e7)]();
            this[E(0x1e5)](this.#queue[index]['src']);
            this.#pifq = index;
            this[E(0x1e9)]();
            return index;
        },
        'removeAll': () => this.#queue = [] && !![],
        'removeOne': index => {
            const F = n;
            if (isNaN(index)) {
                this.#el ? console[F(0x201)](F(0x22b)) : null;
                return;
            }
            if (index >= 0x0 && index < this.#queue['length']) {
                this.#queue[F(0x1f9)](index, 0x1);
                return this.#queue;
            }
        },
        'getList': () => this.#queue
    };
    ['getCurrentTime'] = () => {
        const G = n;
        if (!this.#ad) {
            this.#el ? console[G(0x1f1)](G(0x1f0)) : null;
            return;
        }
        return this.#ao[G(0x21c)];
    };
    [n(0x1ea)] = () => {
        const H = n;
        if (!this.#ad) {
            this.#el ? console['warn'](H(0x22a)) : null;
            return;
        }
        return this.#ao[H(0x225)];
    };
    [n(0x1ef)] = () => this.#ao[n(0x1f7)] * 0x64;
    [n(0x1fe)] = () => this.#ad[n(0x1eb)];
    ['getAudioState'] = () => this.#playing ? 'play' : this.#paused ? n(0x214) : this.#stopped ? n(0x1e7) : 'unknown';
    ['listenKey'] = c => {
        this.#kb = !!c;
    };
    #keyListen = c => {
        const I = n;
        let d = c['which'];
        switch (d) {
        case 0x73:
            this['stop']();
            break;
        case 0x70:
            this[I(0x21f)]();
            break;
        case 0x6e:
            this[I(0x1ec)]();
            break;
        case 0x6d:
            this[I(0x202)](!this.#muted);
            break;
        case 0x72:
            this['repeat'](!this.#ao[I(0x219)]);
            break;
        case 0x20:
            this[I(0x226)]();
            break;
        case 0x2b:
            this[I(0x21e)](this[I(0x1ef)]() + 0xa);
            break;
        case 0x2d:
            this[I(0x21e)](this[I(0x1ef)]() - 0xa);
            break;
        case 0x61:
            if (this.#repAB) {
                this[I(0x1fd)]();
                return;
            }
            this.#repA = parseInt(this[I(0x212)]());
            break;
        case 0x62:
            if (this.#repAB) {
                this['dismissABrepeat']();
                return;
            }
            this.#repB = parseInt(this[I(0x212)]());
            this.#repAB = !![];
            this[I(0x1ee)](this.#repA, this.#repB);
            break;
        }
    };
}