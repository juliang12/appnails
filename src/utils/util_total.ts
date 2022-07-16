import { DataProps } from "../models/form.model"

export function cashTotal(data: any, manicure: string) {
    return data?.reduce((acc: any, item: any)=> { return item.manicure === manicure ? acc + item.income / 2 : acc}, 0)
} 