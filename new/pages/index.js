
import Head from "next/head";
import { HomeView } from "../views";
import PostCard from "@/components/PostCard";
import Profile from "@/components/Profile";
import AddPost from "@/components/AddPost";

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
      <AddPost/>
      <PostCard/>
      <Profile/>

    </div>
  );
};

export default Home;
