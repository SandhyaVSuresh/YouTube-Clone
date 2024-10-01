import styled from "styled-components";
import { Link } from "react-router-dom";
import { API_KEY } from "../data";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { value_converter } from "../data";
import moment from "moment"

const FeedDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 15px;
  margin-top: 15px;
`;

const VideoCard = styled(Link)``;

const FeedImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const FeedHead2 = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 5px 0;
  color: #000;
`;

const FeedHead3 = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 5px 0;
  color: #555;
`;

const ViewDays = styled.p`
  font-size: 14px;
`;

function Feed({ category, searchQuery }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let url;

    if (searchQuery) {
      // Fetch videos based on search query
      url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchQuery}&maxResults=50&key=${API_KEY}`;
    } else {
      // Fetch popular videos based on category
      url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=98&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    }

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (searchQuery) {
          setData(data.items); // In search, data.items contains video information
        } else {
          setData(data.items); // For most popular videos
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchData();
  }, [category, searchQuery]);  // Re-fetch data when category or search query changes

  return (
    <FeedDiv>
      {data.map((item, index) => {
        const videoId = searchQuery ? item.id.videoId : item.id; // For search results, videoId is in id.videoId, for category it's just id
        const videoCategoryId = item.snippet.categoryId || category; // Handle categoryId for search results or category fetch

        return (
          <VideoCard key={index} to={`video/${videoCategoryId}/${videoId}`}>
            <FeedImg src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
            <FeedHead2>{item.snippet.title}</FeedHead2>
            <FeedHead3>{item.snippet.channelTitle}</FeedHead3>
            <ViewDays>
              {value_converter(item.statistics ? item.statistics.viewCount : 0)} views &bull; {moment(item.snippet.publishedAt).fromNow()}
            </ViewDays>
          </VideoCard>
        );
      })}
    </FeedDiv>
  );
}

Feed.propTypes = {
  category: PropTypes.number.isRequired,  // Category is mandatory for default fetch
  searchQuery: PropTypes.string,          // Search query is optional
};

export default Feed;
