import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';
declare var jLouvain: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = APP_CONFIG.N,
    getIndex = number => number - 1;
    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }

    const community = jLouvain().nodes(this.nodes).edges(this.links).partition_init();
    const result = community() ;
      console.log('Nodes And Their Communities ') ;
    // The result element of the community detection is a dictionary with nodes id as keys and nodes community as value
    for (const key in result) {
      if (result.hasOwnProperty(key)) {
        console.log('key ' + key + '==> ' + result[key]);
      }
    }
  }
}
