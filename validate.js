const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const regex = /^[a-zA-ZÀ-ÿ\s]+$/;

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
    const cpfValue = campos[2].value.replace(/\D/g, ''); 
    
    if (cpfValue.length !== 11) { 
        setError(2);
    } else {
        removeError(2);
    }
}

function numeroValidate() {
    if (campos[4].value.length === '' || isNaN(campos[4].value)) {
        setError(4);
    } else {
        removeError(4);
    }
}