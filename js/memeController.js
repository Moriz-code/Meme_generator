let gCanvas, gCtx, gImg, gCurrTxtIdx, gTxtCounter; 

let gCurrentPos = {
    x: 250,
    y: 250
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
    createNewLine('topLine', 40,  'center', 'pink' , 'black' , {x: (gCanvas.width / 6), y: (gCanvas.height / 5)});
    createNewLine('bottomLine', 40,  'center', 'purple' , 'white', {x: (gCanvas.width / 6), y: (gCanvas.height - 30)});
    document.querySelector('.lineInput').value = getLineByTxtIdx(gCurrTxtIdx);
}

function renderCanvas() {
    meme = getMemeToRender();
    drawImg(meme.selectedImgId);
    drawText(meme.txts);
    gTxtCounter = meme.txts.length - 1;
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
    createNewLine( 'new line', 30, 'center' , 'black' ,'white',  {x:250, y:250});
    gCurrTxtIdx = gTxtCounter + 1;
    document.querySelector('.lineInput').value = getLineByTxtIdx(gCurrTxtIdx);
    renderCanvas();
}

function drawText(txts) {  
    for (var i = 0; i < txts.length; i++) {
        gCtx.fillStyle = txts[i].fillColor;
        gCtx.strokeStyle = txts[i].strokeColor;
        gCtx.font = txts[i].size + 'px Impact';
        gCtx.fillText(txts[i].line, txts[i].pos.x, txts[i].pos.y);
        gCtx.strokeText(txts[i].line, txts[i].pos.x, txts[i].pos.y);     
    }
}

function switchline(){
    if (gCurrTxtIdx >= gTxtCounter){
        gCurrTxtIdx = 0;
    }
    else{
        gCurrTxtIdx += 1
    }
    document.querySelector('.lineInput').value = getLineByTxtIdx(gCurrTxtIdx);
    renderCanvas();
}

function onStyleChange(property, val) {
    switch (property) {
        case 'fontsize':
             updateLineSize(gCurrTxtIdx , val);  
        case 'pos':
            updatePos(gCurrTxtIdx , val);         
        case 'strokeColor':
            updateColor('strokeColor', gCurrTxtIdx, val.value);
        case 'fillColor':
        updateColor('fillColor', gCurrTxtIdx, val.value);
        renderCanvas();  
    }  
    }

    // function downloadCanvas(elLink) {
    //     const data = gCanvas.toDataURL();
    //     elLink.href = data
    //     elLink.download = 'my-img.png'
    // }


    function onDelete(){
        if (gTxtCounter === -1) return
        deleteLine(gCurrTxtIdx);
        gCurrTxtIdx = gTxtCounter - 1;
        renderCanvas();
    }
   
