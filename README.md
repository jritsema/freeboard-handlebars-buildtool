freeboard-handlebars-buildtool
===============================

A tool that builds a freeboard-handlebars widget package directory into a dashboard.json file that can be loaded by freeboard.

The tool can update a widget's settings in a freeboard dashboard.json file.  Takes freeboard dashboard json as stdin, tries to read view.html, model.js, and helpers.js, and then serializes them into the dashboard json.

**Usage**

Install tool as a dev dependency in your handlebars widget project folder (see [freeboard-handlebars-widget](https://github.com/jritsema/freeboard-handlebars-widget))...

`$ npm install --save-dev freeboard-handlebars-buildtool`

Then you can create an npm script to auto-update your dashboard.json with something like...

`$ cat dashboard.json | freeboard-handlebars-buildtool > temp && cp temp dashboard.json && rm temp`
