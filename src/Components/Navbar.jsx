import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../assets/YouTubeLogo-removebg-preview.png";
import Menu from "../assets/menu.png";
import Search_icon from "../assets/search.png";
import Upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/jack.png";
import PropTypes from "prop-types";
import "./Navbar.css";

const FlexDiv = styled.nav`
  top: 0;
  padding: 5px 2%;
  justify-content: space-between;
  position: sticky;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 10;
`;
const NavLeft = styled.div`
  justify-content: space-between;
`;
const HomeLink = styled(Link)``;
const MenuImg = styled.img`
  cursor: pointer;
  width: 22px;
  @media (max-width: 900px) {
    width: 20px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;
const LogoImg = styled.img`
  width: 120px;
  @media (max-width: 900px) {
    width: 90px;
  }
`;
const NavMiddle = styled.div``;
const SearchBox = styled.div`
  justify-content: center;
  border: 1px solid gray;
  border-radius: 25px;
  padding: 10px 15px;
  @media (max-width: 900px) {
    width: 70%;
  }
`;
const SearchInput = styled.input`
border:none;
width:300px;
background:tranparent;
outline:none;
&::placeholder{
font-size:1rem;
color:gray;
}
@media (max-width:900px){
width:80%
`;
const SearchImg = styled.img`
  width: 15px;
`;
const NavRight = styled.div`
  justify-content: space-between;
  gap: 0.5rem;
`;
const RightImg = styled.img`
  width: 25px;

  @media (max-width: 900px) {
    display: none;
  }
`;
const RightProfileImg = styled.img`
  border-radius: 50%;
  width: 35px;
`;

function Navbar({ setSidebar, setSearchQuery  }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <FlexDiv className="flex-div">
      <NavLeft className="flex-div">
        <MenuImg
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={Menu}
        />
        <HomeLink to={`/`}>
          <LogoImg src={Icon} />
        </HomeLink>
      </NavLeft>
      <NavMiddle className="flex-div">
        <SearchBox className="flex-div">
          <SearchInput type="text" placeholder="Search..." onChange={handleSearch} />
          <SearchImg src={Search_icon} />
        </SearchBox>
      </NavMiddle>
      <NavRight className="flex-div">
        <RightImg src={Upload_icon} />
        <RightImg src={more_icon} />
        <RightImg src={notification_icon} />
        <RightProfileImg className="user-icon" src={profile_icon} />
      </NavRight>
    </FlexDiv>
  );
}
Navbar.propTypes = {
  setSidebar: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};
export default Navbar;
