function zeroesToEnd(array) {
    let zeroescount=0;
    for(let i=0;i<array .length;i++){
        if (array[i] == 0){
            array .splice(i,1);
            zeroescount++;
            i--;
        }
    }
    while(zeroescount>0){
        array.push(0);
        zeroescount--;
    }
    return array;
}
console.log(zeroesToEnd(zeroesToEnd([0, 0])));