
// Función que calcule si hay stock de gorras y zapatillas en un comercio. Dependiendo de la cantidad del usuario



function stock(){
    //Pido cantidad de gorras y zapatillas
    var gorras = prompt("Ingrese cantidad de gorras");
    var zapas = prompt("Ingrese cantidad de zapatillas:");

    //Mostramos el resultado
    if ((gorras >= 0 && gorras <= 50 && zapas >= 0 && zapas <= 5))
        alert ("Tenemos stock de gorras y zapatillas");
     else if
     ((gorras >= 50 && zapas <= 5))
        alert ("No hay stock de gorras, si de zapatillas"); 
        else if
        ((gorras <= 50 && zapas >= 5))
           alert ("No hay stock de zapas, si de gorras"); 
    else{
        alert ("No hay stock");
    } }
stock();