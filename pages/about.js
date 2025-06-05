import Service from "../components/Service";
import Intro from "../components/Intro";
import Discover from "../components/Discover";
import React from "react";
import Navbar from "../components/Navbar";
import SmallBanner from "../components/SmallBanner";
import London from "../components/London";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import Head from "next/head";
// import Promotion from '../components/Promotion'

const about = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title> About Us | BookEasyVacation.com </title>
        <meta
          name="description"
          content="Discover the easiest way to book flights on BookEasyVacation.com. Find cheap flight booking options and business class flights that suit your travel needs."
        />
      </Head>
      <SmallBanner Bannerhead="About Us" />
      <Intro />
      <Discover />
      <Service />
      <London />

      <Blogs />
      {/* <Promotion/> */}
      <Footer />
    </>
  );
};

export default about;
