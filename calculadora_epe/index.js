
let calculatePrice = function(){
    const costService = 102;
    const ivaResidencial = 0.21;
    const ivaIndustrial = 0.27;
    const centro = 5.80;
    const sur = 5.40;
    const oeste = 5.35;
    const norte = 5.60;

    let cantKwhElement = document.getElementById("cant_kwh").value;

    let zoneUserElement = document.getElementById("zone_dom").value;

    let typeUserElements = document.getElementsByName("type_user");
        
    let typeUser;
    for (let element of typeUserElements) {
        if (element.checked) {
            typeUser = element.value;
        }
    }

    //ponerlo en otra variable
    if (typeUser === "residencial") {
        typeUser = ivaResidencial;
    } else if (typeUser === "industria") {
        typeUser = ivaIndustrial;
    }
    //agregar default
    switch (zoneUserElement) {
        case "sur":
            zoneUserElement = sur;
            break;
        case "norte":
            zoneUserElement = norte;
            break;
        case "oeste":
            zoneUserElement = oeste;
            break;
        case "centro":
            zoneUserElement = centro;
            break;
    }
    
    let resultado = costService + (cantKwhElement * zoneUserElement) * (1 + typeUser)
    document.getElementById("resultado").innerHTML = resultado.toFixed(2)



}