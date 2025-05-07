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


const chknmr=(x)=>{
    let v1=x.toString()
    let v2=v1.split('').reverse().join()
    if(v1=v2){
        return true;
        
    }else{
        return false;
    }

}

console.log(chknmr(202));
