const hours = (hours = 1) => {
    return 60 * 60 * 1000 * hours;
}

const dataSorter = (arr) => {
    const newArr = [];

    for (let i = 0; i <= 23; i++) {
        newArr.push({name: i, high: 0, normal: 0, low: 0});
    }

    arr.forEach(el => {
        const elLiveTime = Date.now() - el.created.seconds * 1000;
        console.log(el.priority)
        for (let i = 0, y = 23; i <= 23; i++, y--) {
            if (elLiveTime > hours(i) && elLiveTime < hours(i + 1)) {
                if (el.priority === 'Normal') newArr[y].normal++;
                if (el.priority === 'High') newArr[y].high++;
                if (el.priority === 'Low') newArr[y].low++;
            }
        }
    });

    return newArr;
}

export default dataSorter;