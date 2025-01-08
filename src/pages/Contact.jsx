import React, { useContext,useMemo } from 'react'
import './Contact.css'
import { settingsContext } from '../contexts/settingsContext'

function Contact() {
    const {settings} = useContext(settingsContext)
     const mysettings = useMemo(() => {
            if (settings.theme === "white") {
                return {
                    color: "black",
                    backgroundColor: "rgb(231, 231, 231)"
                }
            } else {
                return {
                    color: "white",
                    backgroundColor: "rgb(21, 21, 21)"
                }
            }
        }, [settings])
    return (
        <div style={{ overflow: "hidden",position:"relative",...mysettings}}>
            <div className='reveal contact-main-container'>
                <div style={{fontSize:"2em"}}>
                    <h1 style={{textAlign:"center"}}>Contact Details</h1>
                </div>
                <div>
                   +91 8830484937 
                </div>
                <div className='item' onClick={e=>{
                    window.location.href = "mailto:dalviishwar1817@gmail.com?subject=Subject&body=message%20goes%20here";
                }}>
                    dalviishwar1817@gmail.com
                </div>

                <div className='item' onClick={e=>{
                    window.open("https://www.linkedin.com/in/ishwar-dalvi-22992930a")
                }}>
                    linked In
                </div>

                <div className='item' onClick={e=>{
                    window.open("https://github.com/Ishwar-Dalvi-18")
                }}>
                    Github
                </div>

                <div style={{backgroundColor:mysettings.color,color:mysettings.backgroundColor,position:"absolute",bottom:'0',left:"0",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",padding:"3em 0em"}}>
                    <h4>Copyright &copy; 2025. All Right Reserved Ishwar Dalvi</h4>
                </div>
            </div>
        </div>
    )
}

export default Contact