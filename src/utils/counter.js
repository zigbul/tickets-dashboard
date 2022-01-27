const FOURTEEN_DAYS = 12096e5;

const counter = (arr) => {
    const filtredArr = arr.filter( el => el.created - Date.now() <= FOURTEEN_DAYS);

    let high = 0;
    let normal = 0;
    let low = 0;

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

    let total = high + normal + low;
    const percent = total / filtredArr.length * 100;
    return {high, normal, low, total, percent};
}

export default counter;