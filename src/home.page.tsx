import HeaderComponent from "./components/header-component";
import ChatComponent from "./components/Chat/chat-component";
import HeroComponent from "./components/hero-component";
import CategoriesComponent from "./components/Categories/categories-component";
import TravelAgenciesComponent from "./components/TravelAgencies/travel-agencies-component";
import FooterComponent from "./components/footer-component";
import { useState } from "react";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const isAuthenticated = localStorage.getItem("accessToken");

  return (
    <>
      <HeaderComponent onSearch={setSearchQuery} />
      {isAuthenticated && <ChatComponent />}
      <HeroComponent />
      <CategoriesComponent searchQuery={searchQuery} />
      <TravelAgenciesComponent searchQuery={searchQuery} />
      <FooterComponent />
    </>
  );
};

export default HomePage;
