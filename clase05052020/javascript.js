function esprimo(number) {
    let primo = "es primo";
    let mitad = number / 2;
    let index = 2;
    while (index <= mitad) {
        // for (let index = 2; index <= mitad; index++) {
        if (number % index == 0) {
            primo = "no es primo";
            break;
        }
        index++;
    }
    return primo;
}
function muestraMensaje() {
    alert("Gracias por visitarnos");
}
function resalta() {
    this.value = this.id;
}