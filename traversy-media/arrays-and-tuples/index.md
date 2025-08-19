We can install tsc (typescript compiler) globally using npm with the -g flag.

```bash
sudo npm install -g typescript
```

Since it will need to write to directories outside home we need to give it `sudo` priviligies.
We can then verify the installation:

```bash
npm list -g
or
tsc -v
```

We can compile typescript files with tsc <filename>, we don't need to specify the `ts` or `tsx` extension
Comments are preserved.
By default it will compile to ES5 JavaScript (before `let` and `const` keywords were introducted),
but we can change this behavior with the `tsconfig.json` config file.

We can instead watch a file for changes:

```bash
tsc --watch <filename>
```

We can generate a `tsconfig.json` file with `tsc --init`
