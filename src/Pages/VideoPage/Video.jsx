import PlayVideo from "../../Components/PlayVideo"
import styled from 'styled-components'
import Recommended from "../../Components/Recommended";
import { useParams } from "react-router-dom";

const PlayContainer = styled.div`
background:#f9f9f9;
display:flex;
justify-content:space-between;
padding: 20px 2%;
@media (max-width:1000px) {
// display:flex;
flex-direction:column;
// justify-content:center;
}
`;

function Video() {
  const {videoId,categoryId} = useParams();
  return (
    <PlayContainer>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={Number(categoryId)}/>
    </PlayContainer>
  )
}

export default Video