import { DataProps } from "../models/form.model"

export function cashTotalUnit(data: any, modo: string) {
    return data?.reduce((acc:any, item:any)=> { return item.credit === modo ?  acc + item.income - item.exit : acc },0)
} 