export function cashTotal(data) {
    return data?.reduce((acc, item)=> item.income + acc, 0)
} 