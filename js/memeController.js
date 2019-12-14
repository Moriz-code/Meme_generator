let gCanvas, gCtx, gImg, gCurrTxtIdx, gTxtCounter, gHighlightInterval, gUserMemes = loadFromStorage('memeImgs', []);

let gCurrentPos = {
    x: 0,
    y: 0
}

function init() {
    renderPicsToMainGallry();
    initCanvas();
    resizeCanvas();
  //  window.addEventListener('resize' , function(){})
}

function resizeCanvas(){
    gCanvas.width  = window.innerWidth / 2;
    gCanvas.height = window.innerHeight / 2;
    if (gCanvas.width > gCanvas.height || gCanvas.height > gCanvas.width) gCanvas.width = gCanvas.height
}
  
function renderPicsToMainGallry(images = getImagesTorender()) {
    images = images.map(function (image) {
        return `<li class="li-gallery-image pic${image.id}" onclick="onImgClick(${image.id})"><img src="${image.url}"></li>`
    })
    document.querySelector('.gallery-container').innerHTML = images.join('')
}

function renderPicsUserGallery(){
    let userMemes = gUserMemes.map(function (url) {
        return  `<li class="li-gallery-image"><img src="${url}"></li>`
    })
    document.querySelector('.user-gallery-container').innerHTML = userMemes.join('')
}

function onImgClick(imgID) {
    updateMemeImgId(imgID);
    resizeCanvas();
    renderCanvas();
    document.querySelector('.canvas-container').classList.remove("display-none")
    document.querySelector('.gallert-options').classList.add("display-none")
}

function initCanvas() {
    gCanvas = document.querySelector('.main-canvas');
    gCtx = gCanvas.getContext('2d');
    gCurrTxtIdx = 0;
    createNewLine('topLine', 40,  'center', 'black' , 'white' , {x: (gCanvas.width / 10), y: (40)});
    createNewLine('bottomLine', 40,  'center', 'black' , 'white', {x: (gCanvas.width / 10), y: (450)});
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

function onTextChange(ev) {
    updateText('line' , gCurrTxtIdx, ev.target.value)
    renderCanvas();
}

// function createHighlight(){
//     gCtx.save()
//     gCtx.beginPath();
//     gCtx.rect(0, 0, 150, 150)
//     gCtx.fillStyle = 'orange'
//     gCtx.fillRect(0, 0, 150, 150)
//     gCtx.strokeStyle = 'red'
//     gCtx.stroke()
//     gCtx.closePath()
//     gCtx.restore()  
// }

function onCreateNewLine(){
    createNewLine( 'new line', 30, 'center' , 'black' ,'white',  {x:250, y:250});
    gCurrTxtIdx++;
    document.querySelector('.lineInput').value = getLineByTxtIdx(gCurrTxtIdx);
    renderCanvas();
}

function drawText(txts) {  
    for (let i = 0; i < txts.length; i++) {
        gCtx.fillStyle = txts[i].fillColor;
        gCtx.strokeStyle = txts[i].strokeColor;
        gCtx.font = txts[i].fontsize + 'px Impact';
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
            updateText(property, gCurrTxtIdx , val);      
            renderCanvas();          
    }  
    
 
    function onDelete(){
        if (gTxtCounter === -1) return
        deleteLine(gCurrTxtIdx);
        gCurrTxtIdx = gTxtCounter - 1;
        renderCanvas();
    }

// download canvas
    function onDownload() {
        let download = document.getElementById("download");
        let image = document.getElementById("canvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);
        }


        // image uploading
    function onImgUpload(){
            var imageLoader = document.getElementById('imageLoader');
              imageLoader.addEventListener('change', handleImage, false);

        }
    
    function handleImage(ev){
    var reader = new FileReader();
    var img = new Image();
        reader.onload = function(event){
            img.onload = function(){
                var scaleFactor = gCanvas.width / img.width
                var scale = Math.min((scaleFactor/img.width),(scaleFactor/img.height));
                img.width = img.width*scale;
                img.height = img.height*scale;
                //gCtx.drawImage(img,0,0);
                gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
                   
            }    
           
            img.src = event.target.result;
            saveToStorage('meme', img.src);       
        }
        reader.readAsDataURL(ev.target.files[0]);
        createUserMeme();
        renderCanvas();
       
        
        document.querySelector('.canvas-container').classList.remove("display-none")
        document.querySelector('.gallert-options').classList.add("display-none")

        
    }

    //save to gallery
    function onSaving(){
     let image = document.getElementById("canvas").toDataURL("image/png")
     gUserMemes.push(image);
     saveToStorage('memeImgs' , gUserMemes);
     renderPicsUserGallery()
    // var currentMeme = getMemeToRender();
    }


    //navigation
   function onMenuClick(page){
       let mainGallery = document.querySelector('.gallert-options')
       let MEMES = document.querySelector('.user-gallery-container')
       let canvas = document.querySelector('.canvas-container')

       if (page === 'Gallery'){
        mainGallery.classList.remove("display-none")
        MEMES.classList.add("display-none")
        canvas.classList.add("display-none")
       }
       else{
        MEMES.classList.remove("display-none")
        mainGallery.classList.add("display-none")
        canvas.classList.add("display-none")
       }
       
   }

//    function onCanvasClick(ev){
//      //  findTextLine(ev.offsetX , ev.offsetY)
//        console.log(ev.offsetX , ev.offsetY)
//    }

function onSearch(){
  const userInput = document.getElementById('searchInput').value.toLowerCase();
  if (userInput.length === 0)  {
      renderPicsToMainGallry() 
  }else{
    renderPicsToMainGallry(getMemeSearchResults(userInput))
  }
  
}
   
