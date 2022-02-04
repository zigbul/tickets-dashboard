const FOURTEEN_DAYS = 12096e5;

const counter = (arr) => {
    let high = 0;
    let normal = 0;
    let low = 0;
    let total = 0;
    let percent = 0;

    if (arr.length === 0) return {high, normal, low, total, percent};
    const filtredArr = arr.filter( el => el.created - Date.now() <= FOURTEEN_DAYS);

    filtredArr.forEach(el => {
        if (el.completed === false) {
            switch(el.priority) {
                case 'High':
                    high++;
                    break;
                case 'Normal':
                    normal++;
                    break;
                case 'Low':
                    low++;
                    break;
                default:
                    break;
            }
        }
    });

    total = high + normal + low;
    percent = total / filtredArr.length * 100;
    return {high, normal, low, total, percent};
}

export default counter;