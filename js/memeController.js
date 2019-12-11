let gCanvas, gCtx, gImg

let gCurrentStyle = {
    tool: 'text',
    fillColor: 'black',
    strokeColor: 'black',
    strokeWidth: 1,
    font: '120px Impact',
    align: 'left',
}

let gCurrentPos = {
    x: 0,
    y: 0
}

function init() {
    renderPicsToGallry();
    initCanvas();
}

function renderPicsToGallry() {
    var images = getImagesTorender();
    images = images.map(function (image) {
        return `<li class="li-gallery-image pic${image.id}" onclick="onImgClick(${image.id})"><img src="${image.url}"></li>`
    })
    document.querySelector('.gallery-container').innerHTML = images.join('')
}

function onImgClick(imgID) {
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
    gImg.onload = () => {
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
    }
    gImg.src = getImgByID(imgID).url
 
}

function resizeCanvas(img) {
    //TODO: change the canvas size according to the picture size and screen size. 
}

function onSetTool(tool) {
    gCurrentStyle[tool] = tool;
}

function onTextChange(ev) {
    updateMemeTxt(ev.target.id, ev.target.value, gCurrentStyle)
    meme = getMemeToRender();
    drawText(meme.txts)
    // renderCanvas(); 
}


function drawText(txts) {
    for (var i = 0; i < txts.length; i++) {
        // console.log('drawText')
        // document.querySelector('.line' + i).innerText = txts[i].line
        gCtx.fillText(txts[i].line, 100, 100);
        gCtx.strokeText(txts[i].line, 100, 100);
    }
}