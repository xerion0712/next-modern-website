import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const Testimonial = () => {

    return (
        <section className="home flex items-center w-full flex-col justify-center md:px-[15rem] px-10 md:py-[7rem] py-[3rem]  bg-secondary text-primary">
            <div className="w-full mx-auto">
                <Slide triggerOnce>
       <Image
         src="/img/qt.png"
         alt="About"
         className=" w-[2rem] h-auto"
         width={200}
         height={200}
       />
  
                    <p className="md:text-2xl text-lg font-bold mt-4"> Maryam with magical touch in building UIs using React. Working alongside maryam has been a pleasure, and her friendly attitude adds an extra layer of joy to the journey. I highly recommend her for your needs!</p>
                    <p className="md:text-md font-semibold mt-6">Jon Chris </p>
                    <p>CTO</p>
                </Slide></div>

        </section>
    )
}

export default Testimonial