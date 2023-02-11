
import { useEffect, useState } from 'react';
import * as  Components from './App.styled';
import { Item } from './Types/TypeItem';
import { items} from './Date/DateItem';
import { filterListByMonth, getCurrentMonth } from './helps/dateFilter';
import { InfoArea } from './Components/InfoArea/InfoArea';
import { Datecategories } from './Date/DateCategprie';

import { TableArea } from './Components/TableArea/TableArea';
import { InputArea } from './Components/InputArea/index';



 const App = ( ) => {

    const [list , setList] =useState(items);

    const [ filteredList, setFilteredList] = useState<Item[]>([

      { date: new Date(2021, 9, 6), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2021, 9, 15), category: 'food', title: 'Burger King', value: 28 },
    { date: new Date(2021, 9, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
    { date: new Date(2021, 10, 18), category: 'salary', title: 'Salário ACME', value: 4500 },
 
    ])
   
    const [ currentMonth,setCurrentMonth] = useState(getCurrentMonth());

    const [ income,setIncome] =  useState ( 0);

    const [ expense, setExpense] =  useState ( 0);

     useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
    }, [list, currentMonth]);

  useEffect(() =>  {

    let incomeCount= 0;
    let  expenseCount = 0;

    for (const  i in filteredList){
      if ( Datecategories[ filteredList[i].category].expense) {

         expenseCount  += filteredList[i].value

      } else{
        
         incomeCount += filteredList[i].value

      }

    }
    setIncome(incomeCount)
    setExpense(expenseCount)

  }, [filteredList])

    const handleMonthChange = ( newMonth:string) => {
      setCurrentMonth(newMonth);

    }

    const handleAddItem = ( items:Item) => {

      const newList = [... list]
      newList.push( items);
      setList( newList)
    }

  return( 
  
    <Components.Container>
      <Components.header>
                <Components.headerText> Sistema finceiro</Components.headerText >
      </Components.header>
            
            
          <Components.body>
         
         
           <InputArea onAdd={handleAddItem}/>
            

           <InfoArea currentMonth={currentMonth}
           onMonthChang={ handleMonthChange}
           income={income}
           expense={ expense}
           />
          

           <TableArea list={filteredList}
           
           />     
            
            
            
          </Components.body>
    </Components.Container>
  );
}
export default App