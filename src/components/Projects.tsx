import Card from "./Card";

const Projects = () => {
  return (
    <section
      className="mb-24 flex flex-col items-center justify-center"
      id="Projects"
    >
      <h1 className="mb-24 text-green-400 ">Projects</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <Card
          title="Pharmto"
          description="Pharmto recommends supplements to patients by analyzing test results and displaying them on the pharmacist's dashboard."
          testLink="https://pharmapp-fullstack-git-dev-berkaycirak.vercel.app/login"
          techStack={["next", "tailwind", "mongodb"]}
        />
        <Card
          title="Heroes Of Nft"
          description="Heroes of NFT is an exciting web3 card game with a cool metaverse. It has a 3D landing page made with Three.js, where you can scroll to explore fun interactions."
          testLink="https://heroesofnft.com/"
          techStack={["next", "tailwind", "threejs"]}
        />
      </div>
    </section>
  );
};

export default Projects;
