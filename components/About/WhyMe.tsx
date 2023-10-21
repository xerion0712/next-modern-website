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
                <div className="py-3 text-4xl md:text-6xl  font-bold"> <h1>Your Helping Hand for growth!</h1></div>
                <div className='md:text-lg text-md m-8'>
                    <p className="mb-3">First off, I want to say that I&apos;m really excited to connect with all of you. I am in same boat as a small front-end developer business owner for quite some time now. It&apos;s disheartening to see hardworking entrepreneurs like you struggling with websites that just don&apos;t deliver the results you deserve. if you&apos;re ready to take your business to the next level and stop searching &quot;how to build a website&quot;. Here&apos;s the deal - I genuinely want to help you succeed and make a positive impact with your online presence.</p>

                </div>
        <a href='#' className="font-bold cursor-pointer rounded-lg transition delay-50 w-20 h-20 px-12 py-3 border-2 border-accent text-priamry hover:border-hover visiable" data-target="contact" onClick={handleLinkClick}>
                    Work with Us
                </a>
            </div>
        </section>
    )
}

export default WhyMe