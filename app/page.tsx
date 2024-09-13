import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Btech Student</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Sravan P Kumar</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            {/* Button and Social */}
            <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-4">
              <a href="assets/photo.jpg" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-white hover:text-black transition-all duration-500 font-bold"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div>
                <Social
                  containerStyles="flex gap-6 justify-center xl:justify-start"
                  iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-xl hover:bg-white hover:text-primary transition-all duration-500" 
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
