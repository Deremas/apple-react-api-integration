import React, { useEffect, useState } from "react";

function AppleYoutube() {
  const [youTubeVideos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=4&order=date&key=AIzaSyCn9pl40kUa53JLtwpchXCVZint7EABpG4"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      });
  }, []);



  console.log(youTubeVideos);

  return (
    <div>
      <div className="youTubeVideosWrapper">
        <div className="allVideosWrapper">
          <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-12">
                    <div className="title-wrapper">
                        <br />
                        <h1>Latest Videos</h1>
                        <br />
                    </div>
                </div>
                {youTubeVideos?.map((singleVideo, index) => {
                    let videoId = singleVideo.id.videoId;
                    let videoLink = `https://www.youtube.com/watch?v={videoID}`;
                    let videoWrapper = (
                      <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                        <div className="singleVideoWrapper">
                          <div className="videoThumbnail">
                            <a
                              href={videoLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={singleVideo.snippet.thumbnails.high.url}
                                alt="thumbnails"
                              />
                            </a>
                          </div>
                          <div className="videoInfoWrapper">
                            <div className="videoTitle">
                              <a
                                href={videoLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {singleVideo.snippet.title}
                              </a>
                            </div>
                            <div className="videoDisc">
                              {singleVideo.snippet.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                    return videoWrapper
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppleYoutube;
