import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { host, siteid } from "../static";
import { useRouter } from "next/router";
import SmallBanner from "../components/SmallBanner";

const Cancellation = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `${host}seo/cancellation/get-cancellation/${siteid}/cancellation`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  const { response, baseResponse } = data;

  return (
    <>
      <Navbar />
      <SmallBanner Bannerhead="Cancellation Policy" />
      {response == undefined || response.length == 0 ? (
        <>
          <h2 className="emptydata">Please wait while data is fetching...</h2>
        </>
      ) : (
        <>
          {" "}
          <Head>
            <meta name="description" content={response.metaDescription} />
            <meta name="title" content={response.metaTitle} />
            <meta name="keyword" content={response.metaKeywords} />
          </Head>
          <div className="container about-paragraph mt-5">
            <div
              className="data-about"
              dangerouslySetInnerHTML={{ __html: response.content }}
            />
          </div>
        </>
      )}

      <Footer />
    </>
  );
};
export default Cancellation;
