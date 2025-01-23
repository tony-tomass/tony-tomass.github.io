import logo from './img/logo.png'

import aboutImage from './img/p3_0_inv_2.png'
import aboutImageHov from './img/p3_0_s.png'

import artImage from './img/p1_0_inv_2.png'
import artImageHov from './img/p1_0_s.png'

import projectImage from './img/p2_0_inv_2.png'
import projectImageHov from './img/p2_0_s.png'

import otherImage from './img/p4_0_inv_2.png'
import otherImageHov from './img/p4_0_s.png'

import './home_page.css'

import { useState } from 'react'

function HomePage() {
    const titleData = ["⮞HOME", "⮞ABOUT", "⮞ARTWORK", "⮞PROJECTS", "⮞OTHER"]

    const [text, setText] = useState(titleData[0])

    const handleMouseOverAbout = () => {
        setText(titleData[1])
    }
    const handleMouseOverArt = () => {
        setText(titleData[2])
    }
    const handleMouseOverProjects = () => {
        setText(titleData[3])
    }
    const handleMouseOverOther = () => {
        setText(titleData[4])
    }
    const handleMouseOut = () => {
        setText(titleData[0])
    }

    return (
        <>
            <div className="nav-container">

                <div>
                    <img src={logo} className="logo"/>
                </div>

                <div className="nav-div">
                    <img
                        src={aboutImage}
                        className="nav-img"
                        style={{ left: 548 }}
                    />
                    <a href="wip.html">
                        <img
                            src={aboutImageHov}
                            className="nav-img hovering"
                            style={{ left: 548 }}
                            onMouseOver={handleMouseOverAbout}
                            onMouseOut={handleMouseOut}
                        />
                    </a>
                </div>
                <div className="nav-div">
                    <img
                        src={artImage}
                        className="nav-img"
                        style={{ left: 790 }}
                    />
                    <a href="../artwork/index.html">
                        <img
                            src={artImageHov}
                            className="nav-img hovering"
                            style={{ left: 790 }}
                            onMouseOver={handleMouseOverArt}
                            onMouseOut={handleMouseOut}
                        />
                    </a>
                </div>
                <div className="nav-div">
                    <img
                        src={projectImage}
                        className="nav-img"
                        style={{ left: 1032 }}
                    />
                    <a href="wip.html">
                        <img
                            src={projectImageHov}
                            className="nav-img hovering"
                            style={{ left: 1032 }}
                            onMouseOver={handleMouseOverProjects}
                            onMouseOut={handleMouseOut}
                        />
                    </a>
                </div>
                <div className="nav-div">
                    <img
                        src={otherImage}
                        className="nav-img"
                        style={{ left: 1274 }}
                    />
                    <a href="wip.html">
                        <img
                            src={otherImageHov}
                            className="nav-img hovering"
                            style={{ left: 1274 }}
                            onMouseOver={handleMouseOverOther}
                            onMouseOut={handleMouseOut}
                        />
                    </a>
                </div>

                <div
                    className="sliding-container"
                    style={{
                        left: 190,
                        paddingLeft: 5,
                        borderLeft: "solid aqua 3px"
                    }}
                >
                    <div className="sliding-background slide-down" />
                </div>
                <div
                    className="sliding-container"
                    style={{
                        left: 1225,
                        paddingRight: 5,
                        borderRight: "solid aqua 3px"
                    }}
                >
                    <div className="sliding-background slide-up" />
                </div>

                <h1 className='title-subtext'>
                    SELECT A CHARACTER TO GO TO A PAGE
                </h1>
                <h1 id="page_title" className='title-text'>
                    {text}
                </h1>
                <p id="page_desc" className="flavor-text">
                    &#11166; Welcome to my portfolio website! This is the
                    {'\n'}main home page where you can navigate to
                    {'\n'}other parts of the website. Hover over a 
                    {'\n'}character to get more info on a page.
                </p>
            </div>
        </>
    )
}

export default HomePage