import * as Components  from './styled'
import { Item } from '../../Types/TypeItem';
import { formatDate  } from '../../helps/dateFilter';
import { Category } from '../../Types/TypesCategorie';



type Props = {

    item: Item
   
}

export const TableItem = ( { item }: Props ) => {

    return(
    <Components.TableLine>
        <Components.TableColumn>...</Components.TableColumn>
        <Components.TableColumn> {formatDate(item.date)}  </Components.TableColumn>
        <Components.TableColumn>
            <div>
               { item.category }
            </div>
        </Components.TableColumn>
        <Components.TableColumn> {item.title}   </Components.TableColumn>
        <Components.TableColumn>  {item.value}   </Components.TableColumn>
    </Components.TableLine>



    )
}