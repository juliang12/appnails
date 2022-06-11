export function cashTotal(data) {
    return data?.reduce((acc, item)=> { return item.credit === "efectivo" ? acc + item.income - item.exit : acc}, 0)
} 