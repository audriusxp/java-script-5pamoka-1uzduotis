window.onload = function() 
{
const testinis = [3,5,2,1];
console.log(testinis);
let suma =masyvoSuma(testinis);
console.log(suma);


}  


 
function masyvoSuma(testinis) {
    let suma = 0;
    for (let i = 0; i < testinis.length; i++) {
       
        suma = (suma + testinis[i]) % testinis.length;       
    }
    return suma;
}
