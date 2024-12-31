import Tools from "../assets/lotties/animation.json";
import { useLottie } from "lottie-react";

const options = {
  animationData: Tools,
  autoplay: true,
};

const Lottie = () => {
  const { View } = useLottie(options);

  return (
    <div className="w-96">
      {View}
    </div>
  );
};

export default Lottie;
