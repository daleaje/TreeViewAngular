import {injectable} from '@angular/core';
import {FlatTreeControl} from '@angular/cdl/tree';
import {MatTreeFlattener, MatTreeFlatDataSource} from '@angular/material/tree';
import {FlatNode} from '../models/flat-node';
import {Template} from '../models/template';

@Injectable()
export class TreeViewService{
// tree view initialization
_transformer = (node: Template, level: number) =>{
   return {
    expandable: !!node.treeEntries && node.treeEntries.length > 0,
    name: node.relatePath,
    path: node.path,
    relativePath: node.relativePath,
    level: level,
  };
}
treeControl = new FlatTreeControl<FlatNode>(
  node => node.level, node => node.expandable);
treeFlattener = new MatTreeFlattener(
  this._transformer, node => node.level, node => node.expandable, node => node.treeEntries);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
constructor()
  { this.initialize();}
initialize()
  { this.resetTreeData();}
resetTreeData()
  {this.dataSource.data = [];}
  
 }
