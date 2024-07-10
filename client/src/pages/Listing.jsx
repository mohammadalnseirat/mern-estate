import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

const Listing = () => {
  SwiperCore.use([Navigation]);
  const params = useParams();
  // some state to save data and loading and error messages:
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect to fetch data:
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        setError(false);
        // create a response:
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        // convert response to json:
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  return (
    <main>
      {loading && (
        <p className="text-center my-7 text-3xl text-green-700">Loading....</p>
      )}
      {error && (
        <div className="flex items-center justify-center my-7 flex-col gap-4">
          <p className="text-center italic  text-2xl text-red-700 ">
            Something Went Wrong. Please try again later.
          </p>
          <Link
            className="text-3xl rounded-2xl  bg-gray-300 p-2 hover:bg-gray-900 hover:rounded-full hover:text-white transition-all duration-150"
            to={"/"}
          >
            <IoReturnUpBack />
          </Link>
        </div>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[450px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </main>
  );
};

export default Listing;
