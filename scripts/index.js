document.addEventListener("DOMContentLoaded",()=> {

const boton=document.getElementById("btn");
let area,perimetro;

boton.addEventListener('click',()=>{

    const longitud=parseFloat(document.getElementById("long").value);
    const ancho=parseFloat(document.getElementById("anchura").value);
    if (longitud!=isNaN &&  ancho !=isNaN) {
        area=longitud*ancho;
        perimetro=(2*longitud)+(2*ancho);
        
        document.getElementById("area").textContent="Área del rectángulo: "+area;
        document.getElementById("perimetro").textContent="Perímetro del rectángulo: "+perimetro;
        }
        else {
            alert("hola")
            document.getElementById("area").textContent="Inserte un número";
        }
})
});