import SideBar from "../../Components/SideBar";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Feed from "../../Components/Feed";
import './Home.css'
import { useState } from "react";

const VideoContainer = styled.div``;
const Homediv = styled.div`
display:flex;
`;

function Home({sidebar, searchQuery }) {

  const [category,setCategory] = useState(0);

  return (
    <Homediv>
      <SideBar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <VideoContainer className={`container ${sidebar?"":"large-container"}`}>
        <Feed searchQuery={searchQuery} category={category} />
      </VideoContainer>
    </Homediv>
  );
}

Home.propTypes = {
  sidebar: PropTypes.bool,
  searchQuery: PropTypes.string,
}
export default Home;
