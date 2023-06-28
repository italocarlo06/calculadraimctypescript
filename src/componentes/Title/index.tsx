import {View,Text} from 'react-native';
import { Heading } from 'native-base';
import styles from './style'

interface TitleProps {
    name : string;
}
const Title = ({name}: TitleProps)=>{
    return(
        <View style={styles.boxTitle}>
            <Heading color="gray.100">{name}</Heading>            
        </View>
    )
}

export default Title