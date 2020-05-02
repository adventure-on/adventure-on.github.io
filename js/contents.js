// CONTENUTI PER I PARAGRAFI


/**
 * Quota una citazione
 */ // font: 16px Times New Roman, serif;
function quote(text) {
    var s = '';
    s += '<div style="color: #5599BB;">';
    s += '<i>"' + text + '"</i>';
    s += '</div>-p-';
    return s;
}

// ASSETS
var assetsDir = '../assets/';
var imgDir = assetsDir + 'img/';
var soundDir = assetsDir + 'sound/';

function img(name) {
    var s = '';
    s += '<div class="img-thumbnail img-responsive" >';
    s += '<img class="img-fluid rounded" style="width: 100%;" src="' + imgDir + name + '" alt="' + name + '"/>';
    s += '</div>';
    return s;
}

function carouselItem(imgName, number, active='') {
    var s = ''
    + '     <div class="carousel-item ' + active + '">'
    + '        <div class="w-100 img-thumbnail img-responsive" >'
    + '           <img class="d-block w-100 img-fluid rounded" src="' + imgDir + imgName + '" alt="Immagine ' + number + '">'
    + '        </div>'
    + '        <div class="carousel-caption ">'
    + '        <h6>Immagine ' + number + '</h6>'
    + '        </div>'
    + '     </div>';
//     s += '<div class="img-thumbnail img-responsive" >';
//     s += '<img class="img-fluid rounded" style="width: 100%;" src="' + imgDir + name + '" alt="' + name + '"/>';
//     s += '</div>';
    return s;
}

function audio(fileName) {
    var s = '';
    s += '<div class="">';
    s += '  <audio controls>';
    s += '      <source src="' + soundDir + fileName + '" type="audio/mp3">';
    s += '      <i>Mi dispiace, il tuo browser non supporta la riproduzione di audio. Per favore, contatta gli Organizzatori per ricevere privatamente la traccia audio.</i>'
    s += '  </audio>';
    s += '</div>';
    return s;
}
