var D = 
    {
      "nodes": [
        { 'group': 0|4 }, 
        { 'group': 1   }, 
        { 'group': 1|2 }, 
        { 'group': 0   }, 
        { 'group': 0|4 }, 
        { 'group': 0   }, 
        { 'group': 0|2 }, 
        { 'group': 1|6 }, 
        { 'group': 0   }, 
        { 'group': 0   }, 
        { 'group': 1|6 }, 
        { 'group': 1|4 }, 
        { 'group': 0|2 }, 
        { 'group': 1|6 }, 
        { 'group': 0|8 }, 
        { 'group': 0|8 }, 
        { 'group': 0|2 },
      ], 
      "links": [
        { 'source': 0,  'target': 1,  'value': 10, 'group': 1|2   },
        { 'source': 0,  'target': 2,  'value': 12, 'group': 1|2|4 },
        { 'source': 0,  'target': 3,  'value': 14, 'group': 1|4   },
        { 'source': 1,  'target': 4,  'value': 14, 'group': 1     },
        { 'source': 1,  'target': 5,  'value': 14, 'group': 1     },
        { 'source': 2,  'target': 6,  'value': 13, 'group': 1     },
        { 'source': 3,  'target': 7,  'value': 11, 'group': 1|4   },
        { 'source': 3,  'target': 8,  'value': 10, 'group': 1     },
        { 'source': 4,  'target': 9,  'value': 10, 'group': 1     },
        { 'source': 4,  'target': 10, 'value': 13, 'group': 1     },
        { 'source': 5,  'target': 11, 'value': 14, 'group': 1     },
        { 'source': 5,  'target': 12, 'value': 10, 'group': 1     },
        { 'source': 8,  'target': 13, 'value': 14, 'group': 1|2   },
        { 'source': 13, 'target': 14, 'value': 12, 'group': 1     },
        { 'source': 14, 'target': 15, 'value': 14, 'group': 1     },
        { 'source': 15, 'target': 16, 'value': 12, 'group': 1     }, 

        { 'source': 0,  'target': 5,  'value': 24, 'group': 0     },
        { 'source': 0,  'target': 8,  'value': 24, 'group': 0|2   },
        { 'source': 0,  'target': 9,  'value': 21, 'group': 0     },
        { 'source': 1,  'target': 8,  'value': 22, 'group': 0     },
        { 'source': 1,  'target': 10, 'value': 20, 'group': 0|2   },
        { 'source': 1,  'target': 11, 'value': 26, 'group': 0|2   },
        { 'source': 2,  'target': 5,  'value': 24, 'group': 0     },
        { 'source': 2,  'target': 15, 'value': 26, 'group': 0     },
        { 'source': 2,  'target': 16, 'value': 24, 'group': 0     },
        { 'source': 3,  'target': 15, 'value': 15, 'group': 0|4   },
        { 'source': 3,  'target': 16, 'value': 26, 'group': 0     },
        { 'source': 5,  'target': 6,  'value': 23, 'group': 0     },
        { 'source': 6,  'target': 12, 'value': 26, 'group': 0     },
        { 'source': 6,  'target': 16, 'value': 28, 'group': 0     },
        { 'source': 7,  'target': 8,  'value': 22, 'group': 0|2   },
        { 'source': 7,  'target': 13, 'value': 25, 'group': 0     },
        { 'source': 7,  'target': 14, 'value': 28, 'group': 0     },
        { 'source': 7,  'target': 15, 'value': 21, 'group': 0     },
        { 'source': 8,  'target': 9,  'value': 24, 'group': 0     },
        { 'source': 10, 'target': 13, 'value': 27, 'group': 0     },
        { 'source': 11, 'target': 12, 'value': 23, 'group': 0     },
      ]
    };

var w = 300, h = 500;
var D2 = 
  {
    "nodes": [
      { 'group': 0, 'x': w/2,   'y':0.1*h,  'fixed': true}, 
      { 'group': 0, 'x': w/4,   'y':0.25*h, 'fixed': true }, 
      { 'group': 0, 'x': 3*w/4, 'y':0.25*h, 'fixed': true }, 
      { 'group': 0, 'x': w/4,   'y':0.4*h,  'fixed': true }, 
      { 'group': 0, 'x': 3*w/4, 'y':0.4*h,  'fixed': true }, 
      { 'group': 0, 'x': w/4,   'y':0.55*h, 'fixed': true }, 
      { 'group': 0, 'x': 3*w/4, 'y':0.55*h, 'fixed': true }, 
      { 'group': 0, 'x': w/4,   'y':0.7*h,  'fixed': true }, 
      { 'group': 0, 'x': 3*w/4, 'y':0.7*h,  'fixed': true }, 
      { 'group': 1, 'x': w/4,   'y':0.85*h, 'fixed': true }, 
      { 'group': 1, 'x': 3*w/4, 'y':0.85*h, 'fixed': true }, 
    ], 
    "links": [
      { 'source': 0,  'target': 1,  'value': 10, 'group': 0 },
      { 'source': 0,  'target': 2,  'value': 10, 'group': 0 },
      { 'source': 1,  'target': 3,  'value': 10, 'group': 0 },
      { 'source': 2,  'target': 4,  'value': 10, 'group': 0 },
      { 'source': 3,  'target': 5,  'value': 10, 'group': 0 },
      { 'source': 4,  'target': 6,  'value': 10, 'group': 0 },
      { 'source': 5,  'target': 7,  'value': 10, 'group': 0 },
      { 'source': 6,  'target': 8,  'value': 10, 'group': 0 },
      { 'source': 7,  'target': 9,  'value': 10, 'group': 0 },
      { 'source': 8,  'target': 10, 'value': 10, 'group': 0 },
    ]
  };


function chart(D, id, w, h, R, scale) {
  var color = d3.scale.category20();
  for (var i=1; i<=20; i++) color(i);

  D.nodes.forEach(function(o, i) { if (typeof o.name == 'undefined') o.name = i; });
  D.nodes.forEach(function(o, i) { if (typeof o.group == 'undefined') o.group = 15; });

  var svg = draw(D, w, h, R, scale);

  function draw(data, w, h, R, scale) {
    if (typeof w == 'undefined') w = 500;
    if (typeof h == 'undefined') h = 500;
    if (typeof R == 'undefined') R = 6;
    if (typeof scale == 'undefined') scale = 1;

    D = JSON.parse(JSON.stringify(data));
    data = D;

    if (typeof svg == 'undefined')
      svg = d3.select("#"+id).append("svg")
        
    svg.attr("width", w)
       .attr("height", h);

    var force = d3.layout.force()
      .charge(-2200)
      .linkDistance(40)
      .size([w, h]);

    var n = data.nodes.length;

    force.nodes(data.nodes).links(data.links);

    // Initialize the positions deterministically, for better results.
    data.nodes.forEach(function(d, i) { if (!d.fixed) d.x = i*(d.y = i); /* width / n * i */ });

    // Run the layout a fixed number of times.
    // The ideal number of times scales with graph complexity.
    // Of course, don't run too long—you'll hang the page!
    force.start();
    for (var i = n; i > 0; --i) force.tick();
    force.stop();

    // Center the nodes in the middle.
    var ox = 0, oy = 0;
    data.nodes.forEach(function(d) { ox += Math.pow(d.x,2), oy += Math.pow(d.y,2); });
    ox = Math.pow(ox / n, 0.5) - w / 2, oy = Math.pow(oy / n, 0.5) - h / 2;
    data.nodes.forEach(function(d) { d.x -= ox, d.y -= oy; });

    var link = svg.selectAll(".link")
        .data(data.links)
        .enter().append("line")
          .attr("class", "link")

    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    var node = svg.selectAll(".node")
        .data(data.nodes)
        .enter().append("circle")
          .attr("class", "node")
          .attr("r", R)

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .call(force.drag);

    return svg;
  }

  function recolor(svg, data, nodeColors, edgeColors) {
    if (typeof edgeColors == 'undefined')
      edgeColors = function(i) { return null; }
    if (typeof nodeColors == 'undefined')
      nodeColors = function(i) { return null; }    

    svg.selectAll(".link")
        .data(data.links)
        .style("stroke", function(d) { return edgeColors(d.group); })
        .style("stroke-width", function(d) { return scale*Math.sqrt(d.value); });

    var node = svg.selectAll(".node")
        .data(data.nodes)
        .style("fill", function(d) { return nodeColors(d.group); })
  }

  // Assigns colors taking into account the bits from start to start+len-1
  // If a colors array is given, indexes colors using it
  function getColorBits(start, len, colors) {
    return function(i) {
      i = (i >> start) & ((1 << len) - 1);
      if (typeof colors != 'undefined')
        i = colors[i];
      return color(i);
    }
  }

  var ret = {};
  ret.color = color;
  ret.draw = draw;
  ret.recolor = function(nC, eC) { return recolor(svg, D, nC, eC); }
  ret.getColorBits = getColorBits;
  return ret;
}