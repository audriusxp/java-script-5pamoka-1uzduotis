window.onload = function() 
{
const testinis = [3,5,2,1];
console.log(testinis);
let suma =masyvoSuma(testinis);
console.log(suma);
let vidurkis =masyvoVidurkis(testinis);
console.log(vidurkis);


}  
function masyvoSuma(testinis) {
    let suma = 0;
    for (let i = 0; i < testinis.length; i++) {
        
        suma += testinis[i];  
              
    }
    return suma;
}
function masyvoVidurkis(testinis){
    
        vidurkis =  masyvoSuma(testinis) / testinis.length;
        

        return vidurkis;
              
    
    
}

