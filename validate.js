let campos = document.querySelectorAll('.required');
let spans = document.querySelectorAll('.span-required');
let regex = /^[a-zA-ZÀ-ÿ\s]+$/;

function setError(index) {
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nomeValidate() {

    if (campos[0].value.length < 3 || !regex.test(campos[0].value)) {
        setError(0);
    } else {
        removeError(0);
    }
}

function sobrenomeValidate() {

    if (campos[1].value.length < 3 || !regex.test(campos[1].value)) {
        setError(1);
    } else {
        removeError(1);
    }
}

function cpfValidate() {
    if (campos[2].value.length < 11 || isNaN(campos[2].value)) {
        setError(2);
    } else {
        removeError(2);
    }
}

function cepValidate() {
    if (campos[3].value.length < 8 || isNaN(campos[3].value)) {
        setError(3);
    } else {
        removeError(3);
    }
}

function numeroValidate() {
    if (campos[4].value.length < '' || isNaN(campos[4].value)) {
        setError(4);
    } else {
        removeError(4);
    }
}