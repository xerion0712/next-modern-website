import { ServiceDB } from "./utils/ServiceDB";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Zoom triggerOnce>
      {ServiceDB.map((item) => (
      
          <div key={item.title}  className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl bg-accent transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                   width={600}
                   height={600}
                  />
                </div>
                <h3 className="text-sm md:text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-sm py-4 pb-6 ">{item.description}</p>
            </div>
          </div>
      ))}
      </Zoom>
    </div>
  );
};

export default ServiceCard;
