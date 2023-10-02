let calculatePrice = function(){

    dato1 = document.getElementsById("capacidad");
    capacidad = dato1.value;
    alert(capacidad)

    if (capacidad == "128-GB"){
        
        precio_capacidad = 150000;
    }
    else if (capacidad == "256-GB"){
        
        precio_capacidad = 165000;
    }
    else if (capacidad == "256-GB"){

        precio_capacidad = 180000;
    }

    dato2 = document.getElementsById("cantidad");
    cantidad = dato2.value;
    alert(cantidad)

    precio_total = Number(precio_capacidad) * cantidad;

    alert(precio_total)
}