'use strict'
let gImgId = 0;

let gImgs = [{id: gImgId++,url: 'imgs/000.jpg', keywords: ['funny']},
    {id:  gImgId++, url: 'imgs/001.jpg', keywords: ['dogs']},
    {id:  gImgId++, url: 'imgs/002.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/003.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/004.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/005.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/006.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/007.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/008.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/009.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/010.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/011.jpg', keywords: ['cats']},
    {id:  gImgId++, url: 'imgs/012.jpg', keywords: ['cats']},
    {id:  gImgId++, url: 'imgs/013.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/014.jpg', keywords: ['love']},
    {id:  gImgId++, url: 'imgs/015.jpg', keywords: ['funny']},
    {id:  gImgId++, url: 'imgs/016.jpg', keywords: ['funny']},
    {id:  gImgId++, url: 'imgs/017.jpg', keywords: ['game']},
]

let gMeme = {
    selectedImgId: 0,
    selectedTxtIdx: 0,
    txts: []
}

function getImagesTorender() {
    return gImgs;
}

function getImgByID(imgID) {
    return gImgs.find(function (img) {
        return img.id === imgID
    })
}

// userUploadMeme
function createUserMeme(){
    updateMemeObj()
    addUserImgToGallery()
}

function addUserImgToGallery(){
    let newImg = {
        id: gImgId++,
        url: loadFromStorage('meme' , ''), 
        // keywords: ['']
    }
    gImgs.push(newImg);
}

function updateMemeObj() {
    gMeme = {
        selectedImgId: gImgId,
        selectedTxtIdx: 0,
        txts: []
    }
    createNewLine('topLine', 40,  'center', 'black' , 'white' , {x: (gCanvas.width / 6), y: (gCanvas.height / 5)}); 
    createNewLine('bottomLine', 40,  'center', 'black' , 'white', {x: (gCanvas.width / 6), y: (gCanvas.height - 30)});
}


function getMemeToRender(){
   return gMeme
}

function updateMemeImgId(id){
    gMeme.selectedImgId = id
}

function updateText(property, TxtIdx, val){
    gMeme.selectedTxtIdx = TxtIdx;
    if (property === 'fontsize') {
    if (gMeme.txts[TxtIdx][property] + val < 20) return;
        gMeme.txts[TxtIdx][property] += val;
    }
    else if (property === 'pos'){
        gMeme.txts[TxtIdx][property].y += val;
    }
    else{
        gMeme.txts[TxtIdx][property] = val;
    }
}


function createNewLine(line = 'new line' , fontsize = 30 , align = 'center', strokeColor = 'black', fillColor = 'white', pos = {x: 50 , y:200}){
       gMeme.txts.push ({
        line,
        fontsize,
        align,
        strokeColor,
        fillColor,
        pos
    } 
    ) 
    
}

function getLineByTxtIdx(TxtIdx){
    return gMeme.txts[TxtIdx].line;    
}

function deleteLine(TxtIdx){
    gMeme.selectedTxtIdx = TxtIdx;
    return gMeme.txts.splice(TxtIdx,1);
}

   function getMemeSearchResults(userInput){
     var searchResults = gImgs.filter((img => img.keywords.includes(userInput)))
      return searchResults
}
   

