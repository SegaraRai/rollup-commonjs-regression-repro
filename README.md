# @rollup/plugin-commonjs beta regression repro repo

## My environment

- Node v16.10.0
- Windows 10

## Steps to reproduce

1. `npm i`
2. `npm run build` (success expected)
3. replace `"@rollup/plugin-commonjs": "^21.0.3"` with `"@rollup/plugin-commonjs": "22.0.0-14"` in `package.json`
4. `npm i`
5. `npm run build` (failure expected)

## Build result of 21.0.3

```plaintext
PS D:\Projects\rollup-commonjs-regression-repro-2> npm run build

> build
> rollup -c


src/index.ts → dist...
(!) Circular dependencies
node_modules/@aws-crypto/crc32/build/index.js -> node_modules/@aws-crypto/crc32/build/aws_crc32.js -> node_modules/@aws-crypto/crc32/build/index.js
node_modules/@aws-crypto/crc32/build/index.js -> node_modules/@aws-crypto/crc32/build/aws_crc32.js -> D:\Projects\rollup-commonjs-regression-repro-2\node_modules\@aws-crypto\crc32\build\index.js?commonjs-proxy -> node_modules/@aws-crypto/crc32/build/index.js
node_modules/@aws-crypto/crc32c/build/index.js -> node_modules/@aws-crypto/crc32c/build/aws_crc32c.js -> node_modules/@aws-crypto/crc32c/build/index.js
node_modules/@aws-crypto/crc32c/build/index.js -> node_modules/@aws-crypto/crc32c/build/aws_crc32c.js -> D:\Projects\rollup-commonjs-regression-repro-2\node_modules\@aws-crypto\crc32c\build\index.js?commonjs-proxy -> node_modules/@aws-crypto/crc32c/build/index.js
node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js -> node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js -> node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js
created dist in 5.4s
```

## Build result of 22.0.0-14

```plaintext
PS D:\Projects\rollup-commonjs-regression-repro-2> npm run build

> build
> rollup -c


src/index.ts → dist...
[!] Error: Unexpected early exit. This happens when Promises returned by plugins cannot resolve. Unfinished hook action(s) on exit:
(commonjs--resolver) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(commonjs--resolver) resolveId "@aws-crypto/crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(tsconfig-paths) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(tsconfig-paths) resolveId "@aws-crypto/crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(node-resolve) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(node-resolve) resolveId "@aws-crypto/crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(commonjs--resolver) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\EventStreamMarshaller.js"
(tsconfig-paths) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\EventStreamMarshaller.js"
(node-resolve) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\EventStreamMarshaller.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(commonjs) transform "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js"
(tsconfig-paths) resolveId "./aws_crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js"
(commonjs--resolver) resolveId "./aws_crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js"
(node-resolve) resolveId "./aws_crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js"
(commonjs) transform "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js"
(tsconfig-paths) resolveId "./aws_crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js"
(commonjs--resolver) resolveId "./aws_crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js"
(node-resolve) resolveId "./aws_crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js"
(commonjs--resolver) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\splitMessage.js"
(tsconfig-paths) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\splitMessage.js"
(node-resolve) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\splitMessage.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\EventStreamMarshaller.js"
(commonjs) transform "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js"
(tsconfig-paths) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js"
(commonjs--resolver) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js"
(node-resolve) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js"
(commonjs) transform "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js"
(tsconfig-paths) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js"
(commonjs--resolver) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js"
(node-resolve) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\splitMessage.js"
Error: Unexpected early exit. This happens when Promises returned by plugins cannot resolve. Unfinished hook action(s) on exit:
(commonjs--resolver) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(commonjs--resolver) resolveId "@aws-crypto/crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(tsconfig-paths) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(tsconfig-paths) resolveId "@aws-crypto/crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(node-resolve) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(node-resolve) resolveId "@aws-crypto/crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(commonjs--resolver) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\EventStreamMarshaller.js"
(tsconfig-paths) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\EventStreamMarshaller.js"
(node-resolve) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\EventStreamMarshaller.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\middleware-flexible-checksums\\dist-es\\selectChecksumAlgorithmFunction.js"
(commonjs) transform "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js"
(tsconfig-paths) resolveId "./aws_crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js"
(commonjs--resolver) resolveId "./aws_crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js"
(node-resolve) resolveId "./aws_crc32c" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js"
(commonjs) transform "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js"
(tsconfig-paths) resolveId "./aws_crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js"
(commonjs--resolver) resolveId "./aws_crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js"
(node-resolve) resolveId "./aws_crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js"
(commonjs--resolver) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\splitMessage.js"
(tsconfig-paths) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\splitMessage.js"
(node-resolve) resolveId "@aws-crypto/crc32" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\splitMessage.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\EventStreamMarshaller.js"
(commonjs) transform "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js"
(tsconfig-paths) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js"
(commonjs--resolver) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js"
(node-resolve) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js"
(commonjs) transform "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js"
(tsconfig-paths) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js"
(commonjs--resolver) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js"
(node-resolve) resolveId "./index" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32c\\build\\aws_crc32c.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\aws_crc32.js"
(commonjs--resolver) resolveId "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-crypto\\crc32\\build\\index.js" "D:\\Projects\\rollup-commonjs-regression-repro-2\\node_modules\\@aws-sdk\\eventstream-marshaller\\dist-es\\splitMessage.js"
    at process.handleEmptyEventLoop (D:\Projects\rollup-commonjs-regression-repro-2\node_modules\rollup\dist\shared\rollup.js:23072:20)
    at Object.onceWrapper (node:events:510:26)
    at process.emit (node:events:390:28)
```
