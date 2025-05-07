// let num = [4,5,6] 
// let target = 11;
// // for (let i = 0;i<num.length;i++) {
//     for (let j = i + 1; j < num.length; j++) {
                
//         if (num[i] + num[j] === target) {
//             console.log(i, j);           
            
//         }
//     }
// }



// function twoSum(num,target) {
//                 for (let i = 0;i<num.length;i++) {
//                                 for (let j = i + 1; j < num.length; j++) {
                                            
//                                     if (num[i] + num[j] === target) {
//                                 //         console.log(i, j);  
//                                    return [i,j]         
                                        
//                                     }
//                                 }
//                             }        
                
// }
// twoSum([1,2,3,4,5,6,7,8,9],9)

// console.log(twoSum[i,j]);


// const chknmr=(x)=>{
//     let v1=x.toString()
//     let v2=v1.split('').reverse().join('')
//     console.log(v1);
//     if(v1===v2){
//         return true;
        
//     }else{
//         return false;
//     }

// }

// console.log(chknmr(202));


// let D=500;
// let m=1000;
// let a=D
// let b=m
// let r=a+b

  
// let r=dm;
// console.log(r);
// function romanToInt(s) {
//     const roman = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };

//     let total = 0;

//     for (let i = 0; i < s.length; i++) {
//         let curr = roman[s[i]];
//         let next = roman[s[i + 1]];

//         if (next > curr) {
//             total += next - curr;
//             i++;
//         } else {
//             total += curr;
//         }
//     }

//     return total;
// }

// console.log(romanToInt("III"));      
// console.log(romanToInt("IX"));       
// console.log(romanToInt("MCMXCIV"));  



const isValid=(s)=>{
   if(s==="()"||s==='{}'||s==='[]'||s==='(){}'||s==="()[]"||s==="{}[]"||s==='{}()'||s==="[]()"||s==="[]{}"||s==="[]{}()"||s==="()[]{}"||s==="{}()[]"||s==="([])"||s==="({})"||s==="{[]}"||s==="[()]"||s==="[{}]"||s==="{()}"){
    return true;

   }else{
    return false;
   }
}
console.log(isValid("()"));
