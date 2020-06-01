import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, Component, NgModule } from '@angular/core';

var NgWorkflowSvgJsEntity = /** @class */ (function () {
    function NgWorkflowSvgJsEntity() {
        this.radius = 0;
    }
    return NgWorkflowSvgJsEntity;
}());
var NgWorkflowSvgJsArrowType;
(function (NgWorkflowSvgJsArrowType) {
    NgWorkflowSvgJsArrowType[NgWorkflowSvgJsArrowType["default"] = 0] = "default";
    NgWorkflowSvgJsArrowType[NgWorkflowSvgJsArrowType["none"] = 1] = "none";
})(NgWorkflowSvgJsArrowType || (NgWorkflowSvgJsArrowType = {}));
var NgWorkflowSvgJsGridType;
(function (NgWorkflowSvgJsGridType) {
    NgWorkflowSvgJsGridType[NgWorkflowSvgJsGridType["static"] = 0] = "static";
    NgWorkflowSvgJsGridType[NgWorkflowSvgJsGridType["dynamic"] = 1] = "dynamic";
})(NgWorkflowSvgJsGridType || (NgWorkflowSvgJsGridType = {}));
var NgWorkflowSvgJsConfiguration = /** @class */ (function () {
    function NgWorkflowSvgJsConfiguration() {
    }
    return NgWorkflowSvgJsConfiguration;
}());
var NgWorkflowSvgJsPoint = /** @class */ (function () {
    function NgWorkflowSvgJsPoint() {
    }
    return NgWorkflowSvgJsPoint;
}());
var NgWorkflowSvgJsLine = /** @class */ (function () {
    function NgWorkflowSvgJsLine() {
    }
    return NgWorkflowSvgJsLine;
}());
var NgWorkflowSvgJsComponent = /** @class */ (function () {
    function NgWorkflowSvgJsComponent() {
        this.e = [];
        this.l = [];
        this.c = {};
        this.entitiesChange = new EventEmitter();
        this.linesChange = new EventEmitter();
    }
    Object.defineProperty(NgWorkflowSvgJsComponent.prototype, "entities", {
        set: function (entities) {
            this.e = entities;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgWorkflowSvgJsComponent.prototype, "configuration", {
        set: function (configuration) {
            this.c = configuration;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgWorkflowSvgJsComponent.prototype, "lines", {
        set: function (lines) {
            this.l = lines;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    NgWorkflowSvgJsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workflow = new WorkflowSVG();
        this.workflow.initalize('#' + this.id, this.width, this.height);
        var callback = function () {
            var data = _this.workflow.get();
            _this.e = data.entities;
            _this.l = data.lines;
            _this.entitiesChange.emit(data.entities);
            _this.linesChange.emit(data.lines);
        };
        this.workflow.register('entity:moved', callback);
        this.workflow.register('line:added', callback);
        this.workflow.register('label:moved', callback);
        this.update();
    };
    NgWorkflowSvgJsComponent.prototype.update = function () {
        if (this.workflow) {
            this.workflow.update({
                entities: this.e,
                lines: this.l,
                configuration: this.c
            });
        }
    };
    __decorate([
        Input()
    ], NgWorkflowSvgJsComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], NgWorkflowSvgJsComponent.prototype, "width", void 0);
    __decorate([
        Input()
    ], NgWorkflowSvgJsComponent.prototype, "height", void 0);
    __decorate([
        Input()
    ], NgWorkflowSvgJsComponent.prototype, "entities", null);
    __decorate([
        Input()
    ], NgWorkflowSvgJsComponent.prototype, "configuration", null);
    __decorate([
        Input()
    ], NgWorkflowSvgJsComponent.prototype, "lines", null);
    __decorate([
        Output()
    ], NgWorkflowSvgJsComponent.prototype, "entitiesChange", void 0);
    __decorate([
        Output()
    ], NgWorkflowSvgJsComponent.prototype, "linesChange", void 0);
    NgWorkflowSvgJsComponent = __decorate([
        Component({
            selector: 'ng-workflow-svg-js',
            template: "\n    <div [id]=\"id\"></div>\n  "
        })
    ], NgWorkflowSvgJsComponent);
    return NgWorkflowSvgJsComponent;
}());

var NgWorkflowSvgJsModule = /** @class */ (function () {
    function NgWorkflowSvgJsModule() {
    }
    NgWorkflowSvgJsModule = __decorate([
        NgModule({
            declarations: [NgWorkflowSvgJsComponent],
            imports: [],
            exports: [NgWorkflowSvgJsComponent]
        })
    ], NgWorkflowSvgJsModule);
    return NgWorkflowSvgJsModule;
}());

/*
 * Public API Surface of ng-workflow-svg-js
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgWorkflowSvgJsArrowType, NgWorkflowSvgJsComponent, NgWorkflowSvgJsConfiguration, NgWorkflowSvgJsEntity, NgWorkflowSvgJsGridType, NgWorkflowSvgJsLine, NgWorkflowSvgJsModule, NgWorkflowSvgJsPoint };
//# sourceMappingURL=ng-workflow-svg-js.js.map
