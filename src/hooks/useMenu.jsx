import { useState } from "react";

const useMenu = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  return {
    handleClick,
    isMobile,
  };
};

export default useMenu;
