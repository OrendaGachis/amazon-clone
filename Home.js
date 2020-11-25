import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12289738"
            title="The Lean StartUp: How Constant Innovation Creates Radicallly Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.ac_sy400_.jpg"
            rating={5}
          />
          <Product
            id="8927492"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="http://brain-images.cdn.dixons.com/8/2/10024128/u_10024128.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="27927879"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?£300x400_retinamobilex2$"
          />
          <Product
            id="98374592"
            title="New Apple iPad pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

          <Product
            id="09898793"
            title="Apple Watch Series 4 (GPS + Cellular, 40mm, Space Gray Aluminum, Black Sport Band)"
            price={598.99}
            rating={5}
            image="https://www.bhphotovideo.com/images/images2500x2500/apple_mtug2ll_a_watch_series_4_gps_1434890.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
