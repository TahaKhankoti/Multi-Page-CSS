
import ChocolateCard from "@/Components/ChocolateCard"; 
import HeroSection from "@/Components/HeroSection";

export default function QuirkyBars() {
  const QuirkyBars = [
    {
      category: "Quirky Bars",
      title: "BALLAY BALLAY",
      image: "/assets/Quirky/Lub.webp",
      price: "RS 799",
    },
    {
      category: "Quirky Bars",
      title: "YOURE MY BEST VIEW",
      image: "/assets/Quirky/View.webp",
      price: "RS 799",
    },
    {
      category: "Quirky Bars",
      title: "AJ TUMHARA DIN HAI",
      image: "/assets/Quirky/tumhara.webp",
      price: "RS 799",
    },
    {
      category: "Quirky Bars",
      title: "I LOVE YOU 3000",
      image: "/assets/Quirky/3000.webp",
      price: "RS 799",
    },
    {
      category: "Quirky Bars",
      title: "SEHAT BANAO",
      image: "/assets/Quirky/banao.webp",
      price: "RS 799",
    },
    {
      category: "Quirky Bars",
      title: "THANK YOU",
      image: "/assets/Quirky/thank you.webp",
      price: "RS 799",
    },
    {
      category: "Quirky Bars",
      title: "YAAR HAI",
      image: "/assets/Quirky/yaar.webp",
      price: "RS 799",
    },
    {
      category: "Quirky Bars",
      title: "YOURE THE BEST",
      image: "/assets/Quirky/best.webp",
      price: "RS 799",
    },
  ];

  return (
    <>
      <HeroSection imageSrc="/assets/Quirky/hero.webp" />
      <section className="chocolateSection">
        <div className="container">
          <div className="chocolateWrap">
            {QuirkyBars.map((item, index) => (
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
