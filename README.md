## Description
This is a spike project to test the flexibility of the Yup validation library with the Tape testing framework.

- [x] schema string validation with regex pattern.

## Installation
To set up the project, you need to have Node.js installed. Clone the repository and run the following command to install the dependencies:

```console
pnpm install # or npm install
```

## test

Note, there should be one 
```console
➜ pnpm test

> reg-fs@0.0.1-0 test
> ts-node src

TAP version 13
# Regex tests with regex only
ok 1 Expected true for $7,777.77
ok 2 Expected true for $777.77
ok 3 Expected true for $ 777.77
ok 4 Expected false for $7777,777.77
ok 5 Expected false for $777
ok 6 Expected false for $777.7
ok 7 Expected false for $777.
ok 8 Expected false for $7,77.77
ok 9 Expected false for $77,7.77
ok 10 Expected false for $777,.77
ok 11 Expected false for $7,777.777


### Debug details when a test fails.
not ok 12 Expected true for $7,777.666
  ---
    operator: equal
    expected: true
    actual:   false
    at: Test.<anonymous> ({{home}}/.reprod/2024/07/12/reg-fs/src/index.ts:51:7)
    stack: |-
      Error: Expected true for $7,777.666
          at Test.assert [as _assert] ({{home}}/.reprod/2024/07/12/reg-fs/node_modules/tape/lib/test.js:492:48)
          at Test.strictEqual ({{home}}/.reprod/2024/07/12/reg-fs/node_modules/tape/lib/test.js:670:7)
          at Test.<anonymous> ({{home}}/.reprod/2024/07/12/reg-fs/src/index.ts:51:7)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
  ...

1..12
# tests 12
# pass  11
# fail  1

```
