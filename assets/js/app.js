var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');
var links = document.querySelector('.links');

menuBtn.addEventListener('click', () => links.classList.add('translateZero'))
closeBtn.addEventListener('click', () => links.classList.remove('translateZero'))

// change image category
var thumbnail = document.querySelectorAll('.thumbnail')
var bigImg = document.querySelector('.big-img')
const removeOpacity = () => {
    for (let i = 0; i < thumbnail.length; i++) {
        const element = thumbnail[i].classList.remove('opacity');

        // thumbnail.classList.add('opacity-null')
    }
}
thumbnail.forEach(function(item) {
    item.addEventListener('click', (el) => {
        removeOpacity();
        // console.log(item.classList)
        // thumbnail.classList.add('opacity-null')
        item.classList.add('opacity')
        var arr = el.target.currentSrc;
        arr = arr.split('product-');
        var num = arr[1][0];

        // get big-img src value
        var bigarr = bigImg.currentSrc
        bigarr = bigarr.split('product-')
        var lastPart = num + bigarr[1].substring(1)
        var currentSrc = bigarr[0] + 'product-' + lastPart;
        // console.log(currentSrc)
        bigImg.src = currentSrc;
    })
})

var toggleRight = document.querySelector('.toggle-right')
var toggleLeft = document.querySelector('.toggle-left')

// let id = 0;
toggleRight.addEventListener('click', () => {
    // get big-img src value
    var bigarr = bigImg.currentSrc
    bigarr = bigarr.split('product-')
    var id = bigarr[1].charAt(0)
    var sum = parseInt(id) + 1
    if (sum == 5) {
        sum = 1
    }
    var lastPart = sum + bigarr[1].substring(1)
    var currentSrc = bigarr[0] + 'product-' + lastPart;
    console.log(sum)
    bigImg.src = currentSrc;
})

toggleLeft.addEventListener('click', () => {
    // get big-img src value
    var bigarr = bigImg.currentSrc
    bigarr = bigarr.split('product-')
    var id = bigarr[1].charAt(0)
    var sum = parseInt(id) - 1
    if (sum == 0) {
        sum = 4
    }
    var lastPart = sum + bigarr[1].substring(1)
    var currentSrc = bigarr[0] + 'product-' + lastPart;
    console.log(sum)
    bigImg.src = currentSrc;
})