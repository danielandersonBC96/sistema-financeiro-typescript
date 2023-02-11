import { Item } from '../../Types/TypeItem';
import * as Components from './styled';
import { TableItem } from '../TableItem/TableItem';




type Props = {

    list : Item[]
   
}


export const TableArea =  ( { list  }: Props) => {

    return(

        <Components.Table>
            <thead>
                <tr>

                    
                    <Components.TableHeadColumn width={100}>Data</Components.TableHeadColumn>
                
                    <Components.TableHeadColumn width={130}>Categoria</Components.TableHeadColumn>
                    <Components.TableHeadColumn>Título</Components.TableHeadColumn>
                    <Components.TableHeadColumn width={150}>Valor</Components.TableHeadColumn>

                      


                </tr>
            </thead>

            <tbody>
               {list.map(( item, index) =>(

                  <TableItem key={index} item= { item}/>

               )) }
               
             
            </tbody>
        </Components.Table>


    );
}