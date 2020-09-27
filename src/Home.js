import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
    <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How constant innovation creates radically successful businesses paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="12321341"
            title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
            price={36.07}
            rating={5}
            image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg"
          />
    </div>
    <div className="home__row">
          <Product
            id="12321341"
            title="AmazonBasics Cooling Gel-Infused, Medium-Firm, Memory Foam Mattress, CertiPUR-US Certified - 12 Inch, Queen"
            price={980}
            rating={5}
            image="https://m.media-amazon.com/images/I/91m696Asu3L._AC_UL320_.jpg"
          />
          <Product
            id="12321341"
            title="AmazonBasics Electric Glass and Steel Kettle - 1.7-Liter"
            price={25.49}
            rating={5}
            image="https://m.media-amazon.com/images/I/812C5q3i5+L._AC_UL320_.jpg"
          />
          <Product
            id="12321341"
            title="AmazonBasics Laptop Computer Backpack - Fits Up To 17 Inch Laptops"
            price={30.84}
            rating={5}
            image="https://m.media-amazon.com/images/I/81vfzNUAXEL._AC_UL320_.jpg"
          />
    </div>
    <div className="home__row">
    <Product
            id="12321341"
            title="All-New Toshiba 43LF621U21 43-inch Smart 4K UHD with Dolby Vision - Fire TV Edition, Released 2020"
            price={245.33}
            rating={5}
            image="https://m.media-amazon.com/images/I/61XJCCT1mIL._AC_UY218_.jpg"
          />
    </div>

    </div>
    )
}

export default Home
