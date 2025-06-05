import React from "react";

const Blogs = () => {
  return (
    <>
      <div id="blog" class="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Our Blog</h2>
                <span>
                  Explore captivating stories and insightful narratives in our
                  diverse array of blogs.
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="blog-box">
                <figure>
                  <img src="images/blog-image0.jpg" alt="#" />
                  <span>4 June 2024</span>
                </figure>
                <div class="travel">
                  <span>Post By : Book Easy Vacation</span>
                  <p>
                    <strong class="Comment"> 06 </strong> Comment
                  </p>
                  <p>
                    <strong class="like">05 </strong>Like
                  </p>
                </div>
                <h3>Maldives Amazing Tour</h3>
                <p>
                  Dive into the allure of the Maldives with our blog, where
                  crystal-clear turquoise waters meet pristine white-sand
                  beaches. Explore exclusive resorts, vibrant coral reefs, and
                  indulge in the luxury of overwater bungalows. Uncover the
                  secrets of this tropical paradise and let your imagination set
                  sail in the breathtaking beauty of the Maldives.
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="blog-box">
                <figure>
                  <img src="images/blog-image.jpg" alt="#" />
                  <span>1 June 2024</span>
                </figure>
                <div class="travel">
                  <span>Post By : Book Easy Vacation</span>
                  <p>
                    <strong class="Comment"> 06 </strong> Comment
                  </p>
                  <p>
                    <strong class="like">05 </strong>Like
                  </p>
                </div>
                <h3>India Tour</h3>
                <p>
                  Embark on a virtual journey through the vibrant tapestry of
                  India with our blog. Immerse yourself in the kaleidoscope of
                  cultures, historical wonders, and culinary delights that
                  define this diverse nation. From ancient temples to bustling
                  markets, join us in exploring the rich heritage and
                  captivating landscapes of India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
