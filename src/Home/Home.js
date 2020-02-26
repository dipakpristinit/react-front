import React from "react";
import Banner from "../core/Banner";
import Header from "../core/Header";
import ProductList from "../core/ProductList";
import OurGaurantees from "../core/OurGaurantees";
import OurCustomers from "../core/OurCustomers";
import GetStart from "../core/GetStart";
import LatestNews from "../core/LatestNews";
import ProductFeature from "../core/ProductFeature";
import Footer from "../core/Footer";

const Home = () => (
    <main>
        <Header/>
        <Banner />
        <ProductList />
        <OurGaurantees />
        <OurCustomers />
        <GetStart />
        <LatestNews />
        <ProductFeature />
        <Footer/>
    </main>
)

export default Home;