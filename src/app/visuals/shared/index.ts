
export * from './node-visual-component/node-visual-component.component';
export * from './link-visual-component/link-visual-component.component';

import { NodeVisualComponentComponent } from './node-visual-component/node-visual-component.component';
import { LinkVisualComponentComponent } from './link-visual-component/link-visual-component.component';

export const SHARED_VISUALS = [
    NodeVisualComponentComponent,
    LinkVisualComponentComponent
];
