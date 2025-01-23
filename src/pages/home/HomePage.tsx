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
            <div
                style={{
                    width: 1536,
                    height: 864,
                    position: "relative",
                    backgroundColor: "black",
                    margin: "20px auto",
                    overflow: "hidden"
                }}
            >
                <div>
                    <img
                        src={logo}
                        style={{ width: 950, paddingLeft: 272, transform: "skew(-19.5deg)" }}
                    />
                </div>
                <div className="fancy-div">
                    <img
                        src={aboutImage}
                        style={{ width: "auto", height: 864, position: "absolute", left: 548 }}
                    />
                    <a href="wip.html">
                        <img
                            className="fancy-img"
                            src={aboutImageHov}
                            style={{ width: "auto", height: 864, position: "absolute", left: 548 }}
                            onMouseOver={handleMouseOverAbout}
                            onMouseOut={handleMouseOut}
                        />
                    </a>
                </div>
                <div className="fancy-div">
                    <img
                        src={artImage}
                        style={{ width: "auto", height: 864, position: "absolute", left: 790 }}
                    />
                    <a href="../artwork/index.html">
                        <img
                            className="fancy-img"
                            src={artImageHov}
                            style={{ width: "auto", height: 864, position: "absolute", left: 790 }}
                            onMouseOver={handleMouseOverArt}
                            onMouseOut={handleMouseOut}
                        />
                    </a>
                </div>
                <div className="fancy-div">
                    <img
                        src={projectImage}
                        style={{ width: "auto", height: 864, position: "absolute", left: 1032 }}
                    />
                    <a href="wip.html">
                        <img
                            className="fancy-img"
                            src={projectImageHov}
                            style={{ width: "auto", height: 864, position: "absolute", left: 1032 }}
                            onMouseOver={handleMouseOverProjects}
                            onMouseOut={handleMouseOut}
                        />
                    </a>
                </div>
                <div className="fancy-div">
                    <img
                        src={otherImage}
                        style={{ width: "auto", height: 864, position: "absolute", left: 1274 }}
                    />
                    <a href="wip.html">
                        <img
                            className="fancy-img"
                            src={otherImageHov}
                            style={{ width: "auto", height: 864, position: "absolute", left: 1274 }}
                            onMouseOver={handleMouseOverOther}
                            onMouseOut={handleMouseOut}
                        />
                    </a>
                </div>
                <div
                    className="sliding-container"
                    style={{
                        position: "absolute",
                        left: 190,
                        paddingLeft: 5,
                        borderLeft: "solid aqua 3px"
                    }}
                >
                    <div className="sliding-background-rev" />
                </div>
                <div
                    className="sliding-container"
                    style={{
                        position: "absolute",
                        left: 1225,
                        paddingRight: 5,
                        borderRight: "solid aqua 3px"
                    }}
                >
                    <div className="sliding-background" />
                </div>
                <h1
                    style={{
                        color: "rgb(0, 140, 170)",
                        position: "absolute",
                        top: 85,
                        fontSize: 27,
                        transform: "skew(-19.5deg)",
                        textAlign: "left",
                        width: 559,
                        margin: 0,
                        padding: 0
                    }}
                >
                    SELECT A CHARACTER TO GO TO A PAGE
                </h1>
                <h1
                    id="page_title"
                    style={{
                        color: "rgb(255, 255, 255)",
                        position: "absolute",
                        top: 112,
                        left: 0,
                        fontSize: 76,
                        transform: "skew(-19.5deg)",
                        textAlign: "right",
                        width: 470,
                        height: 85,
                        margin: 0,
                        padding: 0,
                        borderBottom: "solid aqua 3px",
                        lineHeight: 1.22,
                    }}
                >
                    {text}
                </h1>
                <p
                    id="page_desc"
                    style={{
                        color: "rgb(0, 225, 255)",
                        position: "absolute",
                        top: 188,
                        left: 20,
                        fontSize: 20,
                        whiteSpace: "pre-line"
                    }}
                >
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