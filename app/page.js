// import { CarouselDemo } from "@/components/CarouselDemo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import Card from "@/components/Card";
import Slider from "@/components/Slider";

export default function Home() {
  const Products = [
    {
      id: 1,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Pink",
      price: 599,
      rating: 5,
      image: "/product2.webp",
    },
    {
      id: 2,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Blue",
      price: 699,
      rating: 4,
      image: "/product2.webp",
    },
    {
      id: 3,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Green",
      price: 799,
      rating: 3,
      image: "/product3.webp",
    },
    {
      id: 4,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Red",
      price: 899,
      rating: 2,
      image: "/product4.webp",
    },
    {
      id: 5,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Pink",
      price: 599,
      rating: 5,
      image: "/product2.webp",
    },
    {
      id: 6,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Pink",
      price: 599,
      rating: 5,
      image: "/product2.webp",
    },
    {
      id: 7,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Pink",
      price: 599,
      rating: 5,
      image: "/product2.webp",
    },
    {
      id: 8,
      title: "Apple Watch Series 7 GPS, Aluminium Case, Pink",
      price: 599,
      rating: 5,
      image: "/product2.webp",
    },
  ];
  return (
    <>
      <Header />
      <HeroSection />
      {/* <CarouselDemo /> */}
      <Slider />
      <div className="flex py-4 px-8 flex-wrap bg-slate-100">
        {" "}
        {Products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            rating={product.rating}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <Info />
      <Footer />
    </>
  );
}
