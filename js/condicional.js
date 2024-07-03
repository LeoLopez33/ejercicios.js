
// Función que calcule si hay stock de gorras y zapatillas en un comercio. Dependiendo de la cantidad del usuario



function stock(){
    //Pido cantidad de gorras y zapatillas
    var numero1 = prompt("Ingrese cantidad de gorras");
    var numero2 = prompt("Ingrese cantidad de zapatillas:");

    //Mostramos el resultado
    if ((numero1 >= 0 && numero1 <= 50 && numero2 >= 0 && numero2 <= 5))
        alert ("Tenemos stock de gorras y zapatillas");
     else if
     ((numero1 >= 50 && numero2 <= 5))
        alert ("No hay stock de gorras, si de zapatillas"); 
        else if
        ((numero1 <= 50 && numero2 >= 5))
           alert ("No hay stock de zapas, si de gorras"); 
    else{
        alert ("No hay stock");
    } }
stock();