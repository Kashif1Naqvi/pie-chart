let svg,data,segmant,section,arr,color;

arr = [40,60]

color=[
  {d1:"#08088c"},
  {d1:"#f7ab07"},
]

svg = d3.select("body").append("svg")
          .attr("width",1000)
          .attr("height",800);

data = d3.pie().sort(null).value(function(d,i){
            return d
      })(arr);
segmant = d3.arc()
           .innerRadius(90)
           .outerRadius(140)
           .padAngle(20)
           .padRadius(20);
section = svg.append("g").attr("transform","translate(250,250)")
              .selectAll("path").data(data).enter()
              .append("path")
              .attr("d",segmant)
              .attr("fill",function(d,i){
                    return color[i].d1
              })
              .style("stroke" ,"white")
              .style('stroke-width', 15)
d3.select("g")
  .selectAll("text")
  .data(arr)
  .enter()
  .append("text")
  .attr("x",-50)
  .attr("y",20)
  .attr("class","text")
  .text(function(d){
    return arr[0]+"%"
  });
