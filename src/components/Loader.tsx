import { useProgress, Html } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  console.log(progress);
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
};

export default Loader;
