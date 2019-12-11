let gCanvas, gCtx, gImg

let gCurrentStyle = {
    tool: 'text',
    fillColor: 'pink',
    strokeColor: 'black',
    strokeWidth: 1,
    font: '50px Impact',
    align: 'left',
}

let gCurrentPos = {
    x: 0,
    y: 0
}

function init() {
    renderPicsToGallry();
    initCanvas();
    applyCurrentStyle();
}

function renderPicsToGallry() {
    var images = getImagesTorender();
    images = images.map(function (image) {
        return `<li class="li-gallery-image pic${image.id}" onclick="onImgClick(${image.id})"><img src="${image.url}"></li>`
    })
    document.querySelector('.gallery-container').innerHTML = images.join('')
}

function onImgClick(imgID) {
    document.querySelector('.canvas-container').hidden = false;
    updateMemeImgId(imgID);
    renderCanvas();
}

function initCanvas(){
    gCanvas = document.querySelector('.main-canvas');
    gCtx = gCanvas.getContext('2d');
}

function renderCanvas() {
    meme = getMemeToRender();
    drawImg(meme.selectedImgId);
    drawText(meme.txts);
}

function applyCurrentStyle() {
    gCtx.fillStyle = gCurrentStyle.fillColor;
    gCtx.strokeWidth = gCurrentStyle.strokeWidth;
    gCtx.strokeColor = gCurrentStyle.strokeColor;
    gCtx.fontFamily = gCurrentStyle.fontFamily;
    gCtx.font = gCurrentStyle.font;
}

function drawImg(imgID) {
    gImg = new Image();
    gImg.src = getImgByID(imgID).url
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height) 
}

function resizeCanvas(img) {
    //TODO: change the canvas size according to the picture size and screen size. 
}

function onSetTool(tool) {
    gCurrentStyle[tool] = tool;
}

function onTextChange(ev) {
    updateMemeTxt(ev.target.id, ev.target.value, gCurrentStyle)
    renderCanvas();
    // meme = getMemeToRender();
    // drawText(meme.txts)
}


function drawText(txts) {
    for (var i = 0; i < txts.length; i++) {
        gCtx.fillText(txts[i].line, 100, 100);
        gCtx.strokeText(txts[i].line, 100, 100);
    }
}