"use strict";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

 gsap.registerPlugin(ScrollTrigger);

export function gsapAnimations() {
    console.log("gsap animations!");
    
    
    // splash out
    gsap.to("#splash img", {opacity: 0, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 50%",end: "top 35%", trigger: "#about", scrub:true,
    }});

    // about fadein
    gsap.from("#about", {opacity: 0, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 75%",end: "top 25%", trigger: "#about", scrub:true,
    }});

    // // about fadeout
    // gsap.to("#about", {opacity: 0, scrollTrigger: {
    //     toggleActions: "play pause resume reset", scroller: "main", start: "top 45%",end: "top 35%", trigger: "#skills", scrub:true,
    // }});

    // skills fadein
    gsap.from("#skills", {opacity: 0, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 45%",end: "top 25%", trigger: "#skills", scrub:true,
    }});

    // // skills fadeout
    // gsap.to("#skills", {opacity: 0, scrollTrigger: {
    //     toggleActions: "play pause resume reset", scroller: "main", start: "top 45%",end: "top 35%", trigger: "#contact", scrub:true,
    // }});

    // contact fadein
    gsap.from("#contact", {opacity: 0, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 75%",end: "top 25%", trigger: "#contact", scrub:true,
    }});

}