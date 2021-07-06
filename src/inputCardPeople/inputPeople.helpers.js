export const bubbleSort = (list) => {
        const newList = [...list]

        for(let i = 0, endI = newList.length - 1; i < endI; i++) {

            for(let j = 0, endJ = endI - i; j < endJ; j++) {
                if(Number(newList[j].iq) > Number(newList[j + 1].iq)) {

                    const swap = newList[j];

                    newList[j] = newList[j + 1];
                    newList[j + 1] = swap;
                }
            }
        }
        return newList
}

export const insertSort = (list) => {
    const newList = [...list];

    for(let i = 1; i < newList.length; i++) {
        const current = newList[i]
        let j = i;
    while( j > 0 && Number(newList[j - 1].iq) > Number(current.iq)) {
        newList[j] = newList[j - 1];
        j--;
    }
        newList[j] = current
    }
    return newList
}