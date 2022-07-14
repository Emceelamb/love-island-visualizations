import {
  DragEvent,
  DragEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { data } from "../../data";
import * as d3 from "d3";
import { linkType, nodeType, simulationLinkType } from "../../types";
import { color, DragBehavior, Simulation, SimulationNodeDatum } from "d3";
import { useWindowSize } from "../../utils/useWindowSize";

export const ForceGraph = () => {
  const svgRef = useRef(null);
  const graphRef = useRef(null);
  const legendRef = useRef(null);
  const coupleLegendRef = useRef(null);
  const { width, height } = useWindowSize();
  // const [width, setWidth] = useState(960)
  // const [height, setHeight] = useState(500)
  //@ts-ignore
  const centre_x = width / 2;
  //@ts-ignore
  const centre_y = height / 2;
  const colorScale = d3
    .scaleOrdinal(d3.schemeSet3)
    //@ts-ignore
    .domain([...new Set(data.nodes.map((d) => d.group))]);

  const linkScale = d3
    .scaleOrdinal(d3.schemeCategory10)
    //@ts-ignore
    .domain([...new Set(data.links.map((d) => d.day))]);
  // const colorScale = [
  //   "red",
  //   "green",
  //   "blue",
  //   "gold",
  //   "orange",
  //   "pink",
  //   "yellow",
  //   "purple",
  //   "black"
  // ];

  useEffect(() => {
    if (!width || !height) return;
    const svg = d3
      .select(svgRef.current)
      .attr("preserveAspectRatio", "none")
      .attr("viewbox", [0, 0, width * 1.2, height * 1.2]);

    const graph = d3.select(graphRef.current);

    const defs = svg.append("defs");
    defs
      .selectAll("marker")
      .data(["node"])
      .enter()
      .append("marker")
      .attr("id", function (d) {
        return d;
      })
      .attr("viewBox", "0 -2.5 5 5")
      .attr("refX", 5)
      .attr("refY", 0)
      .attr("markerWidth", 5)
      .attr("markerHeight", 5)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-2.5L5,0L0,2.5")
      .attr("fill", "#999");

    // const links = data.links.map(d => Object.create(d))

    // links.forEach((d, i )=> {
    //   d.source = data.links[i].source
    //   d.target = data.links[i].target
    // })
    const links = data.links;
    const nodes: SVGSVGElement | any = data.nodes;

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(90)
      )
      .force("charge", d3.forceManyBody().strength(-350).distanceMax(150))
      .force("collision", d3.forceCollide().radius(24))
      .force("center", d3.forceCenter(centre_x, centre_y));

    // const drag = simulation => {
    //   const dragStarted = (event, d) => {
    //     if(!event.active) simulation.alphaTarget(0.3).restart()
    //     event.suvject.fx = event.subject

    //   }
    // }
    const drag = (simulation: any) => {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
        //   event.subject.fixed = true;
        console.log(event);
      }
      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    };

    const link = graph
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", (d: any) => {
        return linkScale(d.day);
      })
      .attr("width", "4px");

    const node = graph
      .append("g")
      .attr("class", "node")
      .selectAll("g")
      .data(nodes)
      .join("g");

    // .attr("r", 12)
    // .attr("fill", (d) => colorScale[d.group])

    //@ts-ignore
    node.call(drag(simulation));

    // const circles = node
    //   .append("circle")
    //   .attr("cx", (d: any) => d.x)
    //   .attr("cy", (d: any) => d.y)
    //   .attr("r", 12)
    //   .attr("fill", (d: any) => colorScale[d.group])
    const circles = node.append("g");

    const clip = circles
      .append("clipPath")
      .attr("id", (d) => `clipCircle`)
      .append("circle")
      .attr("r", 16)
      .attr("transform", "translate(18,16)");

    const circleStroke = circles
      .append("circle")
      .attr("r", 16)
      .attr("transform", "translate(2,0)")
      .attr("stroke", (d: any) => colorScale(d.group))
      .attr("stroke-width", 4);

    const clipImg = circles
      .append("svg:image")
      .attr("width", 36)
      .attr("height", 36)
      .attr("xlink:href", (d: any) => `/headshots/${d.image}`)
      .attr("clip-path", `url(#clipCircle)`)
      .attr("transform", "translate(-16,-16)");

    const texts = node
      .append("text")
      .text((d: any) => {
        return `${d.id} - ${d.group}`;
      })
      .attr("text-anchor", "middle")
      .attr("transform", "translate(0,32)")

      .attr("font-size", 5);

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    const handleZoom = (e: any) => {
      d3.select(graphRef.current).attr("transform", e.transform);
    };

    const zoom = d3
      .zoom<SVGSVGElement | any, unknown>()
      .scaleExtent([0.5, 2])
      .on("zoom", handleZoom);

    svg.call(zoom);

    const legend = d3
      .select(legendRef.current)
      .append("g")
      .attr("transform", "translate(10,10)");

    //@ts-ignore
    const legRange = [...new Set(data.nodes.map((d) => d.group))].sort(
      function (a, b) {
        return a - b;
      }
    );

    legend
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("transform", "translate(-10, -15)")
      .attr("fill", "#f4c7e2")
      .attr("width", 140)
      .attr("height", 280);

    const enterLegend = legend.selectAll("circle").data(legRange).join("g");

    enterLegend.append("text").text("Enter Legend").attr("x", 5).attr("y", 15);

    enterLegend
      .append("circle")
      .attr("r", 6)
      .attr("fill", "none")
      .attr("stroke", (d: any) => colorScale(d))
      .attr("stroke-width", 2)
      .attr("cx", 5)
      .attr("cy", (d, i) => i * 20 + 35);
    enterLegend
      .append("text")
      .text((d) => `Entered day ${d}`)
      .attr("font-size", 12)
      .attr("x", 16)
      .attr("y", (d, i) => i * 20 + 40);

    const coupleLegendContainer = d3
      .select(coupleLegendRef.current)
      .append("g")
      .attr("transform", "translate(10,10)");

    //@ts-ignore
    const coupleRange = [...new Set(data.links.map((d) => d.day))].sort(
      function (a, b) {
        return a - b;
      }
    );

    console.log(coupleRange, "r");

    coupleLegendContainer
      .append("rect")
      .attr("x", width)
      .attr("y", 0)
      .attr("fill", "#f4c7e2")
      .attr("width", 140)
      .attr("height", 210);

    const coupleLegend = coupleLegendContainer
      .selectAll("circle")
      .data(coupleRange)
      .join("g");

    coupleLegend
      .append("text")
      .text("Couple Legend")
      .attr("x", width + 10)
      .attr("y", 25);

    coupleLegend
      .append("g")
      .attr("transform", (d, i) => `translate(${width + 15}, ${i * 20 + 40})`)
      .append("line")
      .attr("fill", "none")
      .attr("stroke", (d: any) => linkScale(d))
      .attr("stroke-width", 2)
      .attr("x1", (d, i) => 8)
      .attr("x2", (d, i) => 0)
      .attr("y1", (d, i) => 0)
      .attr("y2", (d, i) => 8);
    coupleLegend
      .append("text")
      .text((d) => `Coupled day ${d}`)
      .attr("font-size", 12)
      .attr("x", width + 32)
      .attr("y", (d, i) => i * 20 + 50);
  }, [width, height]);

  return (
    <svg ref={svgRef} width="100%" height={height}>
      {/* {data["nodes"].map((d, i) => (
        <circle cx={12 * i} cy={20} r={8} fill="red"></circle>
      ))} */}
      <g ref={graphRef} transform="translate(100,0)" />
      {/* <g ref={legendRef} /> */}
      {/* <g ref={coupleLegendRef} /> */}
      <g transform={`translate(${20}, 0)`}>
        <rect width={160} height={320} x={0} fill={"#f4c7e2"}></rect>
        <g transform={`translate(10, 0)`}>
          <text x={0} y={25} className="font-bold">
            Enter Legend
          </text>
          {
            //@ts-ignore
            [...new Set(data.nodes.map((d) => d.group))].map((d, i) => {
              return (
                <>
                  <g transform={`translate(10, ${i * 25 + 50})`}>
                    <circle
                      r={4}
                      cx={0}
                      cy={0}
                      stroke={colorScale(d)}
                      stroke-width="2"
                      fill="none"
                    />
                    <text x={16} y={4} key={i} className="text-xs">
                      Entered on day {d.group}
                    </text>
                  </g>
                </>
              );
            })
          }
        </g>
      </g>
      <g
        transform={
          //@ts-ignore
          `translate(${width - 200}, 0)`
        }
      >
        <rect width={160} height={320} x={0} fill={"#f4c7e2"}></rect>
        <g transform={`translate(10, 0)`}>
          <text x={0} y={25} className="font-bold">
            Couple Legend
          </text>
          {d3.range(11).map((d, i) => {
            return (
              <>
                <g transform={`translate(0, ${d * 25 + 40})`}>
                  <line
                    x1={12}
                    x2={0}
                    y1={0}
                    y2={12}
                    //@ts-ignore
                    stroke={linkScale(d)}
                    stroke-width="2"
                  ></line>
                </g>
                <text x={16} y={d * 25 + 52} key={i} className="text-xs">
                  Coupled on day {d}
                </text>
              </>
            );
          })}
        </g>
      </g>
    </svg>
  );
};
