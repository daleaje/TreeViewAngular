# TreeViewAngular
Tree View nodes to display API json data based on hierarchy

This is using TypeScript and Angular
These are just code snippets, not the whole solutions


Architecture:

src -> 
  app -> 
    home ->
      home.component.ts, home.component.html, home.component.spec.ts, home.component.css
    shared ->
      models ->
        flat-node-object.ts, flat-node.ts, templateNodeObject.ts, all the other models
      pipes ->
        highlight-search-pipe.ts
      services ->
        tree-view-service.ts
        
        



