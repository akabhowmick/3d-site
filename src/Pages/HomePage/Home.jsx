import "./HomePage.css";
import { SingleProduct } from "../../Components/SingleProductPage/SingleProduct";
import { bannerProducts } from "../../products/banner-products";
import { homePageImages } from "../../products/imagesForCarousel";
import { ImageCarousel } from "../../Components/ImageCarousel";
import { Slide, Fade } from "react-awesome-reveal";
import { aboutUs } from "../../products/siteText";

export const Home = () => {
  // const subheaders = ["Front Facade", "Full House", "Accessories"];
  return (
    <>
      <div className="hero">
        <ImageCarousel images={homePageImages} comingFrom="home-page" />
        {/* <button className="hero-learn">Learn More!</button> */}
      </div>
      <section>
        <div className="below-hero">
          <div className="block-reveal">
            <h2 className="section-header">
              <Fade cascade damping={1e-1}>
                FEATURED PRODUCTS
              </Fade>
            </h2>
          </div>
          <hr className="line-below" />
        </div>

        <div className="products-display">
          {bannerProducts.map((product) => {
            if (product) {
              return (
                <div className="products-display-product" key={product.id}>
                  <h4 className="product-subheader">
                    <Fade cascade damping={1e-2}>
                      {product.type.toLocaleUpperCase()}
                    </Fade>
                  </h4>
                  <hr className="line-below-products" />
                  <Slide>
                    <SingleProduct
                      class="home-product-banner"
                      product={product}
                      comingFrom={"home-page"}
                    />
                  </Slide>
                </div>
              );
            }
          })}
        </div>

        <div className="about-section">
          <div className="about-flex">
            <iframe
              id="main-video"
              src="https://www.youtube.com/embed/gUpL471-EQg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="about-us-text">
              <h2>ABOUT US</h2>
              {aboutUs.map((paragraph, index) => {
                return (
                  <div className="about-section-paragraph" key={index}>
                    <p>{paragraph}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
