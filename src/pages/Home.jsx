import React, { useMemo, useContext, useState, useEffect, useRef } from 'react'
import './Home.css'
import { settingsContext } from '../contexts/settingsContext';
import human_img from '../assets/rb_17049.png'
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Fotter from '../components/Fotter';


function Home({nav_ref,setNavigation}) {
    const { settings, setSettings } = useContext(settingsContext);
    const [firstLoad, setFirstLoad] = useState(true)
    useEffect(()=>{
        if(settings.theme === "white"){
            document.body.style.backgroundColor = "white"
        }else{
            document.body.style.backgroundColor = "black"
        }
        if(firstLoad){
            window.addEventListener("scroll",()=>{
               const reveals = document.querySelectorAll(".reveal");
               for(let i=0;i<reveals.length;i++){
                const windowheight = window.innerHeight;
                const revealtop = reveals[i].getBoundingClientRect().top;
                const revealpoint = 150;

                if(revealtop<windowheight-revealpoint){
                    reveals[i].classList.add("active")
                    nav_ref.current.style.position="sticky"
                    if(i===0){
                        setNavigation(prev=>{
                            return{
                                current:"skills"
                            }
                        })
                    }
                    if(i===1){
                        setNavigation(prev=>{
                            return{
                                current:"projects"
                            }
                        })
                    }
                    if(i===2){
                        setNavigation(prev=>{
                            return{
                                current:"contact"
                            }
                        })
                    }
                }else{
                    reveals[i].classList.remove("active")
                    nav_ref.current.style.position="sticky"
                }
               }
               const actives = document.querySelectorAll(".active");
               console.log(actives.length)
               if(actives.length===0){
                setNavigation(prev=>{
                    return{
                         current:"home"
                    }
                   
                })
               }
            })
            setFirstLoad(false);
        }
    },[settings])
    const home_settings = useMemo(() => {

        if (settings.theme === "white") {
            return {
                color: 'black',
                backgroundColor: "white"
            }
        } else {
            return {
                color: 'white',
                backgroundColor: "black"
            }
        }
    }, [settings])
    return (
        <div style={{display:"flex" , flexDirection:"column", overflow:"auto" }}>
            <div style={home_settings} className='home-main-container'>
                <div style={{ overflow: "hidden" }} >
                    <img className='human-img' src={human_img} alt="img" />
                </div>
                <div className='content'>
                    <h1 style={{ fontSize: "4em" }}>Hello.</h1>
                    <h1 style={{ fontSize: "4em", textAlign: "center" }}>I'm <span className='name'>Ishwar S. Dalvi</span></h1>
                    <h1 style={{ fontSize: "2em", textAlign: "center" }}>Full Stack Web Developer</h1>
                </div>
            </div>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Home