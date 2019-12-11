let gCanvas
let gCtx, gImg, gCurrentImgObj, gCurrentShape


function init() {
    renderPicsToGallry();
}

function renderPicsToGallry() {
    var images = getImagesTorender();
    images = images.map(function (image) {
        return `<li class="li-gallery-image pic${image.id}" onclick="onImgClick(${image.id})"><img src="${image.url}"></li>`
    })
    document.querySelector('.gallery-container').innerHTML = images.join('')
}

function onImgClick(imgID) {
    initCanvas(imgID);
}

function initCanvas(imgID) {
    gCanvas = document.querySelector('.main-canvas');
    gCtx = gCanvas.getContext('2d');

    gCurrentImgObj = getImgByID(imgID);
    //  resizeCanvas(currentImg);
    drawImg();
}

function drawImg() {
    gImg = new Image();
    gImg.onload = () => {
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
    }
    gImg.src = gCurrentImgObj.url
}

function resizeCanvas(img) {
    //TODO: change the canvas size according to the picture size and screen size. 
}


function draw(ev) {
    gCtx.save()
    const offsetX = ev.offsetX
    const offsetY = ev.offsetY
    // const { offsetX, offsetY } = ev
    switch (gCurrShape) {
        case 'line':
            drawLine(offsetX, offsetY)
            break;
    }
    gCtx.restore()
}