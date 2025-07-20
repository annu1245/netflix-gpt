import { useLocation, useNavigate, useParams } from "react-router";
import WatchNext from "./WatchNext";
import VideoIframe from "./VideoIframe";

const PlayVideo = () => {
    const { videoKey } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const {categoryName, movieId} = location.state;
    
    return (
          <div className="flex">
            <div className="p-5 w-8/12 mt-20">
                <button onClick={() => navigate("/")} className="bg-black text-white px-4 py-2 rounded-lg mb-2">
                    Back
                </button>
                <VideoIframe videoKey={videoKey}/>
            </div>
            <div className="w-4/12 mt-28">
                <h1 className="font-bold text-xl text-black mb-2">Watch Next</h1>
                <WatchNext categoryName={categoryName} movieId={movieId} />
            </div>
            </div>
    );
};

export default PlayVideo;
