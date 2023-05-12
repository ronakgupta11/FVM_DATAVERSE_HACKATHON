
import Head from "next/head";
import { HomeView } from "../views";

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
    </div>
  );
};

export default Home;
