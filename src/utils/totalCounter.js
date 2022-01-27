const totalCounter = (arr) => {
    let totalHigh = 0;
    let totalNormal = 0;
    let totalLow = 0;

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

    let total = totalHigh + totalNormal + totalLow;
    const percent = total / arr.length * 100;
    return {totalHigh, totalNormal, totalLow, total, percent};
}

export default totalCounter;