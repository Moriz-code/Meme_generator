// let gUserMemes;

// function renderPicsPersonalGallery() {
//    userMemesToRender = gUserMemes.map(function (src){
//     return `<li><img src="${src}"></li>`
//    })
// }


// // function renderPicsToMainGallry() {
// //     let images = getImagesTorender();
// //     images = images.map(function (image) {
// //         return `<li class="li-gallery-image pic${image.id}" onclick="onImgClick(${image.id})"><img src="${image.url}"></li>`
// //     })
// //     document.querySelector('.gallery-container').innerHTML = images.join('')
// // }


// function onSaving() {
//     let userMeme = document.getElementById('canvas').toDataURL("image/png");
//     gUserMemes = loadFromStorage('memeImgs')
//     gUserMemes.push(userMeme)
//     saveToStorage('memeImgs', gUserMemes)
//     // renderPicsPersonalGallery();
// }


// // function getBase64Image(img) {
// //     var canvas = document.createElement("canvas");
// //     canvas.width = img.width;
// //     canvas.height = img.height;

// //     var ctx = canvas.getContext("2d");
// //     ctx.drawImage(img, 0, 0);

// //     var dataURL = canvas.toDataURL("image/png");

// //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// // }



