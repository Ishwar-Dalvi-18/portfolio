import React, { useCallback, useContext, useMemo, useState } from 'react'
import './Navbar.css'
import sun from '../assets/sun.png'
import moon from '../assets/night-mode.png'
import { settingsContext } from '../contexts/settingsContext'

function Navbar({ theme, nav_ref, navigation, setNavigation }) {
    const { setSettings } = useContext(settingsContext)
    const settings = useMemo(() => {
        if (theme === "white") {
            return {
                color: "black",
                backgroundColor: "white",
                boxShadow: "0px 10px 3px rgb(52, 52, 52)"
            }
        } else {
            return {
                color: "white",
                backgroundColor: "black",
                boxShadow: "0px 10px 5px rgb(209, 205, 205)"
            }
        }
    }, [theme])

    return (
        <div ref={nav_ref} style={{ backgroundColor: "transparent" }} className='navbar-main-container'>
            <div style={settings} className='sub-container'>
                <div style={{ position: "fixed", bottom: "1em", right: "1em" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "4em", width: "4em", borderRadius: "50%", backgroundColor: "blueviolet" }}>
                        <img onClick={e => {
                            setSettings(prev => {
                                if (prev.theme === "white") {
                                    return {
                                        theme: "black"
                                    }
                                } else {
                                    return {
                                        theme: "white"
                                    }
                                }
                            })
                        }} style={{ height: "2em", filter: `${theme === "white" ? "invert(100%)" : "invert(0%)"}` }} src={theme === "white" ? sun : moon} alt="theme" />
                    </div>
                </div>
                <div onClick={e => {
                    setNavigation(prev => {
                        return {
                            current: "home"
                        }
                    })
                    window.scrollTo({
                        top: true,
                        behavior: "smooth"
                    })
                }} className={`${navigation.current === "home" ? 'current' : ''} nav-element`}>
                    Intro
                </div>
                <div onClick={e => {
                    setNavigation(prev => {
                        return {
                            current: "skills"
                        }
                    })
                    window.scrollTo(0, window.innerHeight)
                }} className={`${navigation.current === "skills" ? 'current' : ''} nav-element`}>
                    Skills
                </div>
                <div onClick={e => {
                    setNavigation(prev => {
                        return {
                            current: "projects"
                        }
                    })
                    const elem = document.getElementsByClassName("reveal")[0]
                    window.scrollTo(0, window.innerHeight + elem.clientHeight)
                }} className={`${navigation.current === "projects" ? 'current' : ''} nav-element`}>
                    Projects
                </div>

                <div onClick={e => {
                    setNavigation(prev => {
                        return {
                            current: "contact"
                        }
                    })
                    const h1 = document.getElementsByClassName("reveal")[0]
                    const elem = document.getElementsByClassName("reveal")[1]
                    window.scrollTo(0,window.innerHeight+h1.clientHeight+elem.clientHeight)
                }} className={`${navigation.current === "contact" ? 'current' : ''} nav-element`}>
                    Contact
                </div>
            </div>
        </div>
    )
}

export default Navbar