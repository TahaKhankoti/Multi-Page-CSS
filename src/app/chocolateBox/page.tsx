
import ChocolateCard from "@/Components/ChocolateCard"; 
import HeroSection from "@/Components/HeroSection"

export default function Home() {
  const ChocolateBox = [
    {
      category: "Chocolate Box",
      title: "BOX OF 2",
      image: "/assets/Box/2.webp",
      price: "RS 369",
    },
    {
      category: "Chocolate Box",
      title: "BOX OF 4",
      image: "/assets/Box/4.webp",
      price: "RS 749",
    },
    {
      category: "Chocolate Box",
      title: "BOX OF 6",
      image: "/assets/Box/6.webp",
      price: "RS 1449",
    },
    {
      category: "Chocolate Box",
      title: "BOX OF 9",
      image: "/assets/Box/9.webp",
      price: "RS 1699",
    },
    {
      category: "Chocolate Box",
      title: "BOX OF 12",
      image: "/assets/Box/12.webp",
      price: "RS 1749",
    },
    {
      category: "Chocolate Box",
      title: "BOX OF 16",
      image: "/assets/Box/16.webp",
      price: "RS 2099",
    },
    {
      category: "Chocolate Box",
      title: "BOX OF 20",
      image: "/assets/Box/20.webp",
      price: "RS 2349",
    },
    {
      category: "Chocolate Box",
      title: "BOX OF 25",
      image: "/assets/Box/25.webp",
      price: "RS 3999",
    },
    {
        category: "Chocolate Box",
        title: "BOX OF 28",
        image: "/assets/Box/28.webp",
        price: "RS 2799",
      },
  ];

  return (
    <>
      <HeroSection imageSrc="/assets/Box/hero.webp" />
      <section className="chocolateSection">
        <div className="container">
          <div className="chocolateWrap">
            {ChocolateBox.map((item, index) => (
              <div key={index} className="chocolateCard">
                <ChocolateCard
                  category={item.category}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
