import { ServiceDB } from "./utils/ServiceDB";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {ServiceDB.map((item) => (
        <Fade key={item.title} triggerOnce>
          <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl bg-white transition-shadow duration-300 border border-gray-200">
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
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-base py-4 pb-6 text-gray-600">{item.description}</p>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default ServiceCard;
