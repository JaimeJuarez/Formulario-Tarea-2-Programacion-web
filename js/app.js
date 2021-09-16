// var inventario = [];
// var demo = document.getElementById('demo');
// window.onload = eventos;

// function eventos() {
//     document.getElementById('btnAdd').addEventListener("click", agregarDato);
//     document.getElementById('btnSearch').addEventListener("click", mostarDatos);
// }

// function agregarDato() {
//     var newInventario = {
//         Id: document.getElementById('exampleInput0').value,
//         Name: document.getElementById('exampleInput1').value,
//         Username: document.getElementById('exampleInput2').value,
//         Email: document.getElementById('exampleInput3').value,
//         Phone: document.getElementById('exampleInput4').value,
//         Website: document.getElementById('exampleInput5').value
//     }
//     inventario.push(newInventario);
//     console.log(inventario);
// }

// function mostarDatos() {
//     var DatosUsuario = "";
//     for (let i = 0; i < inventario.length; i++) {
//         DatosUsuario += "Id de usuario: " + inventario[i].Id + "<br>" + "Nombre: " + inventario[i].Name + "<br>" + "Nombre de Usuario: " +
//             inventario[i].Username + "<br>" + "Email de usuario: " + inventario[i].Email + "<br>" + "Telefono de Usuario: " + inventario[i].Phone +
//             "<br>" + " Sitio Web de usuario: " + inventario[i].Website;
//     }
//     demo.innerHTML = DatosUsuario + "<br>";
//     console.log(demo);
// }


class formulario {
    constructor(Id, Name, Username, Email, Phone, Website) {
            this.Id = Id;
            this.Name = Name;
            this.Username = Username;
            this.Email = Email;
            this.Phone = Phone;
            this.Website = Website;
        }
        // agregarDato() {
        //     var newInventario = {
        // document.getElementById('exampleInput0').value,
        // document.getElementById('exampleInput1').value,
        // document.getElementById('exampleInput2').value,
        //  document.getElementById('exampleInput3').value,
        //  document.getElementById('exampleInput4').value,
        // document.getElementById('exampleInput5').value
        //     }
        //     inventario.push(newInventario);
        //     console.log(inventario);

    // }
    mostarDatos() {
        var DatosUsuario = "" + "<br>";
        for (let i = 0; i < inventario.length; i++) {
            DatosUsuario += "<br>" + "Id de usuario: " + inventario[i].Id + "<br>" + "Nombre: " + inventario[i].Name + "<br>" + "Nombre de Usuario: " +
                inventario[i].Username + "<br>" + "Email de usuario: " + inventario[i].Email + "<br>" + "Telefono de Usuario: " + inventario[i].Phone +
                "<br>" + " Sitio Web de usuario: " + inventario[i].Website + "<br>";
        }
        demo.innerHTML = DatosUsuario + "<br>";
        console.log(demo);
    }
}
const data1 = new formulario(
    document.getElementById('exampleInput0').value,
    document.getElementById('exampleInput1').value,
    document.getElementById('exampleInput2').value,
    document.getElementById('exampleInput3').value,
    document.getElementById('exampleInput4').value,
    document.getElementById('exampleInput5').value);
document.getElementById('btnAdd').addEventListener("click", function agregarDato() {

    document.getElementById('demo');
    demo.innerHTML = agregar
})