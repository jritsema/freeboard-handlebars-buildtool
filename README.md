freeboard-handlebars-buildtool
==============================

A tool that builds a freeboard-handlebars widget package directory into a dashboard.json file that can be loaded by freeboard.

This is a development tool for authoring [freeboard-handlebars](http://github.com/jritsema/freeboard-handlebars) widgets for the [freeboard](http://freeboard.io) open source dashboard framework.

To use the tool, you create a directory for your handlebars widget along with the individual files that make it up as well as a package.json, something like the following:

    /my-widget/package.json
    /my-widget/view.html
    /my-widget/model.js
    /my-widget/helpers.js

The build tool then assembles the contents of these files into a dashboard.json file that can be loaded into freeboard.  The following is an example of how to run the build program.

`
$ node . widget-directory path-to-target-json-file
`

Note that the tool assumes that the target .json file exists and is initialized (i.e., already saved from freeboard). It also assumes that id properties have been manually added to the widgets in the json file in order to identify the widget. The name in the widget's package.json is used to identify the item in the target .json file to be updated.

To have the dashboard.json file automatically updated whenever the widget source changes, you can run the following using [nodemon](http://nodemon.io)

    $ git clone https://github.com/jritsema/freeboard-handlebars-buildtool.git
    $ cd freeboard-handlebars-buildtool
    $ nodemon . /my-widget /freeboard/dashboard.json -w /my-widget -e js,html,json

This will re-write dashboard.json any time a .js or .html file changes in the widget package 