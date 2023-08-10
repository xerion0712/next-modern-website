import { Perform } from "./utils/PerformDB";
import { Zoom } from "react-awesome-reveal";
import Image from "next/image";

const PerformCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Zoom triggerOnce>
        {Perform.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col justify-center items-center rounded-lg p-12 h-[10rem] mt-2 border-accent border-2 hover:border-hover"
          >
            <Image
              src={item.image}
              alt="About"
              className="px-2 mt-2 w-[4rem] h-auto"
              width={1070}
              height={1070}
            />
            <h3 className="text-sm md:text-lg my-2"> {item.title}</h3>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default PerformCard;
