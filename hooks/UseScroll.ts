
// import { useDispatch } from "react-redux";
// import { setActive } from "./scrollSlice";

import { setActive } from "@/store/ScrollSlice";
import { useDispatch } from "react-redux";

export const useScroll = () => {
  const dispatch = useDispatch();

  const handleScroll = (id: string) => {
    dispatch(setActive(id));

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { handleScroll };
};
