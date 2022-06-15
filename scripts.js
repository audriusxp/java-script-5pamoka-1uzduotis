window.onload = function() 
{
const testinis = [3,5,2,1];
console.log(testinis);
let suma =masyvoSuma(testinis);
console.log(vidurkis);


}  


 
function masyvoSuma(testinis) {
    let suma = 0;
    for (let i = 0; i < testinis.length; i++) {
       
        suma = suma + testinis[i] ; 
        vidurkis = suma / testinis.length;      
    }
    return vidurkis;
}
