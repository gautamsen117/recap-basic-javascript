/* 
1. 0-32 = F
2. 33-39 = D
3. 40-49 = C
4. 50 -59 = B
5. 60-69 = A-
6. 70-79 = A
7. 80-89 = A+
8. 90-100 = Goden +
*/

let result = 90;
if(result <= 32 && result > 0){
    console.log('F');
}
else if(result <= 39 && result >= 33){
    console.log('D');
}
else if(result <= 49 && result >= 40){
    console.log('C');
}
else if(result <= 59 && result >= 50){
    console.log('B');
}
else if(result <= 69 && result >= 60){
    console.log('A-');
}
else if(result <= 79 && result >= 70){
    console.log('A');
}
else if(result <= 89 && result >= 80){
    console.log('A+');
}
else if(result <= 100 && result >= 90){
    console.log('Golden +')
}
else{
    console('Invalid your result, please contact your department');
}
