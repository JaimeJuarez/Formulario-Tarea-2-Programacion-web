var INVENTARIO = [];
const DEMO = document.getElementById('demo');
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
        Website: document.getElementById('exampleInput5').value,
        Street: document.getElementById("exampleInput6").value,
        City: document.getElementById("exampleInput7").value,
        Zipcode: document.getElementById("exampleInput8").value,
        Company: document.getElementById("exampleInput9").value
    }
    INVENTARIO.push(newInventario);
    newInventario = {
        Id: document.getElementById('exampleInput0').value = '',
        Name: document.getElementById('exampleInput1').value = '',
        Username: document.getElementById('exampleInput2').value = '',
        Email: document.getElementById('exampleInput3').value = '',
        Phone: document.getElementById('exampleInput4').value = '',
        Website: document.getElementById('exampleInput5').value = '',
        Street: document.getElementById("exampleInput6").value = '',
        City: document.getElementById("exampleInput7").value = '',
        Zipcode: document.getElementById("exampleInput8").value = '',
        Company: document.getElementById("exampleInput9").value = ''
    }
    console.log(INVENTARIO);
}

function mostarDatos() {
    var DatosUsuario = "" + "<br>";
    for (let i = 0; i < INVENTARIO.length; i++) {
        DatosUsuario += "<br>" + "<b>" + "Id de usuario: " + "</b>" + INVENTARIO[i].Id + "<br>" + "<b>" + "Nombre: " + "</b>" + INVENTARIO[i].Name + "<br>" + "<b>" + "Nombre de Usuario: " +
            "</b>" + INVENTARIO[i].Username + "<br>" + "<b>" + "Email de usuario: " + "</b>" + INVENTARIO[i].Email + "<br>" + "<b>" + "Telefono de Usuario: " + "</b>" + INVENTARIO[i].Phone +
            "<br>" + "<b>" + "Sitio Web de usuario: " + "</b>" + INVENTARIO[i].Website + "<br>" + "<b>" + "Calle del usuario: " + "</b>" + INVENTARIO[i].Street + "<br>" + "<b>" + "Ciudad del usuario: " + "</b>" + INVENTARIO[i].City + "<br>" +
            "<b>" + "Codigo postal del usuario: " + "</b>" + INVENTARIO[i].Zipcode + "<br>" + "<b>" + "Compañia del usuario: " + "</b>" + INVENTARIO[i].Company + "<br>";
    }
    DEMO.innerHTML = DatosUsuario + "<br>";
    console.log(DEMO);
}

// function borrardatos(Id) {
//     if (Id == document.getElementById('exampleInput0').value) {
//         for (let i = 0; i < inventario.length; i++) {
//             var removed = inventario.splice(i);


//         }
//         return removed;
//     }

// }

function borrardatos(id) {
    let results = INVENTARIO.filter(item => {
        return item.Id != id;
    })
    INVENTARIO = results;
    console.log(results);
    console.log(id);
}
//Ciclo para encontrar el id del elemento, y devolver indice.

//Hacer el slice del array.