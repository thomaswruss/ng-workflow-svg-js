import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as WorkflowSVG from 'workflow-svg.js/dist/workflow-svg.minified.js';

declare var WorkflowSVG: any;
declare const SVG: any;

export class NgWorkflowSvgJsEntity {
  id: string;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  backgroundcolor: string;
  color: string;
  radius = 0;
}

export enum NgWorkflowSvgJsArrowType{
  default, none
}

export enum NgWorkflowSvgJsGridType{
  static, dynamic
}

export class NgWorkflowSvgJsConfiguration {
  // tslint:disable-next-line:variable-name
  line_color: string;
  // tslint:disable-next-line:variable-name
  arrow_type: NgWorkflowSvgJsArrowType;
  // tslint:disable-next-line:variable-name
  grid_type: NgWorkflowSvgJsGridType;
  readonly: boolean;
  // tslint:disable-next-line:variable-name
  grid_x: number;
  // tslint:disable-next-line:variable-name
  grid_y: number;
}

export class NgWorkflowSvgJsPoint {
  point: string;
  element: string;
}

export class NgWorkflowSvgJsLine {
  id: string;
  from: NgWorkflowSvgJsPoint;
  to: NgWorkflowSvgJsPoint;
}

@Component({
  selector: 'ng-workflow-svg-js',
  template: `
    <div [id]="id"></div>
  `,
  styles: [
  ]
})
export class NgWorkflowSvgJsComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  width: number;

  @Input()
  height: number;

  private e = [];
  private l = [];
  private c = {};
  private workflow: any;

  @Input()
  set entities(entities: NgWorkflowSvgJsEntity[]){
    this.e = entities;
    this.update();
  }

  @Input()
  set configuration(configuration: NgWorkflowSvgJsConfiguration){
    this.c = configuration;
    this.update();
  }

  @Input()
  set lines(lines: NgWorkflowSvgJsLine[]){
    this.l = lines;
    this.update();
  }

  @Output() entitiesChange: EventEmitter<NgWorkflowSvgJsEntity[]> = new EventEmitter<NgWorkflowSvgJsEntity[]>();
  @Output() linesChange: EventEmitter<NgWorkflowSvgJsLine[]> = new EventEmitter<NgWorkflowSvgJsLine[]>();

  constructor() { }

  ngOnInit(): void {
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

  update(): void{
    if (this.workflow) {
        this.workflow.update({
        entities: this.e,
        lines: this.l,
        configuration: this.c
      });
    }
  }

}
