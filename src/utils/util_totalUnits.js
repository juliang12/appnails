export function cashTotalUnit(data, modo) {
    return data?.reduce((acc, item)=> { return item.credit === modo ?  acc + item.income - item.exit : acc },0)
} 