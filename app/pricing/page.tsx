import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PricingSection from "./PricingSection";
import SubscribeSection from "./SubscribeSection";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <PricingSection />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}
