'use strict'
let gKeywords = {
    'funny': 1,
    'love': 1
}

let gImgs = [{
        id: 0,
        url: 'imgs/001.jpg',
        keywords: ['funny']
    },
    {
        id: 1,
        url: 'imgs/002.jpg',
        keywords: ['love']
    }
]

let gMeme = {
    selectedImgId: gImg,
    selectedTxtIdx: 0,
    txts: [{
        line:'',
        size: 20,
        align: 'left',
        color: 'red'
    }]
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

function updateMemeTxt(TxtIdx, txt, gCurrentStyle){
    gMeme.selectedTxtIdx = TxtIdx;
    gMeme.txts[TxtIdx].line = txt
}

