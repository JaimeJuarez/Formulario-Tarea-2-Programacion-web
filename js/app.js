var INVENTARIO = [];
const DEMO = document.getElementById('demo');


document.getElementById('btnAdd').addEventListener("click", agregarDato);
// document.getElementById('btnSearch').addEventListener("click", mostarDatos);
document.getElementById('btnDelete').addEventListener("click", function() {
    var iditem = document.getElementById("deleteinput").value;
    borrardatos(iditem)
});
var selectscreen = document.getElementById("user-select");
var selectoption = document.getElementById("selectoption");
selectoption.hidden = true;
var cara1 = document.getElementById("cara1");
var cara2 = document.getElementById("cara2");
cara2.hidden = true;
document.getElementById("next").addEventListener("click", face2);
document.getElementById("back").addEventListener("click", face1);



function agregarDato() {
    var newInventario = {
        // Id: document.getElementById('exampleInput0').value,
        Id: INVENTARIO.length + 1,
        Name: document.getElementById('exampleInput1').value,
        Username: document.getElementById('exampleInput2').value,
        Email: document.getElementById('exampleInput3').value,
        Phone: document.getElementById('exampleInput4').value,
        Website: document.getElementById('exampleInput5').value,
        address: {
            Street: document.getElementById("exampleInput6").value,
            City: document.getElementById("exampleInput7").value,
            Zipcode: document.getElementById("exampleInput8").value,
        },
        Company: {
            name: document.getElementById("exampleInput9").value
        }
    }
    INVENTARIO.push(newInventario);
    mostarDatos();
    select();
    selecthidden();
    face1();
    document.getElementById("miform").reset();
    console.log(INVENTARIO);
}

function mostarDatos() {
    var DatosUsuario = "" + "<br>";
    for (let i = 0; i < INVENTARIO.length; i++) {
        DatosUsuario += "<br>" + "<b>" + "Id de usuario: " + "</b>" + INVENTARIO[i].Id + "<br>" + "<b>" + "Nombre: " + "</b>" + INVENTARIO[i].Name + "<br>" + "<b>" + "Nombre de Usuario: " +
            "</b>" + INVENTARIO[i].Username + "<br>" + "<b>" + "Email de usuario: " + "</b>" + INVENTARIO[i].Email + "<br>" + "<b>" + "Telefono de Usuario: " + "</b>" + INVENTARIO[i].Phone +
            "<br>" + "<b>" + "Sitio Web de usuario: " + "</b>" + INVENTARIO[i].Website + "<br>" + "<b>" + "Calle del usuario: " + "</b>" + INVENTARIO[i].address.Street + "<br>" + "<b>" + "Ciudad del usuario: " + "</b>" + INVENTARIO[i].address.City + "<br>" +
            "<b>" + "Codigo postal del usuario: " + "</b>" + INVENTARIO[i].address.Zipcode + "<br>" + "<b>" + "Compañia del usuario: " + "</b>" + INVENTARIO[i].Company.name + "<br>";
    }
    DEMO.innerHTML = DatosUsuario + "<br>";

}

function borrardatos(posicion) {

    for (var i = 0; i < INVENTARIO.length; i++) {

        if (INVENTARIO[i].Id == posicion) {

            INVENTARIO.splice(i, 1);
            console.log(i);
        }
        mostarDatos();
        select();
    }
}

var idselect = 0;

function select() {
    selectscreen.innerHTML = `<option value="">All Users</option> ` + "";
    for (let i = 0; i < INVENTARIO.length; i++) {
        selectscreen.innerHTML += `<option value="${i}">${INVENTARIO[i].Name}</option>`
    }

}

function selecthidden() {
    if (agregarDato) {
        selectoption.hidden = false;
    }

}

function filtrarDatos(posusuario) {

    console.log(INVENTARIO[posusuario]);
    var DatosUsuario = "<br>" + "<b>" + "Id de usuario: " + "</b>" + INVENTARIO[posusuario].Id + "<br>" + "<b>" + "Nombre: " + "</b>" + INVENTARIO[posusuario].Name + "<br>" + "<b>" + "Nombre de Usuario: " +
        "</b>" + INVENTARIO[posusuario].Username + "<br>" + "<b>" + "Email de usuario: " + "</b>" + INVENTARIO[posusuario].Email + "<br>" + "<b>" + "Telefono de Usuario: " + "</b>" + INVENTARIO[posusuario].Phone +
        "<br>" + "<b>" + "Sitio Web de usuario: " + "</b>" + INVENTARIO[posusuario].Website + "<br>" + "<b>" + "Calle del usuario: " + "</b>" + INVENTARIO[posusuario].address.Street + "<br>" + "<b>" + "Ciudad del usuario: " + "</b>" + INVENTARIO[posusuario].address.City + "<br>" +
        "<b>" + "Codigo postal del usuario: " + "</b>" + INVENTARIO[posusuario].address.Zipcode + "<br>" + "<b>" + "Compañia del usuario: " + "</b>" + INVENTARIO[posusuario].Company.name + "<br>";
    DEMO.innerHTML = DatosUsuario;
}

function face2() {
    cara1.hidden = true;
    cara2.hidden = false;
}

function face1() {
    cara1.hidden = false;
    cara2.hidden = true;
}