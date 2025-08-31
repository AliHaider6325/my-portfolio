import React, { useRef } from "react";

export const useScrollRefs=()=>{
    const homeRef = useRef<HTMLElement>(null!);
    const projectsRef = useRef<HTMLElement>(null!);
    const skillsRef = useRef<HTMLElement >(null!);
    const experienceRef = useRef<HTMLElement >(null!);
    const contactRef = useRef<HTMLElement >(null!);

    const scrollToSection=<T extends Element>(ref:React.RefObject<HTMLElement>)=>{
        ref.current?.scrollIntoView({ behavior : "smooth",block:"start"});
    }

    return{
        homeRef,projectsRef,skillsRef,experienceRef,contactRef,scrollToSection
    }
}