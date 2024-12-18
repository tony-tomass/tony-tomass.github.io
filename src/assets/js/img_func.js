function openIMG()
{
    var image = document.getElementById('image')
    var url = image.getAttribute('src')
    window.open(url)
} 