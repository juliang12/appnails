export function cashTotal(data) {
    return data?.reduce((acc, item)=> item.income + acc - item.exit, 0)
} 