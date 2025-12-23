"use client";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setActive } from "@/store/ScrollSlice";

type Link = { href: string };

export const useScrollSpy = (navLinks: Link[], enabled: boolean) => {
  const dispatch = useDispatch();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastActiveRef = useRef<string | null>(null);

  useEffect(() => {
    if(!enabled) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const topEntry = entries.find(e => e.target.id === 'top-sentinel')
        if(topEntry?.isIntersecting){
          dispatch(setActive(navLinks[0].href));
          return;
        } 
        // const visible = entries
        //   .filter((e) => e.isIntersecting)
        //   .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        //   if(!visible) return
        //   const id = visible.target.id;
        //   if(lastActiveRef.current === id ) return;
        //   lastActiveRef.current = id;
        //   dispatch(setActive(id));

        // entries.forEach((entry) => {
        //   if (entry.isIntersecting) {
        //     dispatch(setActive(entry.target.id));
        //   }
        // });
        const visible = entries
          .filter((e) => e.isIntersecting && e.target.id !== "top-sentinel")
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        dispatch(setActive(visible.target.id));
      },
      {
        root: null,
        rootMargin: "-56px 0px 0px 0px",
        threshold: 0,
      }
    );

    const sentinel = document.getElementById("top-sentinel");
    if(sentinel) observerRef.current.observe(sentinel)

    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [dispatch, navLinks, enabled]);
};
