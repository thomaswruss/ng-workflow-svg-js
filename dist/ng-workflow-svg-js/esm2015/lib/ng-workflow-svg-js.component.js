import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgWorkflowSvgJsEntity {
    constructor() {
        this.radius = 0;
    }
}
export var NgWorkflowSvgJsArrowType;
(function (NgWorkflowSvgJsArrowType) {
    NgWorkflowSvgJsArrowType[NgWorkflowSvgJsArrowType["default"] = 0] = "default";
    NgWorkflowSvgJsArrowType[NgWorkflowSvgJsArrowType["none"] = 1] = "none";
})(NgWorkflowSvgJsArrowType || (NgWorkflowSvgJsArrowType = {}));
export var NgWorkflowSvgJsGridType;
(function (NgWorkflowSvgJsGridType) {
    NgWorkflowSvgJsGridType[NgWorkflowSvgJsGridType["static"] = 0] = "static";
    NgWorkflowSvgJsGridType[NgWorkflowSvgJsGridType["dynamic"] = 1] = "dynamic";
})(NgWorkflowSvgJsGridType || (NgWorkflowSvgJsGridType = {}));
export class NgWorkflowSvgJsConfiguration {
}
export class NgWorkflowSvgJsPoint {
}
export class NgWorkflowSvgJsLine {
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
export { NgWorkflowSvgJsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd29ya2Zsb3ctc3ZnLWpzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXdvcmtmbG93LXN2Zy1qcy8iLCJzb3VyY2VzIjpbImxpYi9uZy13b3JrZmxvdy1zdmctanMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTS9FLE1BQU0sT0FBTyxxQkFBcUI7SUFBbEM7UUFTRSxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUFBO0FBRUQsTUFBTSxDQUFOLElBQVksd0JBRVg7QUFGRCxXQUFZLHdCQUF3QjtJQUNsQyw2RUFBTyxDQUFBO0lBQUUsdUVBQUksQ0FBQTtBQUNmLENBQUMsRUFGVyx3QkFBd0IsS0FBeEIsd0JBQXdCLFFBRW5DO0FBRUQsTUFBTSxDQUFOLElBQVksdUJBRVg7QUFGRCxXQUFZLHVCQUF1QjtJQUNqQyx5RUFBTSxDQUFBO0lBQUUsMkVBQU8sQ0FBQTtBQUNqQixDQUFDLEVBRlcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQUVsQztBQUVELE1BQU0sT0FBTyw0QkFBNEI7Q0FZeEM7QUFFRCxNQUFNLE9BQU8sb0JBQW9CO0NBR2hDO0FBRUQsTUFBTSxPQUFPLG1CQUFtQjtDQUkvQjtBQVVELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBcUNuQztRQTFCUSxNQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1AsTUFBQyxHQUFHLEVBQUUsQ0FBQztRQUNQLE1BQUMsR0FBRyxFQUFFLENBQUM7UUFxQkwsbUJBQWMsR0FBMEMsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFDcEcsZ0JBQVcsR0FBd0MsSUFBSSxZQUFZLEVBQXlCLENBQUM7SUFFdkYsQ0FBQztJQXBCakIsSUFBSSxRQUFRLENBQUMsUUFBaUM7UUFDNUMsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFHRCxJQUFJLGFBQWEsQ0FBQyxhQUEyQztRQUMzRCxJQUFJLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUdELElBQUksS0FBSyxDQUFDLEtBQTRCO1FBQ3BDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhFLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2IsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3RCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUVGLENBQUE7QUFqRUM7SUFEQyxLQUFLLEVBQUU7b0RBQ0c7QUFHWDtJQURDLEtBQUssRUFBRTt1REFDTTtBQUdkO0lBREMsS0FBSyxFQUFFO3dEQUNPO0FBUWY7SUFEQyxLQUFLLEVBQUU7d0RBSVA7QUFHRDtJQURDLEtBQUssRUFBRTs2REFJUDtBQUdEO0lBREMsS0FBSyxFQUFFO3FEQUlQO0FBRVM7SUFBVCxNQUFNLEVBQUU7Z0VBQXFHO0FBQ3BHO0lBQVQsTUFBTSxFQUFFOzZEQUE4RjtBQW5DNUYsd0JBQXdCO0lBUnBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFOztHQUVUO0tBR0YsQ0FBQztHQUNXLHdCQUF3QixDQW9FcEM7U0FwRVksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgV29ya2Zsb3dTVkcgZnJvbSAnd29ya2Zsb3ctc3ZnLmpzL2Rpc3Qvd29ya2Zsb3ctc3ZnLm1pbmlmaWVkLmpzJztcblxuZGVjbGFyZSB2YXIgV29ya2Zsb3dTVkc6IGFueTtcbmRlY2xhcmUgY29uc3QgU1ZHOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBOZ1dvcmtmbG93U3ZnSnNFbnRpdHkge1xuICBpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgYmFja2dyb3VuZGNvbG9yOiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHJhZGl1cyA9IDA7XG59XG5cbmV4cG9ydCBlbnVtIE5nV29ya2Zsb3dTdmdKc0Fycm93VHlwZXtcbiAgZGVmYXVsdCwgbm9uZVxufVxuXG5leHBvcnQgZW51bSBOZ1dvcmtmbG93U3ZnSnNHcmlkVHlwZXtcbiAgc3RhdGljLCBkeW5hbWljXG59XG5cbmV4cG9ydCBjbGFzcyBOZ1dvcmtmbG93U3ZnSnNDb25maWd1cmF0aW9uIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgbGluZV9jb2xvcjogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBhcnJvd190eXBlOiBOZ1dvcmtmbG93U3ZnSnNBcnJvd1R5cGU7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIGdyaWRfdHlwZTogTmdXb3JrZmxvd1N2Z0pzR3JpZFR5cGU7XG4gIHJlYWRvbmx5OiBib29sZWFuO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBncmlkX3g6IG51bWJlcjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgZ3JpZF95OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZ1dvcmtmbG93U3ZnSnNQb2ludCB7XG4gIHBvaW50OiBzdHJpbmc7XG4gIGVsZW1lbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE5nV29ya2Zsb3dTdmdKc0xpbmUge1xuICBpZDogc3RyaW5nO1xuICBmcm9tOiBOZ1dvcmtmbG93U3ZnSnNQb2ludDtcbiAgdG86IE5nV29ya2Zsb3dTdmdKc1BvaW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy13b3JrZmxvdy1zdmctanMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2lkXT1cImlkXCI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nV29ya2Zsb3dTdmdKc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgaWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB3aWR0aDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIHByaXZhdGUgZSA9IFtdO1xuICBwcml2YXRlIGwgPSBbXTtcbiAgcHJpdmF0ZSBjID0ge307XG4gIHByaXZhdGUgd29ya2Zsb3c6IGFueTtcblxuICBASW5wdXQoKVxuICBzZXQgZW50aXRpZXMoZW50aXRpZXM6IE5nV29ya2Zsb3dTdmdKc0VudGl0eVtdKXtcbiAgICB0aGlzLmUgPSBlbnRpdGllcztcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbjogTmdXb3JrZmxvd1N2Z0pzQ29uZmlndXJhdGlvbil7XG4gICAgdGhpcy5jID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGxpbmVzKGxpbmVzOiBOZ1dvcmtmbG93U3ZnSnNMaW5lW10pe1xuICAgIHRoaXMubCA9IGxpbmVzO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBAT3V0cHV0KCkgZW50aXRpZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ1dvcmtmbG93U3ZnSnNFbnRpdHlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nV29ya2Zsb3dTdmdKc0VudGl0eVtdPigpO1xuICBAT3V0cHV0KCkgbGluZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ1dvcmtmbG93U3ZnSnNMaW5lW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ1dvcmtmbG93U3ZnSnNMaW5lW10+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLndvcmtmbG93ID0gbmV3IFdvcmtmbG93U1ZHKCk7XG4gICAgdGhpcy53b3JrZmxvdy5pbml0YWxpemUoJyMnICsgdGhpcy5pZCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy53b3JrZmxvdy5nZXQoKTtcbiAgICAgIHRoaXMuZSA9IGRhdGEuZW50aXRpZXM7XG4gICAgICB0aGlzLmwgPSBkYXRhLmxpbmVzO1xuICAgICAgdGhpcy5lbnRpdGllc0NoYW5nZS5lbWl0KGRhdGEuZW50aXRpZXMpO1xuICAgICAgdGhpcy5saW5lc0NoYW5nZS5lbWl0KGRhdGEubGluZXMpO1xuICAgIH07XG5cbiAgICB0aGlzLndvcmtmbG93LnJlZ2lzdGVyKCdlbnRpdHk6bW92ZWQnLCBjYWxsYmFjayk7XG4gICAgdGhpcy53b3JrZmxvdy5yZWdpc3RlcignbGluZTphZGRlZCcsIGNhbGxiYWNrKTtcbiAgICB0aGlzLndvcmtmbG93LnJlZ2lzdGVyKCdsYWJlbDptb3ZlZCcsIGNhbGxiYWNrKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZHtcbiAgICBpZiAodGhpcy53b3JrZmxvdykge1xuICAgICAgICB0aGlzLndvcmtmbG93LnVwZGF0ZSh7XG4gICAgICAgIGVudGl0aWVzOiB0aGlzLmUsXG4gICAgICAgIGxpbmVzOiB0aGlzLmwsXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==