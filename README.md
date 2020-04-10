# next-filesize
> Get filesize based on filesize.js.

## installation
```bash
npm install -S @feizheng/next-filesize
```

## usage
```js
import '@feizheng/next-filesize';

nx.filesize(filename) //421 B
nx.filesize(filename, { bits: true }) // 3.29 Kb
```

## resources
- https://github.com/avoidwork/filesize.js
- https://stackoverflow.com/questions/42363140/how-to-find-the-size-of-the-file-in-node-js
