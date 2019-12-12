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
    selectedImgId: gImg,
    selectedTxtIdx: 0,
    txts: [{
        line:'',
        size: 20,
        align: 'left',
        color: 'red'
    },

    {
        line:'line2',
        size: 20,
        align: 'left',
        color: 'red'
    }

]
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

