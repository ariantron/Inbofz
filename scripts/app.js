document.addEventListener('animationstart', function () {
    document.getElementsByTagName('body')[0]
        .style.backgroundImage = `url('images/slides/slide-${Math.floor(Math.random() * 4) + 1}.jpg')`
})
