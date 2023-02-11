import { Item } from "../Types/TypeItem";

export const getCurrentMonth = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    const newList: Item[] = [];
     const [year, month] = date.split('-');

    for(const i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) 
        {
            newList.push(list[i]);
        }
    }

    return newList;
}


export const formatDate = ( date : Date): string => {

    const year = date.getFullYear();
    const month = date.getMonth() +1;
    const   day = date.getDate();

   return ` ${ addZeroDate(day)}/${addZeroDate(month)}/${year}`;

}
   
const addZeroDate = ( n : number ): string => n < 10 ? `0${n}` : `${n}`;

export const formathCurrentNonth = ( currentMonth: string):string => {


     const  [year,month] = currentMonth.split('-');
     const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','ourubro','novembro','dezembro']
    return  `${months[parseInt(month) -1 ]  } de  ${year}`;
}
