# next-filesize
> Get filesize based on filesize lib.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-filesize
```

## usage
```js
import '@jswork/next-filesize';

nx.filesize(filename) //421 B
nx.filesize(filename, { bits: true }) // 3.29 Kb
```

## resources
- https://github.com/avoidwork/filesize.js
- https://stackoverflow.com/questions/42363140/how-to-find-the-size-of-the-file-in-node-js


## license
Code released under [the MIT license](https://github.com/afeiship/next-filesize/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-filesize
[version-url]: https://npmjs.org/package/@jswork/next-filesize

[license-image]: https://img.shields.io/npm/l/@jswork/next-filesize
[license-url]: https://github.com/afeiship/next-filesize/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-filesize
[size-url]: https://github.com/afeiship/next-filesize/blob/master/dist/next-filesize.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-filesize
[download-url]: https://www.npmjs.com/package/@jswork/next-filesize
