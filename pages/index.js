import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import Travel from "../components/Travel";
import London from "../components/London";
import BgTravel from "../components/BgTravel";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import CardSlick from "../components/CardSlick";
import Engine from "@/components/home_comp/SearchEngine/Engine";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Easy Vacation</title>
        <title>Book Cheap Flights in USA and Canada | BookEasyVacation</title>
        <meta
          name="description"
          content="Find the best deals on flight bookings in the USA and Canada with BookEasyVacation. Our user-friendly platform makes it easy to search, compare, and book the perfect flight for your next trip. Don't miss out on our exclusive discounts and promotions. Plan your journey today with BookEasyVacation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Banner />
      <Engine />
      <AboutSection />
      <Travel />
      {/* <London /> */}
      <CardSlick />
      <BgTravel />
      <Footer />
    </>
  );
}
