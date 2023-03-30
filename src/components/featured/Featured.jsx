import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/26136872.jpg?k=9e1ccdbdeca1c1f2b3b570498db2ef0823d2f342fdb4f910cc618e5ab52a9944&o=&hp=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h6>The Montcalm At Brewery London City</h6>
            <p>
              {" "}
              52 Chiswell Street, City of London, London, EC1Y 4SB, United
              Kingdom{" "}
            </p>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/135052788.jpg?k=455a358cb057c720eb1f14a381d191c9330af26133b77399c79fb1b9d8d7c3a0&o=&hp=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h6>The Chilworth London Paddington</h6>
            <p>
              55 Westbourne Terrace, Paddington, London, Westminster Borough,
              London, W2 3UY, United Kingdom
            </p>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/155822591.jpg?k=ffbe601b947a7aa2538fe21785916a9740120c0b49a586994366a833ecd9b55f&o=&hp=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h6>The Z Hotel Tottenham Court Road</h6>
            <p>
              {" "}
              52 Poland Street, Westminster Borough, London, W1F 7NH, United
              Kingdom
            </p>
          </div>
        </div>
      </>
    </div>
  );
};
export default Featured;
