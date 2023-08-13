const removeFromArray = function (array, ...elements) {
    // for (let i = 0; i < array.length; i++) {
    //     for (const element of elements) {
    //         if (array[i] === element) {
    //             array.splice(i,1);
    //         }
    //     }
    // }
    let i = 0;
    while (i < array.length) {
        let increase = true;
        for (const element of elements) {
            if (array[i] === element) {
                array.splice(i, 1);
                increase = false;
            }
        }
        if (increase) i+=1;
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
