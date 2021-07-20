"use strict";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function gsapAnimations() {
    console.log("gsap animations!");
    
    if (window.location.pathname == "/index.html") {
        //run frontpage gsap
        console.log("you're on the frontpage");
        frontpage_gsap();
    }
    
    else if (window.location.pathname == "/works.html") {
        console.log("you're on the portfolio page");
        works_gsap();
    }

    else if (window.location.pathname == "/contact.html") {
        console.log("you're on the contact page");
        contact_gsap();
    }

}

function frontpage_gsap() {
    //frontpage animations
    // splash out
    gsap.to("#splash img", {opacity: 0, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 50%",end: "top 35%", trigger: "#about", scrub:true,
    }});

    // about fadein
    gsap.from("#about", {opacity: 0, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 75%",end: "top 25%", trigger: "#about", scrub:true,
    }});

    // skills fadein
    gsap.from("#skills", {opacity: 0, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 45%",end: "top 25%", trigger: "#skills", scrub:true,
    }});

    // contact fadein
    gsap.from("#contact", {opacity: 0, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 75%",end: "top 25%", trigger: "#contact", scrub:true,
    }});

    gsap.to("#contact div", {opacity: 0.3, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 90%",end: "top 70%", trigger: "footer", scrub:true,
    }});

    gsap.to("#desktop_nav", {opacity: 0, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 90%",end: "top 70%", trigger: "footer", scrub:true,
    }});
}

function works_gsap() {
    //portfolio animations
    if (document.body.scrollWidth >= 1200) {
        gsap.to("#portfolio_grid", {opacity: 0.4, scrollTrigger: {
            toggleActions: "play pause resume reset", scroller: "main", start: "top 100%",end: "top 60%", trigger: "footer", scrub:true,
        }});
    }
    
    
}

function contact_gsap() {
    //contact animations
    gsap.to(".contact_html", {opacity: 0.4, scrollTrigger: {
        toggleActions: "play pause resume reset", scroller: "main", start: "top 80%",end: "top 65%", trigger: "footer", scrub:true,
    }});
}