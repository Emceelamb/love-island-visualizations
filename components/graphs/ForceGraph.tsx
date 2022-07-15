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
        const id = event.subject.id;
        //@ts-ignore
        const relationships = data.links.filter((d) => d.source.id === id);
        relationships.forEach((d) => {
          const relationshipLine = d3.select(
            //@ts-ignore
            `#${d.source.id}-${d.target.id} text`
          );
          relationshipLine.attr("display", "block");
        });
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
        const id = event.subject.id;
        //@ts-ignore
        const relationships = data.links.filter((d) => d.source.id === id);
        relationships.forEach((d) => {
          const relationshipLine = d3.select(
            //@ts-ignore
            `#${d.source.id}-${d.target.id} text`
          );
          relationshipLine.attr("display", "none");
        });
      }
      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    };

    const link = graph
      .append("g")
      .selectAll("g")
      .data(links)
      .join("g")
      //@ts-ignore
      .attr("id", (d) => `${d.source.id}-${d.target.id}`);

    const linkText = link
      .append("text")
      .text((d) => `Coupled on day ${d.day}`)
      .attr("font-size", 10)
      .attr("display", "none")
      .attr("text-align", "middle")
      .attr("transform", "translate(-30,0)");

    const linkLines = link
      .append("line")
      .attr("id", (d) => "id")
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
      .attr("xlink:href", (d: any) => `./headshots/${d.image}`)
      .attr("clip-path", `url(#clipCircle)`)
      .attr("transform", "translate(-16,-16)");

    const texts = node
      .append("text")
      .text((d: any) => {
        return `${d.id}`;
      })
      .attr("text-anchor", "middle")
      .attr("transform", "translate(0,32)")

      .attr("font-size", 5);

    simulation.on("tick", () => {
      linkText
        .attr("x", (d: any) => {
          return (d.source.x + d.target.x) / 2;
        })
        .attr("y", (d: any) => (d.source.y + d.target.y) / 2);
      // .attr("transform", (d: any) => {
      //   var a2 = Math.atan2(d.source.y, d.source.x);
      //   var a1 = Math.atan2(d.target.y, d.target.x);
      //   var sign = a1 > a2 ? 1 : -1;
      //   var angle = a1 - a2;
      //   var K = -sign * Math.PI * 2;
      //   var angle = Math.abs(K + angle) < Math.abs(angle) ? K + angle : angle;

      //   angle *= 180/Math.PI // rads to degs

      //   return `rotate(${angle})`;
      // });

      linkLines
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
            [...new Set(data.nodes.map((d) => d.group))].sort().map((d, i) => {
              return (
                <>
                  <g transform={`translate(10, ${i * 25 + 50})`}>
                    <circle
                      r={4}
                      cx={0}
                      cy={0}
                      stroke={colorScale(d)}
                      strokeWidth="2"
                      fill="none"
                    />
                    <text x={16} y={4} key={i} className="text-xs">
                      Entered on day {d}
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
        <rect width={160} height={260} x={0} fill={"#f4c7e2"}></rect>
        <g transform={`translate(10, 0)`}>
          <text x={0} y={25} className="font-bold">
            Couple Legend
          </text>
          {
            //@ts-ignore
            [...new Set(data.links.map((d) => d.day))].map((d, i) => {
              return (
                <>
                  <g transform={`translate(0, ${i * 25 + 40})`}>
                    <line
                      x1={12}
                      x2={0}
                      y1={0}
                      y2={12}
                      //@ts-ignore
                      stroke={linkScale(d)}
                      strokeWidth="2"
                    ></line>
                  </g>
                  <text x={16} y={i * 25 + 52} key={i} className="text-xs">
                    Coupled on day {d}
                  </text>
                </>
              );
            })
          }
        </g>
      </g>
    </svg>
  );
};
