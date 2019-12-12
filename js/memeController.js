let gCanvas, gCtx, gImg, gCurrTxtIdx, gTxtCounter; 

let gStyle = {
    tool: 'text',
    fillColor: 'pink',
    strokeColor: 'black',
    strokeWidth: 1,
    fontSize: 40,
    fontFamily: 'Impact',
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
    document.querySelector('.canvas-container').hidden = false;
    updateMemeImgId(imgID);
    renderCanvas();
}

function initCanvas() {
    gCanvas = document.querySelector('.main-canvas');
    gCtx = gCanvas.getContext('2d');
    gCurrTxtIdx = 0;
    createNewLine({x: (gCanvas.width / 6), y: (gCanvas.height / 5)}, 40 , 'center', 'pink');
    createNewLine({x: (gCanvas.width / 6), y: (gCanvas.height - 30)}, 80 , 'center', 'black');
    renderCanvas();
}

function renderCanvas() {
    meme = getMemeToRender();
    drawImg(meme.selectedImgId);
    drawText(meme.txts);
}

function drawImg(imgID) {
    gImg = new Image();
    gImg.src = getImgByID(imgID).url;
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
}

function resizeCanvas(img) {
    //TODO: change the canvas size according to the picture size and screen size. 
}


function onTextChange(ev) {
    updateMemeTxt(gCurrTxtIdx, ev.target.value)
    renderCanvas();
}

function onCreateNewLine(){
    createNewLine(gCurrentPos);
    renderCanvas();
}


function drawText(txts) {  
    gTxtCounter = txts.length - 1;
    // gCtx.save();
    for (var i = 0; i < txts.length; i++) {
        gCtx.fillStyle = txts[i].color;
        gCtx.font = txts[i].size + 'px Impact';
        gCtx.fillText(txts[i].line, txts[i].pos.x, txts[i].pos.y);
        gCtx.strokeText(txts[i].line, txts[i].pos.x, txts[i].pos.y);
    }
    //  gCtx.restore()
}

function switchline(){
    if (gCurrTxtIdx >= gTxtCounter){
        gCurrTxtIdx = 0;
    }
    else{
        gCurrTxtIdx += 1
    }
}

function onStyleChange(property, val) {
    switch (property) {
        case 'fontsize':
             updateLineSize(gCurrTxtIdx , val);
             renderCanvas();         
             break;
             
        case 'pos':
            updatePos(gCurrTxtIdx , val);
            renderCanvas(); 
            break;
            }  
    }

    function downloadCanvas(elLink) {
        const data = gCanvas.toDataURL();
        elLink.href = data
        elLink.download = 'my-img.png'
    }
   
