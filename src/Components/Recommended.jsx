import styled from "styled-components";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../data";
// import thumbnail1 from "../assets/thumbnail1.png";
// import thumbnail2 from "../assets/thumbnail2.png";
// import thumbnail3 from "../assets/thumbnail3.png";
// import thumbnail4 from "../assets/thumbnail4.png";
// import thumbnail5 from "../assets/thumbnail5.png";
// import thumbnail6 from "../assets/thumbnail6.png";
// import thumbnail7 from "../assets/thumbnail7.png";
// import thumbnail8 from "../assets/thumbnail8.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecommendedDiv = styled.div`
  flex-basis: 30%;
  margin-top: 20px;
`;
const SideVideoListDiv = styled(Link)`
  display: flex;
  padding: 1%;
`;
const VideoImg = styled.img`
  flex-basis: 49%;
  width: 50%;
  border-radius: 5px;
`;
const VideoInfoDiv = styled.div`
  flex-basis: 49%;
  margin-left: 5px;
`;
const VideoHeadingH4 = styled.h4`
  font-size: 15px;
  font-weight: 600;
`;
const ChannelViewP = styled.p`
  font-size: 13px;
`;

function Recommended({ categoryId }) {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RecommendedDiv>
      {apiData.map((item, index) => {
        return (
          <SideVideoListDiv to={`/video/${item.snippet.categoryId}/${item.id}`} key={index}>
            <VideoImg src={item.snippet.thumbnails.medium.url} />
            <VideoInfoDiv>
              <VideoHeadingH4>{item.snippet.title}</VideoHeadingH4>
              <ChannelViewP>{item.snippet.channelTitle} </ChannelViewP>
              <ChannelViewP>
                {value_converter(item.statistics.viewCount)} views
              </ChannelViewP>
            </VideoInfoDiv>
          </SideVideoListDiv>
        );
      })}

      {/* <SideVideoListDiv >
        <VideoImg src={thumbnail2} />
        <VideoInfoDiv>
          <VideoHeadingH4>
            Video Heading for Recommended components
          </VideoHeadingH4>
          <ChannelViewP>Ninu </ChannelViewP>
          <ChannelViewP>199k views</ChannelViewP>
        </VideoInfoDiv>
      </SideVideoListDiv>
      <SideVideoListDiv >
        <VideoImg src={thumbnail3} />
        <VideoInfoDiv>
          <VideoHeadingH4>
            Video Heading for Recommended components
          </VideoHeadingH4>
          <ChannelViewP>Ninu </ChannelViewP>
          <ChannelViewP>199k views</ChannelViewP>
        </VideoInfoDiv>
      </SideVideoListDiv>
      <SideVideoListDiv >
        <VideoImg src={thumbnail4} />
        <VideoInfoDiv>
          <VideoHeadingH4>
            Video Heading for Recommended components
          </VideoHeadingH4>
          <ChannelViewP>Ninu </ChannelViewP>
          <ChannelViewP>199k views</ChannelViewP>
        </VideoInfoDiv>
      </SideVideoListDiv>
      <SideVideoListDiv >
        <VideoImg src={thumbnail5} />
        <VideoInfoDiv>
          <VideoHeadingH4>
            Video Heading for Recommended components
          </VideoHeadingH4>
          <ChannelViewP>Ninu </ChannelViewP>
          <ChannelViewP>199k views</ChannelViewP>
        </VideoInfoDiv>
      </SideVideoListDiv>
      <SideVideoListDiv >
        <VideoImg src={thumbnail6} />
        <VideoInfoDiv>
          <VideoHeadingH4>
            Video Heading for Recommended components
          </VideoHeadingH4>
          <ChannelViewP>Ninu </ChannelViewP>
          <ChannelViewP>199k views</ChannelViewP>
        </VideoInfoDiv>
      </SideVideoListDiv>
      <SideVideoListDiv >
        <VideoImg src={thumbnail7} />
        <VideoInfoDiv>
          <VideoHeadingH4>
            Video Heading for Recommended components
          </VideoHeadingH4>
          <ChannelViewP>Ninu </ChannelViewP>
          <ChannelViewP>199k views</ChannelViewP>
        </VideoInfoDiv>
      </SideVideoListDiv>
      <SideVideoListDiv >
        <VideoImg src={thumbnail8} />
        <VideoInfoDiv>
          <VideoHeadingH4>
            Video Heading for Recommended components
          </VideoHeadingH4>
          <ChannelViewP>Ninu </ChannelViewP>
          <ChannelViewP>199k views</ChannelViewP>
        </VideoInfoDiv>
      </SideVideoListDiv> */}
    </RecommendedDiv>
  );
}

Recommended.propTypes = {
  categoryId: PropTypes.number,
};
export default Recommended;
