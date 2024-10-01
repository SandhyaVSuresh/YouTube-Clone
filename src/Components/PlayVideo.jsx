import styled from "styled-components";
// import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
// import user_profile from '../assets/user_profile.jpg'
import { useEffect, useState } from "react";
import {API_KEY, value_converter} from "../data"
import moment from "moment"
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const PlayVideos = styled.div`
  flex-basis: 69%;
  margin: 2% 1.5%;
`;

// const Videos = styled.video`
//   width: 100%;
//   border-radius: 8px;
// `;

const Videos = styled.iframe`
  width: 100%;
  height:37vw;
  border-radius: 8px;
`;
const TitleH3 = styled.h3`
  margin-top: 10px;
  font-size: 22px;
  font-weight: 600;
`;

const PlayVideoInfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  font-size: 14px;
  color: #5a5a5a;
`;

const ViewsLikesP = styled.p``;

const ButtonsDiv = styled.div``;

const ItemSpan = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 15px;
`;

const ItemsImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 10px 0;
`;

const ProfileImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const ChannelP = styled.div`
font-size:18px;
font-weight:600;
`;

const SubSpan = styled.span`
font-size:12px;
color:gray;
`;

const Publisher = styled.div`
margin-top:20px;
`;

const PublisherDetailsDiv = styled.div`
flex:1;
line-height:18px;
margin-left:15px;
`;

const SubButton = styled.button`
background:red;
color:#fff;
border:none;
border-radius:5px;
padding: 8px 30px;
`;

const VidDescriptionDiv = styled.div`
padding-left:55px;
margin:15px 0;
`;

const Text1p = styled.p`
color:#5a5a5a;
font-size:14px;
margin-bottom:5px;
`;

const CommentH4 = styled.h4`
font-size:15px;
font-weight:600;
color:#5a5a5a;
`;

const CommentDiv = styled.div`
display:flex;
margin-top:20px;
`;

const CommentProfileImg = styled.img`
border-radius:50%;
width:40px;
height:40px;
margin-right:15px
`;

const CommentContentDiv = styled.div``;

const CommentHead = styled.h3`
margin-top:10px;
font-size:14px;
font-weight:600;
`;

const DaySpan = styled.span`
font-size:12px;
color:#5a5a5a;
font-weight:500;
margin-left:10px;
`;

const CommentP = styled.p`
color:#5a5a5a;
font-size:14px;
`;

const CommentActionDiv = styled.div`
margin-top:20px;
`;

const CommentActionImg = styled.img`
width:20px;
margin-right:3px;
`;

const CommentCountSpan = styled.span`
margin-right:30px;
  font-size:13px;
  color:#5a5a5a;
`;


function PlayVideo() {

  const{videoId} = useParams()

  const [apiData, setApiData] = useState (null)
  const [channelData, setChannelData] = useState(null)
  const [commentData, setCommentData] = useState([])

  const fetchVideoData = async() =>{
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]))
  }

  const fetchOtherData = async() =>{
    // Fetch Channel Data
    const channelDetails_url = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelDetails_url).then(res=>res.json()).then(data => setChannelData(data.items[0]))
  
    //Fetch Comment Data
    const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(res=>res.json()).then(data => setCommentData(data.items))
  }

  useEffect(()=>{
    fetchVideoData()
  },[videoId])

  useEffect(()=>{  
    fetchOtherData()
  },[apiData])


  return (
    <PlayVideos>
      {/* <Videos src={video1} controls autoPlay muted></Videos> */}
      <Videos src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Videos>
      <TitleH3>{apiData?apiData.snippet.title:"Title Here"}</TitleH3>
      <PlayVideoInfoDiv>
        <ViewsLikesP>{apiData?value_converter(apiData.statistics.viewCount):"16K"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</ViewsLikesP>
        <ButtonsDiv className="flex-div">
          <ItemSpan>
            <ItemsImg src={like} />
            {apiData?value_converter(apiData.statistics.likeCount):155}
          </ItemSpan>
          <ItemSpan>
            <ItemsImg src={dislike} />
          </ItemSpan>
          <ItemSpan>
            <ItemsImg src={share} />
            Share
          </ItemSpan>
          <ItemSpan>
            <ItemsImg src={save} />
            Save
          </ItemSpan>
        </ButtonsDiv>
      </PlayVideoInfoDiv>
      <Line />
      <Publisher className="flex-div">
        <ProfileImg src={channelData?channelData.snippet.thumbnails.default.url:jack} />
        <PublisherDetailsDiv>
          <ChannelP>{apiData?apiData.snippet.channelTitle:""}</ChannelP>
          <SubSpan>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</SubSpan>
        </PublisherDetailsDiv>
        <SubButton>Subscribe</SubButton>
      </Publisher>
      <VidDescriptionDiv>
        <Text1p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</Text1p>
        <Line />
        <CommentH4>{apiData?value_converter(apiData.statistics.commentCount):130} Comments</CommentH4>
        {commentData.map((item,index) => {
          return(
            <CommentDiv key={index}>
          <CommentProfileImg src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} />
          <CommentContentDiv>
            <CommentHead>
              {item.snippet.topLevelComment.snippet.authorDisplayName} <DaySpan>1 day ago</DaySpan>
            </CommentHead>
            <CommentP>
            {item.snippet.topLevelComment.snippet.textDisplay}
            </CommentP>
            <CommentActionDiv className="flex-div">
              <CommentActionImg src={like} />
              <CommentCountSpan>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</CommentCountSpan>
              <CommentActionImg src={dislike} />
            </CommentActionDiv>
          </CommentContentDiv>
        </CommentDiv>
          )
        })}
      </VidDescriptionDiv>
    </PlayVideos>
  );
}

// PlayVideo.propTypes = {
//   videoId: PropTypes.number.isRequired,
// };
export default PlayVideo;
