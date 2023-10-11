const Card = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
  return (
    <div className="w-[100px] h-[100px]   backdrop-blur-[20px] cursor-pointer ">
      <img src={imgUrl} alt={name} className="w-full h-full" />
    </div>
  );
};

export default Card;
