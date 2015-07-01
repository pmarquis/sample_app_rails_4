// $( document ).ready(function() {


//   var draw_histogram = function(result){

//     // var layers = result.data;

//     // for(i=0; i<layers[0].length; i++) {
//     //   layers[0][i]['y0'] = 0;
//     //   layers[1][i]['y0'] = 0;
//     //   layers[2][i]['y0'] = 0;
//     // }
//     // var n = layers.length, // number of layers
//     //     m = layers[0].length,
//     //     // m = 58, // number of samples per layer
//     //     // stack = d3.layout.stack(),
//     //     // layers = stack(d3.range(n).map(function() { return bumpLayer(m, .1); })),
//     //     yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
//     //     yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });




//     for(i=0; i<result.data[0][i].length; i++) {
//       result.data[0][i]['y0'] = 0;
//       result.data[1][i]['y0'] = 0;
//       result.data[2][i]['y0'] = 0;
//     }
//     layers = result.data;

//     var n = result.data.length, // number of layers
//         m = result.data[0].length;
//         // m = 58, // number of samples per layer
//         stack = d3.layout.stack(),
//         layers = stack(d3.range(n).map(function() { return bumpLayer(m, .1); })),
//         yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
//         yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

//     console.dir(layers);
//     // layers = result.data;
//     // m = result.data[0].length;
//     // console.dir(layers);

//     var margin = {top: 40, right: 10, bottom: 20, left: 10},
//         width = 960 - margin.left - margin.right,
//         height = 500 - margin.top - margin.bottom;

//     var x = d3.scale.ordinal()
//         .domain(d3.range(m))
//         .rangeRoundBands([0, width], .08);

//     var y = d3.scale.linear()
//         .domain([0, yStackMax])
//         .range([height, 0]);

//     // console.dir(x);
//     // console.dir(y);

//     var color = d3.scale.linear()
//         .domain([0, n - 1])
//         .range(["#aad", "#556"]);

//     var xAxis = d3.svg.axis()
//         .scale(x)
//         .tickSize(0)
//         .tickPadding(6)
//         .orient("bottom");

//     var svg = d3.select("body").append("svg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//     var layer = svg.selectAll(".layer")
//         .data(layers)
//       .enter().append("g")
//         .attr("class", "layer")
//         .style("fill", function(d, i) { return color(i); });

//     var rect = layer.selectAll("rect")
//         .data(function(d) { return d; })
//       .enter().append("rect")
//         .attr("x", function(d) { return x(d.x); })
//         .attr("y", height)
//         .attr("width", x.rangeBand())
//         .attr("height", 0);

//     rect.transition()
//         .delay(function(d, i) { return i * 10; })
//         .attr("y", function(d) { return y(d.y0 + d.y); })
//         .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });

//     svg.append("g")
//         .attr("class", "x axis")
//         .attr("transform", "translate(0," + height + ")")
//         .call(xAxis);

//     d3.selectAll("input").on("change", change);

//     var timeout = setTimeout(function() {
//       d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
//     }, 2000);

//     function change() {
//       clearTimeout(timeout);
//       if (this.value === "grouped") transitionGrouped();
//       else transitionStacked();
//     }

//     function transitionGrouped() {
//       y.domain([0, yGroupMax]);

//       rect.transition()
//           .duration(15000)
//           .delay(function(d, i) { return 1000; })
//           .attr("x", function(d, i, j) { return x(d.x) + x.rangeBand() / n * j; })
//           .attr("width", x.rangeBand() / n)
//           .transition()
//           .attr("y", function(d) { return y(d.y); })
//           .attr("height", function(d) { return height - y(d.y); });
//     }

//     function transitionStacked() {
//       y.domain([0, yStackMax]);

//       rect.transition()
//           .duration(500)
//           .delay(function(d, i) { return i * 10; })
//           .attr("y", function(d) { return y(d.y0 + d.y); })
//           .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
//         .transition()
//           .attr("x", function(d) { return x(d.x); })
//           .attr("width", x.rangeBand());
//     }

//     // Inspired by Lee Byron's test data generator.
//     function bumpLayer(n, o) {

//       function bump(a) {
//         var x = 1 / (.1 + Math.random()),
//             y = 2 * Math.random() - .5,
//             z = 10 / (.1 + Math.random());
//         for (var i = 0; i < n; i++) {
//           var w = (i / n - y) * z;
//           a[i] += x * Math.exp(-w * w);
//         }
//       }

//       var a = [], i;
//       for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
//       for (i = 0; i < 5; ++i) bump(a);
//       return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
//     }
//   }

//   $.ajax({
//     type: "GET",
//     contentType: "application/json; charset=utf-8",
//     url: '/chart_data',
//     dataType: 'json',
//     // data: "{}", 
//     success: function (result) {
//       draw_histogram(result);
//     },
//     error: function (result) {
//       bootbox.alert("Failed to retrieve data");
//     }
//   });


// });