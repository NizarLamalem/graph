import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link, D3Service } from './d3';

declare var jLouvain: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  nodes: Node[] = [];
  links: Link[] = [];

  constructor(public d3Service: D3Service) {
    const N = APP_CONFIG.N,
    getIndex = number => number - 1;
    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i , 'Node' + i));
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
    /** getting The Communities */
    const communities = this.community_Detection() ;
    /** Coloring These Communities */
    this.assigningColors(communities) ;
  }

  community_Detection() {
    const community = jLouvain().nodes(this.nodes).edges(this.links).partition_init();
    const result = community() ;
      console.log('Nodes And Their Communities ') ;
    // The result element of the community detection is a dictionary with nodes id as keys and nodes community as value
    return result ;
  }
  assigningColors(communities: any) {
    // empty the color table
    APP_CONFIG.SPECTRUM = [] ;
    let color: string ;
    // iterate over the community and assign color to each community
    for (const key in communities) {
      if (communities.hasOwnProperty(key)) {
        console.log('key ' + key + '==> ' + communities[key]);
        color = this.d3Service.communityColors() ;
        // make sure the color of the community not already taken
        while (!this.d3Service.notInArray(APP_CONFIG.SPECTRUM , color)) {
          color = this.d3Service.communityColors() ;
        }
        // Affect the color to node the id
        APP_CONFIG.SPECTRUM[communities[key]] = color ;
        this.nodes[Number(key) - 1].community = communities[key] ;
      }
    }
  }

}
