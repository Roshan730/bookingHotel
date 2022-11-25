import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=goa,indore,amritsar"
  );
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://static.toiimg.com/photo/msid-88270242,width-96,height-65.cms"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Amritsar</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/515708494/photo/mahatma-gandhi-hall.jpg?s=612x612&w=0&k=20&c=0r0tu3VAbZdmf4RlwI3Q-xZjiMa4abSfsvnDxHVlGCo="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Indore</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Goa</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
