const BannerCard = ({ item }) => {
  console.log(item);
  return (
    <div className="box">
      <div className="coverImg">
        <img src={item.poster_path} alt="" />
      </div>
      <div className="content flex">
        <div className="details row">
          <h1>{item.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
