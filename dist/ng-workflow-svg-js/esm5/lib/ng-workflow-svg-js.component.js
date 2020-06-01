import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NgWorkflowSvgJsEntity = /** @class */ (function () {
    function NgWorkflowSvgJsEntity() {
        this.radius = 0;
    }
    return NgWorkflowSvgJsEntity;
}());
export { NgWorkflowSvgJsEntity };
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
var NgWorkflowSvgJsConfiguration = /** @class */ (function () {
    function NgWorkflowSvgJsConfiguration() {
    }
    return NgWorkflowSvgJsConfiguration;
}());
export { NgWorkflowSvgJsConfiguration };
var NgWorkflowSvgJsPoint = /** @class */ (function () {
    function NgWorkflowSvgJsPoint() {
    }
    return NgWorkflowSvgJsPoint;
}());
export { NgWorkflowSvgJsPoint };
var NgWorkflowSvgJsLine = /** @class */ (function () {
    function NgWorkflowSvgJsLine() {
    }
    return NgWorkflowSvgJsLine;
}());
export { NgWorkflowSvgJsLine };
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
export { NgWorkflowSvgJsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd29ya2Zsb3ctc3ZnLWpzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXdvcmtmbG93LXN2Zy1qcy8iLCJzb3VyY2VzIjpbImxpYi9uZy13b3JrZmxvdy1zdmctanMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTS9FO0lBQUE7UUFTRSxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7O0FBRUQsTUFBTSxDQUFOLElBQVksd0JBRVg7QUFGRCxXQUFZLHdCQUF3QjtJQUNsQyw2RUFBTyxDQUFBO0lBQUUsdUVBQUksQ0FBQTtBQUNmLENBQUMsRUFGVyx3QkFBd0IsS0FBeEIsd0JBQXdCLFFBRW5DO0FBRUQsTUFBTSxDQUFOLElBQVksdUJBRVg7QUFGRCxXQUFZLHVCQUF1QjtJQUNqQyx5RUFBTSxDQUFBO0lBQUUsMkVBQU8sQ0FBQTtBQUNqQixDQUFDLEVBRlcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQUVsQztBQUVEO0lBQUE7SUFZQSxDQUFDO0lBQUQsbUNBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7QUFFRDtJQUFBO0lBR0EsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7O0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOztBQVVEO0lBcUNFO1FBMUJRLE1BQUMsR0FBRyxFQUFFLENBQUM7UUFDUCxNQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1AsTUFBQyxHQUFHLEVBQUUsQ0FBQztRQXFCTCxtQkFBYyxHQUEwQyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUNwRyxnQkFBVyxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQztJQUV2RixDQUFDO0lBcEJqQixzQkFBSSw4Q0FBUTthQUFaLFVBQWEsUUFBaUM7WUFDNUMsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksbURBQWE7YUFBakIsVUFBa0IsYUFBMkM7WUFDM0QsSUFBSSxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksMkNBQUs7YUFBVCxVQUFVLEtBQTRCO1lBQ3BDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBT0QsMkNBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEUsSUFBTSxRQUFRLEdBQUc7WUFDZixJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2QixLQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHlDQUFNLEdBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2IsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3RCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQS9ERDtRQURDLEtBQUssRUFBRTt3REFDRztJQUdYO1FBREMsS0FBSyxFQUFFOzJEQUNNO0lBR2Q7UUFEQyxLQUFLLEVBQUU7NERBQ087SUFRZjtRQURDLEtBQUssRUFBRTs0REFJUDtJQUdEO1FBREMsS0FBSyxFQUFFO2lFQUlQO0lBR0Q7UUFEQyxLQUFLLEVBQUU7eURBSVA7SUFFUztRQUFULE1BQU0sRUFBRTtvRUFBcUc7SUFDcEc7UUFBVCxNQUFNLEVBQUU7aUVBQThGO0lBbkM1Rix3QkFBd0I7UUFScEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsbUNBRVQ7U0FHRixDQUFDO09BQ1csd0JBQXdCLENBb0VwQztJQUFELCtCQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0FwRVksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgV29ya2Zsb3dTVkcgZnJvbSAnd29ya2Zsb3ctc3ZnLmpzL2Rpc3Qvd29ya2Zsb3ctc3ZnLm1pbmlmaWVkLmpzJztcblxuZGVjbGFyZSB2YXIgV29ya2Zsb3dTVkc6IGFueTtcbmRlY2xhcmUgY29uc3QgU1ZHOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBOZ1dvcmtmbG93U3ZnSnNFbnRpdHkge1xuICBpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgYmFja2dyb3VuZGNvbG9yOiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHJhZGl1cyA9IDA7XG59XG5cbmV4cG9ydCBlbnVtIE5nV29ya2Zsb3dTdmdKc0Fycm93VHlwZXtcbiAgZGVmYXVsdCwgbm9uZVxufVxuXG5leHBvcnQgZW51bSBOZ1dvcmtmbG93U3ZnSnNHcmlkVHlwZXtcbiAgc3RhdGljLCBkeW5hbWljXG59XG5cbmV4cG9ydCBjbGFzcyBOZ1dvcmtmbG93U3ZnSnNDb25maWd1cmF0aW9uIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgbGluZV9jb2xvcjogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBhcnJvd190eXBlOiBOZ1dvcmtmbG93U3ZnSnNBcnJvd1R5cGU7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIGdyaWRfdHlwZTogTmdXb3JrZmxvd1N2Z0pzR3JpZFR5cGU7XG4gIHJlYWRvbmx5OiBib29sZWFuO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBncmlkX3g6IG51bWJlcjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgZ3JpZF95OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZ1dvcmtmbG93U3ZnSnNQb2ludCB7XG4gIHBvaW50OiBzdHJpbmc7XG4gIGVsZW1lbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE5nV29ya2Zsb3dTdmdKc0xpbmUge1xuICBpZDogc3RyaW5nO1xuICBmcm9tOiBOZ1dvcmtmbG93U3ZnSnNQb2ludDtcbiAgdG86IE5nV29ya2Zsb3dTdmdKc1BvaW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy13b3JrZmxvdy1zdmctanMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2lkXT1cImlkXCI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nV29ya2Zsb3dTdmdKc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgaWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB3aWR0aDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIHByaXZhdGUgZSA9IFtdO1xuICBwcml2YXRlIGwgPSBbXTtcbiAgcHJpdmF0ZSBjID0ge307XG4gIHByaXZhdGUgd29ya2Zsb3c6IGFueTtcblxuICBASW5wdXQoKVxuICBzZXQgZW50aXRpZXMoZW50aXRpZXM6IE5nV29ya2Zsb3dTdmdKc0VudGl0eVtdKXtcbiAgICB0aGlzLmUgPSBlbnRpdGllcztcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbjogTmdXb3JrZmxvd1N2Z0pzQ29uZmlndXJhdGlvbil7XG4gICAgdGhpcy5jID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGxpbmVzKGxpbmVzOiBOZ1dvcmtmbG93U3ZnSnNMaW5lW10pe1xuICAgIHRoaXMubCA9IGxpbmVzO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBAT3V0cHV0KCkgZW50aXRpZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ1dvcmtmbG93U3ZnSnNFbnRpdHlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nV29ya2Zsb3dTdmdKc0VudGl0eVtdPigpO1xuICBAT3V0cHV0KCkgbGluZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOZ1dvcmtmbG93U3ZnSnNMaW5lW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ1dvcmtmbG93U3ZnSnNMaW5lW10+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLndvcmtmbG93ID0gbmV3IFdvcmtmbG93U1ZHKCk7XG4gICAgdGhpcy53b3JrZmxvdy5pbml0YWxpemUoJyMnICsgdGhpcy5pZCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy53b3JrZmxvdy5nZXQoKTtcbiAgICAgIHRoaXMuZSA9IGRhdGEuZW50aXRpZXM7XG4gICAgICB0aGlzLmwgPSBkYXRhLmxpbmVzO1xuICAgICAgdGhpcy5lbnRpdGllc0NoYW5nZS5lbWl0KGRhdGEuZW50aXRpZXMpO1xuICAgICAgdGhpcy5saW5lc0NoYW5nZS5lbWl0KGRhdGEubGluZXMpO1xuICAgIH07XG5cbiAgICB0aGlzLndvcmtmbG93LnJlZ2lzdGVyKCdlbnRpdHk6bW92ZWQnLCBjYWxsYmFjayk7XG4gICAgdGhpcy53b3JrZmxvdy5yZWdpc3RlcignbGluZTphZGRlZCcsIGNhbGxiYWNrKTtcbiAgICB0aGlzLndvcmtmbG93LnJlZ2lzdGVyKCdsYWJlbDptb3ZlZCcsIGNhbGxiYWNrKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZHtcbiAgICBpZiAodGhpcy53b3JrZmxvdykge1xuICAgICAgICB0aGlzLndvcmtmbG93LnVwZGF0ZSh7XG4gICAgICAgIGVudGl0aWVzOiB0aGlzLmUsXG4gICAgICAgIGxpbmVzOiB0aGlzLmwsXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==