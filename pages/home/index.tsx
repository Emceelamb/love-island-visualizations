import { useCallback } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { data } from "../../data";

import * as d3 from "d3";
import { ForceGraph } from "../../components/graphs/ForceGraph";
import { nodeType } from "../../types";

const Home: NextPage = () => {
  const nodeHoverTooltip = useCallback((node: nodeType) => {
    return `<div>${node.id}</div>`;
  }, []);

  return (
    <div className="bg-[#f7d6e9] h-full">
      <Head>
        <title>Love Island Visualizations</title>
        <meta name="description" content="Love Island Data Visualizations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        {/* <ForceGraph
          linksData={data.links}
          nodesData={data.nodes}
          nodeHoverTooltip={nodeHoverTooltip}
        /> */}
        <h1 className="text-center text-5xl font-bold pt-8 text-red-500">Love Island</h1>
        <h2 className="text-center text-2xl font-bold  text-red-500">Season 7</h2>
        <ForceGraph />
      </main>
    </div>
  );
};

export default Home;
