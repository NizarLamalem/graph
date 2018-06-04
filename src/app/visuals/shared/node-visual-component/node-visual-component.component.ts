import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
          class="node"
          [attr.fill]="node.color"
          cx="0"
          cy="0"
          [attr.r]="node.r"
          (mouseover)="showLabel($event,node)"
          (mouseout)="hideLabel($event ,node)"
          ><!--NodeSize--->
      </svg:circle>
      <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize"  (mouseover)="showLabel($event,node)"
          ><!--Font Node Size-->
        {{node.id}}
      </svg:text>
      <svg:text *ngIf="isShown" class="Node-text">
        {{node.label}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual-component.component.css']
})
export class NodeVisualComponentComponent {
  @Input('nodeVisual') node: Node ;
  isShown = false ;

  // show and hide label
  showLabel($event, node) {
    this.isShown = true ;
  }
  hideLabel($event, node) {
    this.isShown = false ;
  }

}
