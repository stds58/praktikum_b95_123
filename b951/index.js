// Функция для удаления дубликатов из массива
function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return [...new Set(arr)];
}

// Функция для группировки элементов массива по заданному ключу
function groupBy(arr, key) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return arr.reduce((acc, item) => {
        const groupKey = item[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
    }, {});
}

// Функция для разбиения массива на "чанки" (подмассивы) заданного размера
function chunkArray(arr, size) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    if (typeof size !== 'number' || size <= 0) {
        throw new Error('Chunk size must be a positive number');
    }
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// Экспортируем функции
module.exports = {
    removeDuplicates,
    groupBy,
    chunkArray,
};