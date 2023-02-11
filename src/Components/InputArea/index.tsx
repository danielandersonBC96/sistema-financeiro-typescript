

import { Item } from '../../Types/TypeItem';
import * as C from './styled'

type Props = {

    onAdd : ( item:Item) => void
}

export const InputArea = ( {  onAdd } : Props ) => {

 const HandleInput = () => {

    const newItem: Item ={

     date: new Date (2021,9,27),
     category:  'food',
     title:' item de teste',
     value:123.3
   }
onAdd( newItem)
 }
   return(

     <C.Container>          
      
       <C.Button>
       <button onClick={HandleInput}> Enviar</button>
         
       </C.Button>
      
     </C.Container>

    
     
   )

}