export function cashTotalUnit(data) {
    return data?.reduce((acc, item)=> item.income + acc / 2, 0)
} 