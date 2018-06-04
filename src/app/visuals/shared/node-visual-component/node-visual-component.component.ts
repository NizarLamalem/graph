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
          [attr.r]="node.r"><!--NodeSize--->
      </svg:circle>
      <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize"><!--Font Node Size-->
        {{node.id}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual-component.component.css']
})
export class NodeVisualComponentComponent {
  @Input('nodeVisual') node: Node ;
}