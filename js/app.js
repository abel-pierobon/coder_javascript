alert('Agencia de viajes')
alert('"Estos son nuestros destinos y sus precios"')
let destinos = 'america= $200.000 \nafrica=$300.000 \neuropa=$400.000 \nasia=$500000 \neeuu=$450.000';
alert(destinos)

let opcion;
let agregarPasajero = "si"; 
let reservas = 0; 

while (opcion!=='si' && opcion!=='no'){
    opcion = prompt("Desea realizar una reserva:\n\n si\n no");
    switch(opcion){
        case "si":
            apellidoNombre= prompt('Agregue datos del pasajero: ');
            dni = prompt('Ingrese su DNI: ');
            reservas++;
            while (agregarPasajero === "si") {
                agregarPasajero = prompt('Desea añadir datos de otro pasajero:\n\n si\n no');
                if (agregarPasajero === "si") {
                    apellidoNombre= prompt('Ingrese apellido y nombre completo');
                    dni = prompt('Ingrese su DNI: ');
                    reservas++;
                }
                alert('usted agrego '+ reservas + ' reserva/s en total');
            }
        break
        case "no":
            alert("¡Gracias por su visita!");
        break
        default: 
            alert('Ingrese una opción válida')
        break
    }
}
let america=200000;
let africa=300000;
let europa=400000;
let asia=500000;
let eeuu=450000;
let impuesto=1.45;
let retenciones=0.45;

function valorTotal() {
    let precio;
    let impuestoPais;
    let destino;
    while (destino!== 'america' && destino!== 'africa' && destino!== 'asia' && destino!== 'europa' && destino!== 'eeuu'){
        destino=prompt('ingrese destino elegido:')
        switch (destino) {
            case 'america':
                precio = america
                break
            case 'africa':
                precio=africa;
                break
            case 'europa':
                break
            case 'asia':
                precio = asia;
                break
            case 'eeuu':
                precio = eeuu;
                break
            default:
                alert('El destino ingresado es inválido. Elija un destino válido:\n\namerica \nafrica \neuropa \nasia \neeuu');
                break;
    }
}

precioTotal = precio*impuesto*reservas;
            impuestoPais=precio*retenciones*reservas; 
			alert('Detalles de la reserva'+'\n\nSu destino es: '+destino+'\n\nCantidad de reservas realizadas: '+ reservas+
            '\n\nEl costo total de su reserva es: ' +'$ '+precioTotal+ ' \n\nincluye impuesto pais y dolar solidario por $: '+impuestoPais+ '\n\n Gracias por su confiar en nosotros');
}

if (opcion=='si'){
    valorTotal();
}



