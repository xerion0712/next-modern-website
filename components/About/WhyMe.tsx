import { Slide, Roll } from "react-awesome-reveal";

const WhyMe = () => {

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const targetClassName = event.currentTarget.getAttribute('data-target');
        const targetElements = document.querySelectorAll(`.${targetClassName}`);
        if (targetElements.length > 0) {
            targetElements[0].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="home flex items-center w-full flex-col justify-center md:px-[15rem] px-3 md:py-[7rem] py-[3rem] text-center bg-yellow text-primary">
            <div className="max-w-4xl mx-auto">
                <Slide triggerOnce className="py-6 text-4xl md:text-6xl  font-bold"> <h1>Your Helping Hand for growth!</h1></Slide>
                <Slide triggerOnce className='md:text-lg text-md mt-5'><p className="mb-3">First off, I want to say that I&apos;m really excited to connect with all of you. We are in same boat as a small front-end developer business owner for quite some time now. </p>
                    <p className="mb-3">It&apos;s disheartening to see hardworking entrepreneurs like you struggling with websites that just don&apos;t deliver the results you deserve.</p>
                    <p className="mb-3">if you&apos;re ready to take your business to the next level and stop searching &quot;how to build a website&quot;.</p>
                    <p> Here&apos;s the deal - I genuinely want to help you succeed and make a positive impact with your online presence.</p>
                </Slide></div>
            <Roll triggerOnce className="font-bold cursor-pointer rounded-lg transition delay-50 px-12 py-3 border-2 border-accent text-priamry hover:border-hover visiable  mt-[3rem]">
                <a href='#' data-target="contact" onClick={handleLinkClick}>
                    Work with Us
                </a>
            </Roll>
        </section>
    )
}

export default WhyMe