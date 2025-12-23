
// import { useDispatch } from "react-redux";
// import { setActive } from "./scrollSlice";

import { setActive } from "@/store/ScrollSlice";
import { useDispatch } from "react-redux";

export const useScroll = () => {
  const dispatch = useDispatch();

  const handleScroll = (id: string) => {
    dispatch(setActive(id));

    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -56
    const y = el.getBoundingClientRect().top + document.documentElement.scrollTop + yOffset;
    document.documentElement.scrollTo({
      top: y,
      behavior: 'smooth',
    })

    // const el = document.getElementById(id);
    // if( !el) return;
    // el.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start"
    // })
  };

  return { handleScroll };
};
