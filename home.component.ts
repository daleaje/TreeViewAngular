import {Component, ViewChild} from '@angular/core';
import {TreeViewService} from '../shared/services/tree-view.service';
import {FlatNode} from '../shared/models/flat-node';
import {FlatNodeObject{ from '../shared/models/flat-node-object';
import {TemplateNodeObject} from '../shared/models/templateNodeObject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TreeViewService]
})

export class HomeComponent{
// initialize all the vars here
templateFromUrl = '******'
defaultTemplateObject: TemplateNodeObject = null;

@ViewChild('navTab') navTab;
treeControl = this._database.treeControl;
treeFlattener = this._database.treeFlattener;
dataSource = this._database.dataSource;
hasChild = (_: number, node: FlatNode) => node.expandable;

//CTOR Dependency Injection for treeviewservice
constructor(
  private _database: TreeViewService,
){
  this.dataSource.data = []; 
}

ngOnInit(){
  this.initialCall();
}

initialCall(){
  if (templateFromUrl !== null){
    this.defaultTemplateObject = this.createTemplateNodeObject(templateFromUrl);
  }
  this.expandTreeViewOnTemplateValueInUrl(); // call method to expand tree view path value
}

// to create template node obj based on template path url string
private createTemplateNodeObject(templatePathUrl){
  let templateNodeObj = new TemplateNodeObject();
  templateNodeObj.name = templatePathUrl.substring(templatePathUrl.lastIndexOf('/')+1),
  templateNodeObj.path = templatePathUrl,
  templateNodeObj.relativePath = templatePathUrl.substring(templatePathUrl.lastIndexOf('/')+1)
  return templateNodeObj;
}

private expandTreeViewOnTemplateValueInUrl(){
  // Expand the tree view here based on node objectId
  let originalNodes = this.treeControl.dataNodes as FlatNodeObject[];
  let nodeIndex = originalNodes.findIndex(x=>x.path.trim().toLowerCase() === this.defaultTemplateObject?.path.trim().toLowerCase()); //get the array position id
  this.selectedNodeIndex = nodeIndex;
  this.treeControl.expand(this.treeControl.dataNodes[nodeIndex]);

  //iterate thru from nodeIndex and up, if tree level is lower/expandable/contains path words, then expand the node
  let originalNodeIndex = nodeIndex;
  for (let i=0l i<originalNodeIndex; i++){
    if(originalNodes[i].level - 1 < originalNodeIndex && 
        originalNodes[i].expandable === true &&  
        this.defaultTemplateObject?.path.trim().toLowerCase().includes(originalNodes[i]?.path.trim().toLowerCase())
        {
          this.treeControl.expand(this.treeControl.dataNodes[i]);
        }
  }
  

}



}
