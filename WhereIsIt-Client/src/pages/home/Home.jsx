import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Loading from "../../components/Loading";
import { useLoaderData } from "react-router-dom";
import Announcements from "../../components/Announcements";
import Story from "../../components/Story";
import MostRecent from "../../components/MostRecent";
import About from "../../components/About";

const Home = () => {
  const items = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (items) {
      setLoading(false);
    }
  }, [items]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner />
      <MostRecent items={items} />
      <About />
      <Announcements />
      <Story />
    </div>
  );
};

export default Home;
