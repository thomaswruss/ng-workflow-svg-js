import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, Component, NgModule } from '@angular/core';

class NgWorkflowSvgJsEntity {
    constructor() {
        this.radius = 0;
    }
}
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
class NgWorkflowSvgJsConfiguration {
}
class NgWorkflowSvgJsPoint {
}
class NgWorkflowSvgJsLine {
}
let NgWorkflowSvgJsComponent = class NgWorkflowSvgJsComponent {
    constructor() {
        this.e = [];
        this.l = [];
        this.c = {};
        this.entitiesChange = new EventEmitter();
        this.linesChange = new EventEmitter();
    }
    set entities(entities) {
        this.e = entities;
        this.update();
    }
    set configuration(configuration) {
        this.c = configuration;
        this.update();
    }
    set lines(lines) {
        this.l = lines;
        this.update();
    }
    ngOnInit() {
        this.workflow = new WorkflowSVG();
        this.workflow.initalize('#' + this.id, this.width, this.height);
        const callback = () => {
            const data = this.workflow.get();
            this.e = data.entities;
            this.l = data.lines;
            this.entitiesChange.emit(data.entities);
            this.linesChange.emit(data.lines);
        };
        this.workflow.register('entity:moved', callback);
        this.workflow.register('line:added', callback);
        this.workflow.register('label:moved', callback);
        this.update();
    }
    update() {
        if (this.workflow) {
            this.workflow.update({
                entities: this.e,
                lines: this.l,
                configuration: this.c
            });
        }
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
        template: `
    <div [id]="id"></div>
  `
    })
], NgWorkflowSvgJsComponent);

let NgWorkflowSvgJsModule = class NgWorkflowSvgJsModule {
};
NgWorkflowSvgJsModule = __decorate([
    NgModule({
        declarations: [NgWorkflowSvgJsComponent],
        imports: [],
        exports: [NgWorkflowSvgJsComponent]
    })
], NgWorkflowSvgJsModule);

/*
 * Public API Surface of ng-workflow-svg-js
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgWorkflowSvgJsArrowType, NgWorkflowSvgJsComponent, NgWorkflowSvgJsConfiguration, NgWorkflowSvgJsEntity, NgWorkflowSvgJsGridType, NgWorkflowSvgJsLine, NgWorkflowSvgJsModule, NgWorkflowSvgJsPoint };
//# sourceMappingURL=ng-workflow-svg-js.js.map
