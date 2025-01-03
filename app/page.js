"use client";
import React from "react";

import SectionCard from "./components/SectionCard";
import GiftCard from "./components/GiftCard";
import ProductSlider from "./components/ProductSlider";
import ImageSlider from "./components/ImageSlider";
import Slider from "./components/Slider";
import AesopFooter from "./components/AesopFooter";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-[#f6f5e8] pb-24">
        <Slider />
      </div>

      <div className="bg-[#e7e6e0] flex flex-col gap-20">
        <SectionCard
          title="Festive giving"
          heading="A complimentary sleeve for your gifts"
          description="Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the ‘gift packaging’ option at checkout. Exclusions apply."
          ctaText="Explore gifts"
          imageSrc="Aesop_Festive.jpg"
        />

        <div className="flex items-center flex-col md:flex-row md:px-24 gap-4 px-4 pt-24">
          <GiftCard
            imageSrc="./aromatic.avif"
            title="Six aromatic encounters"
            description="Fragrance Anthology Volume I invites curious noses to explore and experience our range of unorthodox aromas, from the fresh to the floral, the woody and the opulent."
          />
          <GiftCard
            videoSrc="./GiftVideo.mp4"
            title="Home gifts"
            description="From hand care to home fragrances, explore a curation of products that are ideal for hospitable hosts, the house-proud or the recently moved in."
          />
        </div>

        <ProductSlider />

        <div className="flex items-center flex-col md:flex-row md:px-24 gap-4 px-4 pt-24">
          <GiftCard
            imageSrc="./travel-bag.avif"
            title="For their travel bag"
            description="Explore a range of travel-size formulations for seasoned excursionists, including preselected kits, sun care and in-flight essentials."
          />
          <GiftCard
            videoSrc="./Noteworthy-gifts.mp4"
            title="Noteworthy gifts"
            description="From time-honoured body care to standout skin care—explore a range of formulations that remain dependably crowd-pleasing."
          />
        </div>

        <SectionCard
          title="Our online offering"
          heading="Gestures to enhance your experience"
          description="Discover a suite of complimentary additions available with every order, including curated product samples, gift wrapping in our signature cotton bag and personalised gift messaging."
          ctaText="Explore our online offering"
          className="md:flex-row-reverse"
          shouldRenderSlider={true}
          renderComponent={<GiftCard videoSrc="/Gestures.mp4" />}
        />

        <SectionCard
          title="Festive giving"
          heading="Corporate gifts"
          description="Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery."
          ctaText="Learn more about this service"
          imageSrc="/women.avif"
        />

        <SectionCard
          heading="Store locator"
          description="Our consultants are available to host you in-store and provide tailored guidance on gift purchases."
          ctaText="Find a nearby store"
          className="md:flex-row-reverse"
          shouldRenderSlider={true}
          renderComponent={<ImageSlider />}
        />

        <SectionCard
          heading="Virtual guidance from home's comfort"
          description="For advice on our range of formulations, we welcome you to book a complimentary live consultation. Following your appointment, you will receive a bespoke product sample when you place an order."
          ctaText="Discover live consultation"
          imageSrc="/HandImage.avif"
        />

        <div className="py-24">
          <h1 className="text-center font-semibold text-2xl">
            ‘The manner of giving is worth more than the gift.’
          </h1>
          <p className="text-center font-semibold">Pierre Corneille</p>
        </div>

        <AesopFooter />
      </div>
    </div>
  );
};

export default HomePage;
