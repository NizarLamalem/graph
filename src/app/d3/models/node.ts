import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  id: string;
  linkCount = 0 ;
  Color?: string ;
  community?: number ;


  constructor(id, public label: string = 'Node') {
    this.id = id;
  }

  normal = () => {
    return Math.sqrt(this.linkCount / APP_CONFIG.N);
  }

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return (30 * this.normal() + 10) + 'px';
  }
// The Color of The Node
  get color() {
     /*
    const letters = '0123456789ABCDEF' ;
    let color = '#' ;
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color ;
    const index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());*/
    return APP_CONFIG.SPECTRUM[this.community];
  }
}
