'use strict'
let gKeywords = {
    'funny': 1,
    'love': 1
}

let gImgs = [{
        id: 1,
        url: 'imgs/001.jpg',
        keyboard: ['funny']
    },
    {
        id: 2,
        url: 'imgs/002.jpg',
        keyboard: ['love']
    }
]


let gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,

    txts: [{
        line: '',
        size: 20,
        align: 'left',
        color: 'red',

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