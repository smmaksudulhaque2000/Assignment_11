import Tools from "../assets/lotties/animation2.json";
import { useLottie } from "lottie-react";

const options = {
  animationData: Tools,
  autoplay: true,
};

const Lottie2 = () => {
  const { View } = useLottie(options);

  return (
    <div className="w-full p-5">
      {View}
    </div>
  );
};

export default Lottie2;
