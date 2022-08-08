





// 4. Moving Zeroes to the End
export const assignment4 = () => {
    var initialArray: any[] = [false,1,0,1,2,0,1,3,"a"];
    var zero: any[] = [];
    var notZero: any[] = [];
    for(let i = 0; i < initialArray.length; i++){
        if(initialArray[i] === 0){
            zero.push(initialArray[i]);
        }else{
            notZero.push(initialArray[i]);
        }
    }
    console.log(notZero.concat(zero));
}
assignment4();

