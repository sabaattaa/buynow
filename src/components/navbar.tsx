import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const tabs = [
    { titale: "Profile", link: "" },
    { titale: "Setings", link: "" },
    { titale: "Dashboard", link: "/dashboard" },
    { titale: "Home", link: "/" },
    { titale: "Logout", link: "/login" },
  ];
  const [allStates, setAllStates] = useState({
    open: false,
  });
  return (
    <div className="navbar-main">
      <img
        className="logo-img"
        src="data:image/png;base64,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"
      />
      <input className="search-text" placeholder="Search here ..." />
      <div
        onClick={() => {
          setAllStates({ ...allStates, open: !allStates.open });
        }}
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "end",
          }}
        >
          User Name 
        </p>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADwQAAICAQIDBAcFBAsAAAAAAAABAgMRBBIFITETQVFxBiIjUmGBoTJCkbHhJDNi0RQVNENyc5KisvDx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr1Fqoona1nas48QPUpRhHdOSjHxbwRZcT0kf73PlFlHqL7NRZvtk2+5dyNXfkC//rbSe9P/AEmVxTSP78l5xZz4A6ijU0357KxSx1Xf+BtOTi3FpxbTXNYZd8N4h2+Kb3i3ufvfqBYgAAAAAAAAAAAAAAAFBxbUTs1Uq8+pDljxZflBdSreNdjjlO1J+T6gZ0nB9bq6VbXWowf2XOWMnt8B4jF4VMZfFTR2KWFhLCXReAA5GHo9xCXWNcfOZsfo3rUs9pR5bn/I6oAcRrOG6rRLdfX6mcb4vKIkJyhOM4PEovKfxO718Yz0OojJJp1S6+RwXPAHV02K6mFi5bopnsj8OX7DT/gTJAAAAAAAAAAAAAAAK/RU9p6SZxygt/8At5fVlge9HpZ08VstlhqyhYa8/wDwCzAAAAAa9RHfp7Ydd0GvofP+aR9E6HKcV4V2fFKqtMpSjqPWx7vPn8gLHTx2UVw92CX0Nht1FPY7VnOTUAAAAAAAAAAAAAACypxKqEu/BWk/STTpjFPmu4DeAAAAAGHCLkp7VvSwm/AyebJxhHMngCFrJ7rdq+7yNBmT3Scn3vJgAAAAAAAAAAAAAAHumWy2Mu5PmeABbA1aa1WV8/tLkzaAAAArLpb7ZPLfPl5EzU37IuMOcmvwIGGsKS5gAAAAAAAAAAAAAAAAAABsobVnq8uRNjc11X1IVfqzq/il9P8ArJu0DPbLui8nic5yWFyXwPW0NAR1XlmjiV0dP2Vk09kpbHL3fDJO5Lr0OU43xF6y7ZU/YVvl/E/EC7BW8J1qtgqbX7SK9V+8v5lkAAAAAAAAAAAADosvoQdTxOinKg+1n4R6L5gTiFfxCuM400e1tk9qx0WeXNlRqtdfqW1KW2Hux6fqb+BQi9erJfZqg58l39F+YHS2w2zqXXGFkmd5D09ruSdsVCWcryN1t2zO1ZA2t4R4Zor1Km9sltl3fEjcY4gtDRiD9vNYivD4sCF6QcR250dEub/eyX/E58y25Nyk8tvLfiYAym08xbTXRon6bit1eI3LtI+P3ivAHT6bU1amOapZx1i+qNxykZShJShJxkujRZaXjEklHUx3L34rn+AFyDXRfVqIbqZqS8+hsAAAAQuKayWlqiq8b5vk33ImnP8AGLu11jiula2/PvAj3ai+/wDe2yl8G+RqAAFz6OV73fJ9PVX5lM+h0Po0v2S197sx9EBbRjgy1kyAIurddNM7bX6sVlnK6i+zU3SstbbfJfBeBY8e1vbXf0et+zrfrNd8v0KkAAAAAAAADMJShLdCTjJdGi00HFLHZCrU4km8b+jXmVQ+eAOt+WAadHb2+lrs73Hn5gDbJ4i34I5Ryc25SeW3lmAAAAA6P0b/ALDZ/mv8kABamjiFsqNFdbXhTjBtMwAOO6vL5syAAAAAAAAAAAAF5wNuWllF9FY8fgjIAH//2Q=="
          className="navbar-img"
        />
        <RiArrowDropDownLine style={{ fontSize: "30px", color: "gray" }} />
      </div>

      <div className={` ${allStates.open ? "nav-tabs" : "nav-tabs2"}  `}>
        {tabs.map((item, index) => (
          <div
            className="profile-container"
            key={index}
            onClick={() => {
              navigate(item.link);
            }}
          >
            {item.titale}
            
          </div>
        ))}
      </div>
    </div>
  );
};
