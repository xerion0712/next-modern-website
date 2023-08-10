import { ServiceDB } from "./utils/ServiceDB";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl px-4">
        <Zoom triggerOnce>
      {ServiceDB.map((item) => (
          <div key={item.title}  className="relative overflow-hidden duration-300  border-accent hover:border-hover border-2 md:h-[12rem]">
            <div className="p-4">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 mr-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                   width={600}
                   height={600}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-sm md:text-lg ">{item.description}</p>
            </div>
          </div>
      ))}
      </Zoom>
    </div>
  );
};

export default ServiceCard;
