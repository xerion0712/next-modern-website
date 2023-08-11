import ServiceCard from "./ServiceCard";


const Service = () => {
 

  return (
    <section className="serivce px-2 py-16 flex flex-col  justify-center text-primary bg-primary items-center">
    <div className="text-center  py-8">
    <h2 className="text-3xl md:text-4xl font-bold">HARD-TO-BEAT WEB DESIGN SERVICES</h2>
     <p>Unlike most design services, keep you in the loop and share best practices along the way.</p>
    </div>
    
       <ServiceCard/>
    </section>
  );
};

export default Service;