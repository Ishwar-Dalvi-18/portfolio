import React, { useContext, useMemo, useState } from 'react'
import './Projects.css'
import { settingsContext } from '../contexts/settingsContext'
import rice_img from '../assets/rice_mp.jpg'
import left_arrow from '../assets/left-arrow.png'
import right_arrow from '../assets/right-arrow-angle.png'
import img1 from '../assets/project1/Screenshot 2025-01-02 115230.png'
import img2 from '../assets/project1/Screenshot 2025-01-02 115321.png'
import img3 from '../assets/project1/Screenshot 2025-01-02 115434.png'
import img4 from '../assets/project1/Screenshot 2025-01-02 115457.png'
import img5 from '../assets/project1/Screenshot 2025-01-02 115547.png'
import img6 from '../assets/project1/Screenshot 2025-01-02 120711.png'
import img7 from '../assets/project1/Screenshot 2025-01-02 120723.png'
import img8 from '../assets/project1/Screenshot 2025-01-02 121408.png'
import img9 from '../assets/project1/Screenshot 2025-01-02 121510.png'
import img10 from '../assets/project1/Screenshot 2025-01-02 130811.png'
import img11 from '../assets/project1/Screenshot 2025-01-02 130825.png'
import img12 from '../assets/project1/Screenshot 2025-01-02 130906.png'

import i1 from '../assets/project2/Screenshot 2025-01-08 203813.png'
import i2 from '../assets/project2/Screenshot 2025-01-08 203850.png'
import i3 from '../assets/project2/Screenshot 2025-01-08 203929.png'
import i4 from '../assets/project2/Screenshot 2025-01-08 203952.png'
import i5 from '../assets/project2/Screenshot 2025-01-08 204022.png'
import i6 from '../assets/project2/Screenshot 2025-01-08 204038.png'
import i7 from '../assets/project2/Screenshot 2025-01-08 204056.png'
import i8 from '../assets/project2/Screenshot 2025-01-08 204116.png'
import i9 from '../assets/project2/Screenshot 2025-01-08 204143.png'
import i10 from '../assets/project2/Screenshot 2025-01-08 204159.png'
import i11 from '../assets/project2/Screenshot 2025-01-08 204224.png'
import i12 from '../assets/project2/Screenshot 2025-01-08 204245.png'




function Projects() {
  const { settings } = useContext(settingsContext)
  const [projectOneSettings, setProjectOneSettings] = useState({
    totalImages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    currentImage: 1
  })
  const [projectTwoSettings, setProjectTwoSettings] = useState({
    totalImages:[1,2,3,4,5,6,7,8,9,10,11,12],
    currentImage:1
  })
  const mysettings = useMemo(() => {
    if (settings.theme === 'white') {
      return {
        color: "black",
        backgroundColor: "white"
      }
    } else {
      return {
        color: "white",
        backgroundColor: "black"
      }
    }
  }, [settings])
  function previousClickHandler(classSelector,settings,setSettings) {
    const images = document.querySelectorAll(classSelector);
    images[settings.currentImage - 1].style.width = "0"
    images[settings.currentImage - 2].style.width = "100%"
    setSettings(prev => {
      return {
        ...prev,
        currentImage: prev.currentImage - 1
      }
    })
  }
  function nextClickHandler(classSelector,settings,setSettings) {
    const images = document.querySelectorAll(classSelector);
    images[settings.currentImage - 1].style.width = "0"
    images[settings.currentImage].style.width = "100%"
    setSettings(prev => {
      return {
        ...prev,
        currentImage: prev.currentImage + 1
      }
    })
  }
  return (
    <div style={{ overflow: "hidden", ...mysettings }} >
      <div className='reveal projects-main-container'>
        <div>
          <h1 className='technical-skill' style={{ fontSize: "4em" }}>
            Projects
          </h1>
        </div>

        <div className='project'>
          <div className='project-title'>
            <h1 style={{ fontSize: "2em" }}><span style={{ color: "blueviolet" }}>1. </span>Crop Vision</h1>
          </div>
          <div className='image-holder'>
            <img className='image' style={{ width: "100%", height: "100%", objectFit: "contain" }} src={img1} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img2} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img3} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img4} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img5} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img6} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img7} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img8} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img9} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img10} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img11} alt="" />
            <img className='image' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={img12} alt="" />
            {projectOneSettings.currentImage !== 1 &&
              <div onClick={e=>previousClickHandler(".image",projectOneSettings,setProjectOneSettings)} className='arrow left' style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", left: "0em", top: "50%", transform: "translateY(-50%)" }}>
                <img style={{ height: "2em", filter: "invert(0%)" }} src={left_arrow} alt="" />
              </div>
            }
            {projectOneSettings.totalImages.length !== projectOneSettings.currentImage &&
              <div onClick={e=>nextClickHandler(".image",projectOneSettings,setProjectOneSettings)} className='arrow right' style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", right: "0em", top: "50%", transform: "translateY(-50%)" }}>
                <img style={{ height: "2em", filter: "invert(0%)" }} src={right_arrow} alt="" />
              </div>
            }


            <div className='indicators'>
              {
                projectOneSettings.totalImages.map((value) => {
                  return (
                    <div style={{ backgroundColor: `${mysettings.backgroundColor === "white" ? "black" : "white"}` }} className={`${value === projectOneSettings.currentImage ? 'activate' : ''} indicator`}>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='description' style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1em" }}>
            <div><p>
              <span style={{ fontWeight: "700" }}>Description: </span>
              I have developed a comprehensive website that connects farmers and customers directly, enabling farmers to sell crops and other agricultural products without intermediaries, and customers to purchase them conveniently.
            </p></div>
          </div>

          <div style={{ width: "100%", marginTop: "2em", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div><h3>Technologies used</h3></div>
            <div>1. Node and Express.js</div>
            <div>2. MongoDB and Mongoose ODM</div>
            <div>3. Websockets</div>
            <div>4. React</div>
            <div>5. Tailwind</div>
          </div>
        </div>

        <div style={{width:"100%",backgroundColor:"rgb(0, 102, 192)" , height:"0.1em",marginTop:"2em"}}></div>

        <div className='project'>
          <div className='project-title' style={{ marginTop: "2em" }}>
            <h1 style={{ fontSize: "2em" }}><span style={{ color: "blueviolet" }}>2. </span>Inventory Management</h1>
          </div>
          <div className='image-holder'>
            <div className='image-holder'>
              <img className='image2' style={{ width: "100%", height: "100%", objectFit: "contain" }} src={i1} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i2} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i3} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i4} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i5} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i6} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i7} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i8} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i9} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i10} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i11} alt="" />
              <img className='image2' style={{ width: "0%", height: "100%", objectFit: "contain" }} src={i12} alt="" />
              {projectTwoSettings.currentImage !== 1 &&
                <div onClick={e=>{
                  previousClickHandler(".image2",projectTwoSettings,setProjectTwoSettings)
                }} className='arrow left' style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", left: "0em", top: "50%", transform: "translateY(-50%)" }}>
                  <img style={{ height: "2em", filter: "invert(0%)" }} src={left_arrow} alt="" />
                </div>
              }
              {projectTwoSettings.totalImages.length !== projectTwoSettings.currentImage &&
                <div onClick={e=>nextClickHandler(".image2",projectTwoSettings,setProjectTwoSettings)} className='arrow right' style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", right: "0em", top: "50%", transform: "translateY(-50%)" }}>
                  <img style={{ height: "2em", filter: "invert(0%)" }} src={right_arrow} alt="" />
                </div>
              }


              <div className='indicators'>
                {
                  projectTwoSettings.totalImages.map((value) => {
                    return (
                      <div style={{ backgroundColor: `${mysettings.backgroundColor === "white" ? "black" : "white"}` }} className={`${value === projectOneSettings.currentImage ? 'activate' : ''} indicator`}>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='description' style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2em" }}>
            <div><p>
              <span style={{ fontWeight: "700" }}>Description: </span>
              I delivered this application in the form of Desktop Application. This helps to manage inventories digitally and helps to keep track of sells ans products.This also provides a billing system for Seller.
            </p></div>
          </div>

          <div style={{ width: "100%", marginTop: "2em", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div><h3>Technologies used</h3></div>
            <div>1. C#</div>
            <div>2. Sql Server</div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Projects