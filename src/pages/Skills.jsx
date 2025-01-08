import React, { useContext, useMemo, useRef } from 'react'
import './Skills.css'
import SettingsContext, { settingsContext } from '../contexts/settingsContext'
import human_img from '../assets/rb_17049.png'
import react_icon from '../assets/icons8-react-40.png'
import express_icon from '../assets/express_icon.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import node from '../assets/node.png'
import api from '../assets/api.png'
import graphql from '../assets/data-analytics.png'
import cpp from '../assets/c-.png'
import git from '../assets/social.png'
import github from '../assets/github.png'
import sql from '../assets/database.png'

function Skills() {
    const { settings } = useContext(settingsContext)
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
        <div style={{ overflow: "hidden", ...mysettings, position: "relative" }} >
            <div className='reveal skills-main-container'>
                <div>
                    <h1 style={{ fontSize: "4em", textAlign: "center" }} className='technical-skill'>Technical Skills</h1>
                </div>


                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5em",flexWrap:"wrap"}}>
                    <img style={{height:"2em"}} src={react_icon} alt="" />
                    <img style={{height:"2em"}} src={express_icon} alt="" />
                    <img style={{height:"2em"}} src={java} alt="" />
                    <img style={{height:"2em"}} src={python} alt="" />
                    <img style={{height:"2em"}} src={node} alt="" />
                    <img style={{height:"2em"}} src={api} alt="" />
                    <img style={{height:"2em"}} src={graphql} alt="" />
                    <img style={{height:"2em"}} src={cpp} alt="" />
                    <img style={{height:"2em"}} src={git} alt="" />
                    <img style={{height:"2em"}} src={sql} alt="" />
                    <img style={{height:"2em"}} src={github} alt="" />
                </div>


                <div style={{ alignSelf: "center", display: "grid", gridTemplateColumns: "repeat(1,1fr)" }}>
                    <div style={{ display: 'flex', flexDirection: "column", marginTop: "2em", gridColumn: 1, gridRow: 1 }}>
                        <div className='skill'>
                            <div style={{ gridColumn: 1, gridRow: 1, }}>
                                <h1 style={{ color: "#48f100" }} >Databases</h1>
                            </div>
                            <div style={{ gridColumn: 2, gridRow: 1 }}>
                                <div style={{ alignItems: "center", display: "flex", height: "100%" }}>
                                    <h3 style={{ fontWeight: "400" }}><p>MongoDB , MySql , SQL.</p></h3>
                                </div>
                            </div>

                            <div style={{ gridColumn: 1, gridRow: 2, }}>
                                <h1 style={{ color: "#00c5f1" }} >Express</h1>
                            </div>
                            <div style={{ gridColumn: 2, gridRow: 2 }}>
                            <div style={{ alignItems: "center", display: "flex", height: "100%" }}>
                                    <h3 style={{ fontWeight: "400" }}><p>Authentication , Middlewares , API’s , Error handling , Sessions , Cookies , Templeting , CORS , Validations , Websockets , Scalability , Mongoose.</p></h3>
                                </div>
                            </div>

                            <div style={{ gridColumn: 1, gridRow: 3, }}>
                                <h1 style={{ color: "#f66900" }} >Java</h1>
                            </div>
                            <div style={{ gridColumn: 2, gridRow: 3 }}>
                            <div style={{ alignItems: "center", display: "flex", height: "100%" }}>
                                    <h3 style={{ fontWeight: "400" }}><p>OOP’s , Collection’s Framework , Concurrency , Threads , Stream API , JSP , Servlets , Exceptions</p></h3>
                                </div>
                            </div>

                            <div style={{ gridColumn: 1, gridRow: 4 }}>
                                <h1 style={{ color: "#00b99a" }} >Python</h1>
                            </div>
                            <div style={{ gridColumn: 2, gridRow: 4 }}>
                            <div style={{ alignItems: "center", display: "flex", height: "100%" }}>
                                    <h3 style={{ fontWeight: "400" }}><p>Strong hold on core and OOP's concept of python and can use various libraries in it.</p></h3>
                                </div>
                            </div>

                            <div style={{ gridColumn: 1, gridRow: 5 }}>
                                <h1 style={{ color: "#6300b9" }} >GraphQl , Typescript</h1>
                            </div>
                            <div style={{ gridColumn: 2, gridRow: 5 }}>
                            <div style={{ alignItems: "center", display: "flex", height: "100%" }}>
                                    <h3 style={{ fontWeight: "400" }}><p>Used graphql and knows where to use it real work projects to reduce the request response latency. Familiar with concepts of Typescript.</p></h3>
                                </div>
                            </div>

                            <div style={{ gridColumn: 1, gridRow: 6 }}>
                                <h1 style={{ color: "#456ef4" }} >C , C++</h1>
                            </div>
                            <div style={{ gridColumn: 2, gridRow: 6 }}>
                            <div style={{ alignItems: "center", display: "flex", height: "100%" }}>
                                    <h3 style={{ fontWeight: "400" }}><p>Core knowledge in both C and C++.</p></h3>
                                </div>
                            </div>

                            <div style={{ gridColumn: 1, gridRow: 5 }}>
                                <h1 style={{ color: "#6300b9" }} >GraphQl , Typescript</h1>
                            </div>
                            <div style={{ gridColumn: 2, gridRow: 5 }}>
                            <div style={{ alignItems: "center", display: "flex", height: "100%" }}>
                                    <h3 style={{ fontWeight: "400" }}><p>Used graphql and knows where to use it real work projects to reduce the request response latency. Familiar with concepts of Typescript.</p></h3>
                                </div>
                            </div>

                            <div style={{ gridColumn: 1, gridRow: 7 }}>
                                <h1 style={{ color: "#009324" }} >Git , Github</h1>
                            </div>
                            <div style={{ gridColumn: 2, gridRow: 7 }}>
                            <div style={{ alignItems: "center", display: "flex", height: "100%" }}>
                                    <h3 style={{ fontWeight: "400" }}><p>Used for management and collaboration of many projects.</p></h3>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills