const days = (days = 1) => {
    return 24 * 60 * 60 * 1000 * days;
}

const dataSorter = (arr) => {
    if (arr.length === 0) return;
    const newArr = [];

    for (let i = 0; i <= 13; i++) {
        newArr.push({name: i, high: 0, normal: 0, low: 0});
    }

    arr.forEach(el => {
        const elLiveTime = Date.now() - el.created.seconds * 1000;

        for (let i = 0, y = 13; i <= 13; i++, y--) {
            if (elLiveTime > days(i) && elLiveTime < days(i + 1)) {
                if (el.priority === 'Normal') newArr[y].normal++;
                if (el.priority === 'High') newArr[y].high++;
                if (el.priority === 'Low') newArr[y].low++;
            }
        }
    });

    return newArr;
}

export default dataSorter;