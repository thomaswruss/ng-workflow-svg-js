import { OnInit, EventEmitter } from '@angular/core';
export declare class NgWorkflowSvgJsEntity {
    id: string;
    text: string;
    x: number;
    y: number;
    width: number;
    height: number;
    backgroundcolor: string;
    color: string;
    radius: number;
}
export declare enum NgWorkflowSvgJsArrowType {
    default = 0,
    none = 1
}
export declare enum NgWorkflowSvgJsGridType {
    static = 0,
    dynamic = 1
}
export declare class NgWorkflowSvgJsConfiguration {
    line_color: string;
    arrow_type: NgWorkflowSvgJsArrowType;
    grid_type: NgWorkflowSvgJsGridType;
    readonly: boolean;
    grid_x: number;
    grid_y: number;
}
export declare class NgWorkflowSvgJsPoint {
    point: string;
    element: string;
}
export declare class NgWorkflowSvgJsLine {
    id: string;
    from: NgWorkflowSvgJsPoint;
    to: NgWorkflowSvgJsPoint;
}
export declare class NgWorkflowSvgJsComponent implements OnInit {
    id: string;
    width: number;
    height: number;
    private e;
    private l;
    private c;
    private workflow;
    set entities(entities: NgWorkflowSvgJsEntity[]);
    set configuration(configuration: NgWorkflowSvgJsConfiguration);
    set lines(lines: NgWorkflowSvgJsLine[]);
    entitiesChange: EventEmitter<NgWorkflowSvgJsEntity[]>;
    linesChange: EventEmitter<NgWorkflowSvgJsLine[]>;
    constructor();
    ngOnInit(): void;
    update(): void;
}
