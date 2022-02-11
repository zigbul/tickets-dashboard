type Element = {
    completed: boolean,
    priority: string,
}

const totalCounter = (arr: Element[]) => {
    let totalHigh = 0;
    let totalNormal = 0;
    let totalLow = 0;
    let total = 0;
    let percent = 0;

    if (arr.length === 0) return {totalHigh, totalNormal, totalLow, total, percent};

    arr.forEach(el => {
        if (el.completed === false) {
            switch(el.priority) {
                case 'High':
                    totalHigh++;
                    break;
                case 'Normal':
                    totalNormal++;
                    break;
                case 'Low':
                    totalLow++;
                    break;
                default:
                    break;
            }
        }
    });

    total = totalHigh + totalNormal + totalLow;
    percent = Math.round(total / arr.length * 100);
    return {totalHigh, totalNormal, totalLow, total, percent};
}

export default totalCounter;