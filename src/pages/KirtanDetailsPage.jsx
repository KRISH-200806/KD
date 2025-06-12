import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Header";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function KirtanDetailsPage() {
  const [kirtanData, setKirtanData] = useState({
    playlists: [],
    songs_in_playlists: [],
  });
  const [loading, setLoading] = useState(true);
  const { song_code } = useParams();
  const navigate = useNavigate();

  // Fetch kirtan details including all pads
  const fetchKirtanDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://kirtanavali.ssgd.org/api/get-kirtans-details/${song_code}`
      );

      if (response.data.status) {
        setKirtanData(response.data.response);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Navigate to a different pad without showing loading
  const handlePadClick = (padSongCode) => {
    // If the pad is already in our data, don't show loading
    const padExists = kirtanData.songs_in_playlists.some(
      (song) => song.song_code === padSongCode
    );

    if (padExists) {
      navigate(`/kirtan/${padSongCode}`);
    } else {
      // Only set loading if we need to fetch new data
      navigate(`/kirtan/${padSongCode}`);
    }
  };

  useEffect(() => {
    if (song_code) {
      // Only fetch if we don't have data or if the current song isn't in our data
      const songExists = kirtanData.songs_in_playlists.some(
        (song) => song.song_code === song_code
      );

      if (!songExists || kirtanData.songs_in_playlists.length === 0) {
        fetchKirtanDetails();
      } else {
        setLoading(false);
      }
    }
  }, [song_code]); // Re-fetch when song_code changes

  // Find current kirtan from songs_in_playlists
  const currentKirtan =
    kirtanData.songs_in_playlists.find(
      (song) => song.song_code === song_code
    ) ||
    kirtanData.songs_in_playlists[0] ||
    null;

  if (loading) {
    return (
      <div className="bg-[#f8f1ee] min-h-screen">
        <Navbar />
        <div className="max-w-7xl w-full mx-auto mt-20 text-center">
          <p className="text-xl text-[#c05e36]">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#f8f1ee] min-h-screen">
      <div>
        <Navbar />
      </div>

      <div className="max-w-7xl w-full mx-auto mt-5 px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="xs:p-2 sm:p-0 sm:w-7 sm:h-7 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#c05e36]/20"
          >
            <BsArrowLeft className="w-5 h-5 text-[#c05e36]" />
          </Link>
          <h1 className="xs:text-xl sm:text-2xl font-bold text-[#c05e36] text-center">
            {currentKirtan?.title || "કિર્તન"}
          </h1>
          <span className="flex">
            <FaRegStar className="text-[#c05e36] w-5 h-5" />
          </span>
        </div>
      </div>

      {/* All Pads List */}
      {kirtanData.songs_in_playlists.length > 0 && (
        <div className="max-w-7xl w-full mx-auto mt-5 px-4">
          <div>
            <div className="flex overflow-x-auto pb-2 hide-scrollbar">
              <div className="flex flex-nowrap gap-2">
                {kirtanData.songs_in_playlists.map((pad) => (
                  <div
                    key={pad.song_code}
                    onClick={() => handlePadClick(pad.song_code)}
                    className={`px-6 py-3 rounded-full text-center cursor-pointer transition-all flex-shrink-0 ${
                      pad.song_code === song_code
                        ? "bg-[#c05e36] text-white font-bold"
                        : "bg-white shadow-lg"
                    }`}
                  >
                    {pad.current_pad || pad.song_code}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Current Kirtan Details */}
      {currentKirtan && (
        <div className="max-w-7xl w-full mx-auto mt-5 px-4 mb-8">
          <div className="bg-white rounded-2xl">
            <p
              className="font-gujarati2 text-2xl flex justify-center md:w-2/3 md:mx-auto p-6"
              dangerouslySetInnerHTML={{ __html: currentKirtan.lyrics }}
            ></p>
          </div>

          <div className="grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            {currentKirtan.more_information &&
              currentKirtan.more_information.map((info, index) => (
                <div
                  key={index}
                  className="bg-white w-full py-2 flex rounded shadow-md px-3"
                >
                  <div>
                    <img src="#" alt="" />
                  </div>
                  <div>
                    <p>
                      {info.title} : - {info.value || "-"}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default KirtanDetailsPage;
