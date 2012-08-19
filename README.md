# example-libglobal

This is an example of building a JavaScript library with AMD modules and using
requirejs while in dev, but then building a file for distribution that does
not require an AMD loader. The built file will work either with browser globals
or with an AMD loader.

The library also depends on two other libraries:

* jQuery, which registers as an AMD library.
* underscore, which does not register as an AMD library. So the
[requirejs shim config](http://requirejs.org/docs/api.html#config-shim) is used
when loading underscore in an AMD setting.

When the library is built, it **excludes** jQuery and underscore from the
built library. Consumers of the built library will  provide a jQuery and
underscore for the library. If the consumer uses an AMD loader, then the built
file will ask for 'jquery' and 'underscore' as AMD dependencies. If the consumer
just uses browser globals and script tags, the library will grab the `$` and
`_` global variables and use them for the jQuery and underscore dependencies.

The built library also does not include require.js in the file, but instead
uses [almond](https://github.com/jrburke/almond), a small AMD API
implementation, that allows the built file's internal modules to work. These
internal modules and this version of almond are not visible outside the built
file, just used internally by the built file for code organization and
referencing.

## File structure

This project creates a library called **principium.js**. This is just a made
up name that hopefully is easy to search and replace if you use this as a
template to create your own library.

* **dist/principium.js**: the built library suitable for distribution.
* **lib**: contains lib scripts used during dev and testing.
* **tests**: the QUnit-based tests.
* **tools**: the helper tools/scripts used to build the output file.
* **principium**: holds the sub-modules used by the main `principium.js` module
to help implement the library's functionality.
* **principium.js**: the main module entry point for the source-form of the
library.

## How to do development

* Modify `principium.js` and its submodules in the `principium` directory.
* Create tests for the functionality in the `tests` directory.
* Load `tests/index.html` to run the tests.

## How to build the library

The r.js optimizer can be run in Node or Rhino. See the
[r.js README](https://github.com/jrburke/r.js) for instructions on how to run
the optimizer in Rhino. For running in Node, run this command in the
same directory as this README:

    node tools/r.js -o tools/build.js

This will generate the built file in `dist/principium.js`.

**Test** the built file by running these files:

* **tests/index-dist-amd.html**: For testing the dist version of the library
with an AMD loader.
* **tests/index-dist-global.html**: For testing the dist version of the library
in a "browser globals and script tags" environment.

## What to tell developers of your built library

You can tell them this library can be used with other AMD modules, or it can be
used in a project that uses browser globals and HTML script tags.

If the library depends on scripts that are not AMD modules (like this example,
which uses underscore), then you may need to inform developers who use your
libary what shim config you used if they want to use this library in an AMD
project.
