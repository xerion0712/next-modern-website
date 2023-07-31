import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const Importance = () => {

    return (
        <section className="home flex items-center w-full flex-col justify-center md:px-[15rem] px-10 md:py-[7rem] py-[3rem]  bg-secondary text-secondary">
            <div className="max-w-screen p-8 rounded-lg text-center mx-auto bg-accent">
                <Slide triggerOnce>
                    <p className="md:text-3xl text-xl font-bold mt-4"> Time is a Valuable Asset. </p>
                    <p className="md:text-md font-semibold">Those who didn’t give value to it get a big lose.</p>
                </Slide></div>

        </section>
    )
}

export default Importance