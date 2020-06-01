# NgWorkflowSvgJs

[workflow-svg.js](https://github.com/thomaswruss/workflow-svg.js) is a library to display workflows as SVG. This library  is an Angular Wrapper for it.

## How to use

~~~~
<ng-workflow-svg-js
  [id] = "'some-id'"
  [width] = "500"
  [height] = "500"
  [(entities)] = "entities"
  [(lines)] = "lines"
  [configuration] = "configuration"
  ></ng-workflow-svg-js>
~~~~
|Attribute|Type|In-Param|Out-Param|
|---|---|---|---|
|id|string|&#10004;|&#9744;|
|width|number|&#10004;|&#9744;|
|height|number|&#10004;|&#9744;|
|entities|NgWorkflowSvgJsEntity[]|&#10004;|&#10004;|
|lines|NgWorkflowSvgJsLine[]|&#10004;|&#10004;|
|configuration|NgWorkflowSvgJsConfiguration|&#10004;|&#9744;|

## How to install

1. Install the library via npm
~~~~
npm install ng-workflow-svg-js
~~~~
2. Next you have to install the Peer Dependencies in the right version (see package.json)
3. Add the scripts in your angular.json
~~~~
"scripts": [
  "./node_modules/@svgdotjs/svg.js/dist/svg.min.js",
  "./node_modules/@svgdotjs/svg.draggable.js/dist/svg.draggable.min.js",
  "./node_modules/workflow-svg.js/dist/workflow-svg.minified.js"
]
~~~~
4. Add the ng-workflow-svg-js module  to your app
~~~~
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgWorkflowSvgJsModule // <== add the NgWorkflowSvgJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~~
Now you can use the ng-workflow-svg-js component.

