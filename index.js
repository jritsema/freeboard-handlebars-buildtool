'use strict';

var fs = require('fs');

var sourceDir = process.argv[2];
var targetFile = process.argv[3];

//load package.json
var packagejson = require(sourceDir + '/package.json');
var widgetId = packagejson.name;
console.log('building %s...', widgetId);

//read and parse targetFile
var targetFileContents = fs.readFileSync(targetFile);
var dashboard = JSON.parse(targetFileContents);

//find widget based on id
var widget = findWidget(dashboard);
if (widget) {

  //read model.js
  var model = fs.readFileSync(sourceDir + '/model.js', { encoding: 'utf8' });

  //read view.html
  var view = fs.readFileSync(sourceDir + '/view.html', { encoding: 'utf8' });

  //read helpers.js
  var helpers = fs.readFileSync(sourceDir + '/helpers.js', { encoding: 'utf8' });

  //update dashboard
  widget.settings.model = model;
  widget.settings.view = view;
  widget.settings.helpers = helpers;

  //serialize and re-write targetFile
  fs.writeFileSync(targetFile, JSON.stringify(dashboard, null, 2));

};

console.log('build complete - %s', targetFile);

function findWidget(dashboard) {
  for (var i in dashboard.panes) {
    var pane = dashboard.panes[i];
    for (var j in pane.widgets) {
      var widget = pane.widgets[j];
      if (widget.id && widget.id === widgetId)
        return widget;
    }
  }
}