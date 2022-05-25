export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1 // COMMENT: ти вже використовуєш moment js тому форматування теж можна зробити через момент
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    
    return `${year}.${month}.${day}`
}
