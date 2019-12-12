'use strict'

let gKeywords = {
    'funny': 1,
    'love': 1
}

let gImgs = [{id: 0,url: 'imgs/000.jpg', keywords: ['funny']},
    {id: 1, url: 'imgs/001.jpg', keywords: ['love']},
    {id: 2, url: 'imgs/002.jpg', keywords: ['love']},
    {id: 3, url: 'imgs/003.jpg', keywords: ['love']},
    {id: 4, url: 'imgs/004.jpg', keywords: ['love']},
    {id: 5, url: 'imgs/005.jpg', keywords: ['love']},
    {id: 6, url: 'imgs/006.jpg', keywords: ['love']},
    {id: 7, url: 'imgs/007.jpg', keywords: ['love']},
    {id: 8, url: 'imgs/008.jpg', keywords: ['love']},
    {id: 9, url: 'imgs/009.jpg', keywords: ['love']},
    {id: 10, url: 'imgs/010.jpg', keywords: ['love']},
    {id: 11, url: 'imgs/011.jpg', keywords: ['love']},
    {id: 12, url: 'imgs/012.jpg', keywords: ['love']},
    {id: 13, url: 'imgs/013.jpg', keywords: ['love']},
    {id: 14, url: 'imgs/014.jpg', keywords: ['love']},
    {id: 15, url: 'imgs/015.jpg', keywords: ['love']},
    {id: 16, url: 'imgs/016.jpg', keywords: ['love']},
    {id: 17, url: 'imgs/017.jpg', keywords: ['love']},
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

function getMemeToRender(){
   return gMeme
}

function updateMemeImgId(id){
    gMeme.selectedImgId = id
}

function updateMemeTxt(TxtIdx, txt){
    gMeme.selectedTxtIdx = TxtIdx;
    gMeme.txts[TxtIdx].line = txt
}

function updateLineSize(TxtIdx,val){
     if (gMeme.txts[TxtIdx].size + val < 20) return;
    gMeme.selectedTxtIdx = TxtIdx;
    gMeme.txts[TxtIdx].size += val;  
}

function updatePos(TxtIdx,val){
    gMeme.selectedTxtIdx = TxtIdx;
    gMeme.txts[TxtIdx].pos.y += val; 
}

function updateColor(property,TxtIdx, val){
    gMeme.selectedTxtIdx = TxtIdx;
    gMeme.txts[TxtIdx][property] = val;  
}


function createNewLine(line = 'new line' , size, align, strokeColor, fillColor , pos){
    gMeme.txts.push({
        line,
        size,
        align,
        strokeColor,
        fillColor,
        pos
    } 
    ) 
}

function getLineByTxtIdx(TxtIdx){
    return gMeme.txts[TxtIdx].line
}
   

