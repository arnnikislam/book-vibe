import heroImg from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="hero bg-base-200 min-h-[70vh] my-8 w-[92%] mx-auto rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around w-full">
          <img alt="Tailwind CSS hero component" src={heroImg} />
          <div>
            <h1 className="text-2xl md:text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn bg-[#23BE0A] text-white mt-6">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
