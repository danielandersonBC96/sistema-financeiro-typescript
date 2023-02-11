
import * as Components from  './styles'
import { formathCurrentNonth } from '../../helps/dateFilter';
import { ResumeItem } from '../ResumeItem/ResumeItem';

type Props = {
 
    currentMonth: string
    onMonthChang: ( newMonth: string) => void;
    income:number;
    expense:number;


}

export const  InfoArea = ({ currentMonth, onMonthChang , income, expense}:Props) =>{

    const handleMonth  = () => {

        const [ year, month ] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) -1,1 )
        currentDate.setMonth( currentDate.getMonth()   -1  )
        onMonthChang(`${currentDate.getFullYear()}  ${currentDate.getMonth() +1 }  `)

    }

    const handleNextMonth = () => {

        const [ year, month ] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) -1,1 )
        currentDate.setMonth( currentDate.getMonth()   + 1  )
        onMonthChang(`${currentDate.getFullYear()}  ${currentDate.getMonth() +1 }  `)

    }

    return(

     
             <Components.Container>
                <Components.MonthArea>
                    <Components.MonthArrow onClick={handleMonth}>                 
                         ◀️
                    </Components.MonthArrow>
                    <Components.MonthTitle>{formathCurrentNonth(currentMonth)}</Components.MonthTitle>
                    <Components.MonthArrow  onClick={handleNextMonth}>
                         ▶️
                    </Components.MonthArrow>
                </Components.MonthArea>
                <Components.MonthArea>

                       <ResumeItem  title= ' Receita ' value ={ income}/>
                       <ResumeItem  title= ' Despesa ' value={expense}/>
                       <ResumeItem  title= ' Balanço  ' value={expense - income}/>

                </Components.MonthArea>
             </Components.Container>
      
    )
}

