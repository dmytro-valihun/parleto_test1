expenses = {
    "2023-01": {
        "01": {
            "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
            "fuel": [210.22]
        },
        "09": {
            "food": [11.9],
            "fuel": [190.22]
        }
    },
    "2023-03": {
        "07": {
            "food": [20, 11.9, 30.20, 11.9]
        },
        "04": {
            "food": [10.20, 11.50, 2.5],
            "fuel": []
        }
    },
    "2023-04": {}
}

function get_median_of_first_week_expenses(expenses) {
    let result = null;
    let resultExpenses = [];
    for (let date in expenses) {
        let [year, month] = date.split("-");
        let sunday = findFirstSunday(parseInt(year), parseInt(month))
        for (let day in expenses[date]) {
            if (parseInt(day) <= sunday) {
                for (let category in expenses[date][day]) {
                    resultExpenses.push(...expenses[date][day][category]);
                }
            }
        }
    }
    result = median(resultExpenses)
    return result
}

function median(values) {
    if (values.length === 0) {
        return 0
    }
    values.sort((a, b) => a - b);
    let mid = Math.floor(values.length / 2);
    if (values.length % 2 === 0) {
        return (values[mid - 1] + values[mid]) / 2;
    } else {
        return values[mid];
    }
}

function findFirstSunday(year, month) {
    let resultDate = new Date(year, month - 1, 1);
    while (resultDate.getDay() !== 0) {
        resultDate.setDate(resultDate.getDate() + 1);
    }
    return resultDate.getDate();
}

console.log(get_median_of_first_week_expenses(expenses))
