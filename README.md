# react-testing-extended

Extends [react-testing-library](https://github.com/testing-library/react-testing-library) by including additional functionality for more natural testing.

## Usage

`yarn add --dev react-testing-extended`

Follow the react-testing-library documentation, but instead of importing _@testing-library/react_, import `"react-testing-extended"`. 

## New Features

In additional to the [react-testing-library documentation](https://testing-library.com/react), this library adds the following:

#### `id` Selectors

- queryById
- queryAllById
- getById
- getAllById
- findAllById
- findById

#### `class` Selectors

- queryAllByClass
- getAllByClass
- findAllByClass

## Versioning

This library will follow the major version numbering of react-testing-library.