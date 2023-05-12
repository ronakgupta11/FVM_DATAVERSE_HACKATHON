
import Head from "next/head";
import { HomeView } from "../views";
import PostCard from "@/components/PostCard";

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Gari vNFT</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <HomeView />
      <PostCard/>
    </div>
  );
};

export default Home;
