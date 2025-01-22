function changePageTitle(text) {
    document.getElementById("page_title").innerHTML = text
}

function revertTitle() {
    document.getElementById("page_title").innerHTML = "&#11166;HOME"
}

function changePageDesc(num) {
    var description
    switch (num) {
        case 0:
            description = `\n&#11208; Learn more about who I am and what I like 
                                to do. You can also find links to my profiles on 
                                various social media and project websites 
                                where I post my works, as well different ways 
                                to contact or get in touch with me.`
            break
        case 1:
            description = `\n&#11208; Explore galleries of art I made from now and
                                back as early as 2016. You can find my personal 
                                art, and you can find works made for projects,
                                collaborations, contests, commissions, and
                                more stuff you wouldn't be able to find on
                                any other website.`
            break
        case 2:
            description = `\n&#11208; Check out the projects I made and worked on.
                                You can preview and download (if provided)
                                different programs and apps I developed.
                                You can also find any games or mods 
                                for games I created here as well, with 
                                links to other websites for them.`
            break
        case 3:
            description = `\n&#11208; This is where you can find everything else
                                that couldn't get categorized properly. If
                                you're really that curious about what else
                                I might have on this website, you can click
                                here and see, but there's not much!`
            break
        default:
            description = "Not suppose to see this!"
    }
    document.getElementById("page_desc").innerHTML = description
}

function revertDesc() {
    text = `\n&#11208; Welcome to my portfolio website! This is the
                main home page where you can navigate to
                other parts of the website. Hover over a
                character to get more info on a page.`

    document.getElementById("page_desc").innerHTML = text
}