export function cashTotal(data, manicure) {
    return data?.reduce((acc, item)=> { return item.manicure === manicure ? acc + item.income / 2 : acc}, 0)
} 