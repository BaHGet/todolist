import { useEffect } from "react";

export const useWindowResize = ({width, setWidth}) => {
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [width]);
    return width;
}