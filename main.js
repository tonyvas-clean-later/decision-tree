function toggleControls(){
    let element = document.getElementById('controls_container');
    switch (element.style.display) {
        case 'flex':
            element.style.display = 'none'
            break;
        case 'none':
            element.style.display = 'flex'
            break;
        default:
            element.style.display = 'flex'
            break;
    }
}

function openDocument(){
    alert('open')
}

function newDocument(){
    alert('new')
}

function saveDocument(){
    alert('save')
}

function saveDocumentAs(){
    alert('save as')
}