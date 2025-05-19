# Tests
Tests are written using `jest`. They test the PEKA implementation of the `ApiInterface`, to verify it correctly translates the responses.

## Running tests

```
npm test
```

## Data
Test data and samples are located in the `data` directory. Usually every `peka.json` file has a corresponding `node.json` file, which acts as the expected result when testing the response converters.

The files' content is accessible with the helper methods (`helpers.ts`), such as `getFileJson`