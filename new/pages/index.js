
import Head from "next/head";
import { HomeView } from "../views";
import PostCard from "@/components/PostCard";
import Profile from "@/components/Profile";
import AddPost from "@/components/AddPost";
import Navbar from "@/components/Navbar";
// import { Alert } from "flowbite-react";

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
      <Navbar/>
      <HomeView />
      <AddPost/>
      {/* <Alert color="info">Alert!</Alert> */}
      <PostCard/>
      <Profile/>

    </div>
  );
};

export default Home;
