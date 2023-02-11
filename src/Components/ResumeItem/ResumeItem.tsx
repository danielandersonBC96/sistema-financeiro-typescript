
import * as Components from './styled'


type Props = {

    title: string;
    value: number;
}
export const ResumeItem = ({title , value}: Props) => {

    return(
        
        <Components.Container>
            <Components.Title>{title}</Components.Title>
            <Components.Info>{value}</Components.Info>
        </Components.Container>
        
    )
}