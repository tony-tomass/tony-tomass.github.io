import logo from '../home/img/logo.png'
import './projects_page.css'

function ProjectsPage() {
    return (
        <>
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="../home/">
                        <img src={logo} className="logo" />
                    </a>
                </div>
                <div className='nav-button-container'>
                    <div className="nav-button">
                        <a href="../wip/">
                            <h2>ABOUT</h2>
                        </a>
                    </div>
                    <div className="nav-button">
                        <a href="../artwork/">
                            <h2>ARTWORK</h2>
                        </a>
                    </div>
                    <div className="nav-button">
                        <a href="./">
                            <h2 style={{ color: "white" }}>PROJECTS</h2>
                        </a>
                    </div>
                    <div className="nav-button">
                        <a href="../wip/">
                            <h2>OTHER</h2>
                        </a>
                    </div>
                </div>
            </div>
            <div className="site-border" style={{ top: 0, zIndex: 1 }}></div>

            <h1 className='title'>
                PROJECTS
            </h1>
            <h1 className='title-desc'>
                All source code, files, demos, etc. can be found on my GitHub page. Clicking on the names of each project below will redirect to you to their respective pages on GitHub.
            </h1>

            <div className="site-border" style={{ top: 0, zIndex: 1, borderBottom: "1px solid rgb(31, 161, 161)" }}></div>

            <div className='sub-title-container'>
                <a href='https://github.com/tony-tomass/CalendarCal'>
                    <h1 className='sub-title'>
                        CalendarCAL
                    </h1>
                </a>
                <p className='sub-title-desc'>
                    A basic Android calendar app made in collaboration for the final project assignment of my CSC2990 Mobile App Development class using primarily RecyclerViews, along with a Bottom Navigation bar that connects all the fragments together.</p>
                <img src="https://raw.githubusercontent.com/tony-tomass/CalendarCal/refs/heads/main/preview.png" loading='lazy' style={{ width: "98vw"}}></img>
            </div>

            <div className='sub-title-container'>
                <a href='https://github.com/tony-tomass/MM-Cut-Man-Stage'>
                    <h1 className='sub-title'>
                        Mega Man: Cut Man Stage
                    </h1>
                </a>
                <p className='sub-title-desc'>
                    This is a demo of a game made with Godot 4.3.1 with the intention of helping me learn and practice game development. The goal of this was to recreate the visual and gameplay aspects as close as possible to the first Mega Man game on the NES from 1987.
                </p>
            </div>

            <div className='sub-title-container'>
                <a href='https://github.com/jwc524/clippy'>
                    <h1 className='sub-title'>
                        Clippy: Smart PDF Reader
                    </h1>
                </a>
                <p className='sub-title-desc'>
                    Clippy is a PDF reader utilizing AI that takes a PDF and displays its contents, a summary, and its headings with a straightforward user interface. The summaries are generated using tokenization, count vectorization, TF-IDF, and Multinomial NB classification. Made in collaboration with two other partners during our Artificial Intelligence class.</p>
            </div>

            <div className='sub-title-container'>
                <a href='https://github.com/tony-tomass/NotWordle'>
                    <h1 className='sub-title'>
                        Wort-Hol
                    </h1>
                </a>
                <p className='sub-title-desc'>
                    Wort-Hol is an Android app that mimics the gameplay of the popular web and mobile game Wordle published by the New York Times. This project was made for my Mobile App Development class.
                </p>
            </div>

        </>
    )
}

export default ProjectsPage