function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const GenerateRandomDate = () => {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const currentDay = new Date().getDay()
    const randomDay = getRandomInt(currentDay,5)

    return new Date(currentYear, currentMonth, randomDay)
}