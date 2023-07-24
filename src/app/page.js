import Head from "next/head";
import Header from "@/Components/Header";
import Banner from "@/Components/Banner";
import SmallCard from "@/Components/SmallCard";
import BigCard from "@/Components/BigCard";
import jsonData from "../../public/files.json";
import jsonData2 from "../../public/card1.json";
import BiggerCard from "@/Components/BiggerCard";
import Footer from "@/Components/Footer";

export default function Home() {
  // Map the data outside the JSX code
  const renderedCards = jsonData?.map(({ img, location, distance }) => (
    <SmallCard key={img} img={img} distance={distance} location={location} />
  
  ));

  const largeCards = jsonData2?.map(({img,title})=> (
    <BigCard key={img} img={img} title={title}/>
  ))
  


  return (
    <div className="">
      <Head>
        <title>Airbnb App</title>
        <link rel="icon" href="/path/to/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Render the mapped cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{renderedCards}</div>
          
        </section>
        <section>
          <h2  className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide">{largeCards}</div>
        </section>
        <BiggerCard
        img="https://i.imgur.com/6iV1BOz.jpg"
        title="The Greatest Outdoors"
        description="Wishlist Curated by Airbnb"
        buttonText="Get inspired"
        />
      </main>
      <Footer/>
    </div>
  );
}

