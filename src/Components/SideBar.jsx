import styled from "styled-components";
import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertaiment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";
import PropTypes from "prop-types";

const SidebarDiv = styled.div`
  width: fit-content;
  background-color: #fff;
  height: 100vh;
  padding: 0 1.5%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position:fixed;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;
const ShortCutLinks = styled.div``;
const SideLink = styled.div`
  display:flex;
  align-items:center;
  margin:20px 0px;
  width:fit-content;
  cursor:pointer
  display:flex;
  gap:.7rem;
`;
const SideLinkIcons = styled.img`
  width: 25px;
`;
const SideLinkText = styled.p`
  font-size: 0.9rem;
`;
const Line = styled.hr`
  border: 0px;
  height: 1px;
  background: #ccc;
`;
const SubscribedList = styled.div``;
const SubHead = styled.h2`
  font-size: 1rem;
  margin-top: 10px;
  color: #5a5a5a;
`;
const SideLinkeSubIcon = styled.img`
  width: 35px;
  border-radius: 50%;
`;

function SideBar({ sidebar, category, setCategory }) {
  return (
    <SidebarDiv className={`sidebar ${sidebar ? "" : "Small-sidebar"}`}>
      <ShortCutLinks>
        <SideLink
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <SideLinkIcons src={home} />
          <SideLinkText>Home</SideLinkText>
        </SideLink>
        <SideLink
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <SideLinkIcons src={game_icon} />
          <SideLinkText>Game</SideLinkText>
        </SideLink>
        <SideLink
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <SideLinkIcons src={automobiles} />
          <SideLinkText>Automobiles</SideLinkText>
        </SideLink>
        <SideLink
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <SideLinkIcons src={sports} />
          <SideLinkText>Sports</SideLinkText>
        </SideLink>
        <SideLink
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <SideLinkIcons src={entertaiment} />
          <SideLinkText>Entertainment</SideLinkText>
        </SideLink>
        <SideLink
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <SideLinkIcons src={tech} />
          <SideLinkText>Technology</SideLinkText>
        </SideLink>
        <SideLink
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <SideLinkIcons src={music} />
          <SideLinkText>Music</SideLinkText>
        </SideLink>
        <SideLink
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <SideLinkIcons src={blogs} />
          <SideLinkText>Blogs</SideLinkText>
        </SideLink>
        <SideLink
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <SideLinkIcons src={news} />
          <SideLinkText>News</SideLinkText>
        </SideLink>
        <Line />
      </ShortCutLinks>
      <SubscribedList>
        <SubHead>Subscribed</SubHead>
        <SideLink className={`side-link ${category === 0 ? "active" : ""}`}>
          <SideLinkeSubIcon src={jack} />
          <SideLinkText>JackTech</SideLinkText>
        </SideLink>
        <SideLink className={`side-link ${category === 0 ? "active" : ""}`}>
          <SideLinkeSubIcon src={megan} />
          <SideLinkText>Megans food</SideLinkText>
        </SideLink>
        <SideLink className={`side-link ${category === 0 ? "active" : ""}`}>
          <SideLinkeSubIcon src={cameron} />
          <SideLinkText>CameronBlogs</SideLinkText>
        </SideLink>
        <SideLink className={`side-link ${category === 0 ? "active" : ""}`}>
          <SideLinkeSubIcon src={simon} />
          <SideLinkText>Animal World</SideLinkText>
        </SideLink>
        <SideLink className={`side-link ${category === 0 ? "active" : ""}`}>
          <SideLinkeSubIcon src={tom} />
          <SideLinkText>Food blog</SideLinkText>
        </SideLink>
      </SubscribedList>
    </SidebarDiv>
  );
}

SideBar.propTypes = {
  sidebar: PropTypes.bool,
  setCategory: PropTypes.func,
  category: PropTypes.number,
};

export default SideBar;
