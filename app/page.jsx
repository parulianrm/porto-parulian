import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* Text */}
                    <div className="">
                        <span>Web Developer</span>
                        <h1>
                            Hello I'm <br />
                            <span>Parulian R Manik</span>
                        </h1>
                    </div>
                    {/* Photo */}
                    <div>photo</div>
                </div>
            </div>
        </section>
    );
};

export default Home;
