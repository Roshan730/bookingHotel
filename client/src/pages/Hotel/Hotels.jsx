import React, { useState } from "react";
import "./Hotels.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import { ImLocation } from "react-icons/im";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { RiCloseCircleFill } from "react-icons/ri";

const Hotels = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const photos = [
    {
      src: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    },
    {
      src: "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/240942961.jpg?k=b3ded44d643acef3a7ce4951e0bff41a98027017859426d2a9e448db44a4304e&o=&hp=1",
    },
    {
      src: "https://www.eroshotels.co.in/wp-content/uploads/2018/04/Pres.-Suite1.jpg",
    },
    {
      src: "https://m.lemontreehotels.com/getattachment/7cb59480-77a9-4f3b-a1b2-875c39bec27c/Business-Rooms.aspx",
    },
    {
      src: "https://m.lemontreehotels.com/getattachment/7cb59480-77a9-4f3b-a1b2-875c39bec27c/Business-Rooms.aspx",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <RiCloseCircleFill
              className="close"
              onClick={() => setOpen(false)}
            />
            <FiArrowLeftCircle
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            <FiArrowRightCircle
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <ImLocation />
            <span>D D Nagar, Gwalior</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹500 at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  src={photo.src}
                  alt="img"
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Kashmir</h1>
              <p className="hotelDesc">
                Kashmir is the very beautiful place in India which is located in
                the northern India between the valley of Great Himalaya and Pir
                Panjal Mountain. This is the place which is known as ‘Paradise
                on Earth’, due to its magnificent beauty. It always offers you
                panoramic views of the beautiful nature. Enchanting Beauty of
                Kashmir never fails to attract tourist from all over the world.
                It is the most beautiful place in India to visit. Everyone
                desires to visit Kashmir due to its unspoiled natural beauty.
                The Kashmir is mostly famous among the children n whichever age
                group you belong to, Kashmir has everything that you are looking
                for.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>₹500 </b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Hotels;
