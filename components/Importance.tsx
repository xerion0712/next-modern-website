import { Zoom } from "react-awesome-reveal";

const Importance = () => {

    return (
        <section className="home flex items-center w-full flex-col justify-center md:px-[15rem] px-2 md:py-[7rem]   bg-secondary text-secondary">
             <Zoom triggerOnce>
            <div className="max-w-screen px-[2rem] md:px-[5rem] py-[1rem] rounded-lg text-center mx-auto bg-accent">
              
                    <p className="md:text-3xl text-xl font-bold mt-4"> Time is a Valuable Asset. </p>
                    <p className="md:text-md font-semibold">Those who didn&apos;t give value to it get a big lose.</p>
              </div>
              </Zoom>

        </section>
    )
}

export default Importance