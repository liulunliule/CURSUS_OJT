// globalStyles.js

import { theme } from "antd";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
  
  .header {
    background: ${({ theme }) => theme.headerBackground};
    color: ${({ theme }) => theme.headerText};
  }
  .search-input{
  background: ${({ theme }) => theme.searchInputBackground};
  }

  .dropdown {
    background: ${({ theme }) => theme.dropdownBackground};

    .dropItemText{
    color: ${({ theme }) => theme.dropdownText};
}


    ul{
      li:hover{
    background: ${({ theme }) => theme.dropdownHoverBackground};
    
  }}
  .profile-instructor-link{
      color: ${({ theme }) => theme.dropText};
    }
    .profile-instructor-link:hover{
      color: ${({ theme }) => theme.profileLinkBackground};
    }
  }
  .cart {
    filter: ${({ theme }) => theme.cartfilter};
  }
  .letter{
    filter: ${({ theme }) => theme.letterfilter};
  }
  .bell{
    filter: ${({ theme }) => theme.bellfilter};
  }
  .item-view{
    background: ${({ theme }) => theme.itemViewBackground};
    color: ${({ theme }) => theme.itemViewText};
  }
  .nightmode{
    color: ${({ theme }) => theme.nightModetext};
  }
.nightmode:hover{
  color: ${({ theme }) => theme.nightModeHovertext};
}
.item-dask .fa-moon-container{
  background: ${({ theme }) => theme.faMoonBackground};
}
.profile-name{
  color:  ${({ theme }) => theme.profileNameColor};
}

`;

export const lightTheme = {
  body: "#fff",
  text: "#000",
  headerBackground: "#ffffff",
  headerText: "#000",
  searchInputBackground: "#f7f7f7",
  dropdownBackground: "#fff",
  dropdownHoverBackground: "#ffecec",
  dropdownText: "#686f7a",
  itemViewBackground: "#ffecec",
  itemViewText: "#000",
  profileLinkBackground: "#ed2a26",
  itemBackground: "none",
  dropText: "#000",
  nightModetext: "#333",
  nightModeHovertext: "none",
  faMoonBackground: "#ffecec",
  profileNameColor: "#333",
};

export const darkTheme = {
  body: "#000",
  text: "#FFF",
  headerBackground: "#343a40",
  headerText: "#FFF",
  searchInputBackground: "#787878",
  dropdownBackground: "#171717",
  dropdownHoverBackground: "#4a4a4a",
  letterfilter: "brightness(2)",
  cartfilter: "brightness(2)",
  bellfilter: "brightness(2)",
  itemViewBackground: "#ed2a26",
  itemViewText: "#fff",
  dropdownText: "#fff",
  profileLinkBackground: "#fff",
  dropText: "#ccc",
  nightModetext: "#ddd",
  nightModeHovertext: "#fff",
  faMoonBackground: "#4a4a4a",
  profileNameColor: "#fff",
};
