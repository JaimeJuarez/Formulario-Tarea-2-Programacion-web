var inventario = [];
var demo = document.getElementById('demo');
window.onload = eventos;

function eventos() {
    document.getElementById('btnAdd').addEventListener("click", agregarDato);
    document.getElementById('btnSearch').addEventListener("click", mostarDatos);
    document.getElementById('btnDelete').addEventListener("click", borrardatos);
}

function agregarDato() {
    var newInventario = {
        Id: document.getElementById('exampleInput0').value,
        Name: document.getElementById('exampleInput1').value,
        Username: document.getElementById('exampleInput2').value,
        Email: document.getElementById('exampleInput3').value,
        Phone: document.getElementById('exampleInput4').value,
        Website: document.getElementById('exampleInput5').value
    }
    inventario.push(newInventario);
    newInventario = {
        Id: document.getElementById('exampleInput0').value = '',
        Name: document.getElementById('exampleInput1').value = '',
        Username: document.getElementById('exampleInput2').value = '',
        Email: document.getElementById('exampleInput3').value = '',
        Phone: document.getElementById('exampleInput4').value = '',
        Website: document.getElementById('exampleInput5').value = ''
    }
    console.log(inventario);
}

function mostarDatos() {
    var DatosUsuario = "" + "<br>";
    for (let i = 0; i < inventario.length; i++) {
        DatosUsuario += "<br>" + "Id de usuario: " + inventario[i].Id + "<br>" + "Nombre: " + inventario[i].Name + "<br>" + "Nombre de Usuario: " +
            inventario[i].Username + "<br>" + "Email de usuario: " + inventario[i].Email + "<br>" + "Telefono de Usuario: " + inventario[i].Phone +
            "<br>" + " Sitio Web de usuario: " + inventario[i].Website + "<br>";
    }
    demo.innerHTML = DatosUsuario + "<br>";
    console.log(demo);
}

function borrardatos() {
    for (let i = 0; i < inventario.length; i++) {
        var removed = inventario.splice(i);
        // if (inventario[0] == document.getElementById('exampleInput0').value) {
        // }

    }
    return removed;
}