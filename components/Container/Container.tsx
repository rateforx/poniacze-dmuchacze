import { Text, View } from 'react-native'
import { styles } from './styles'
import { Top } from '../Top/Top'

const BottomView = () => (
    <View>
        <Text style = { styles.text }>bottom</Text>
    </View>
)

const Container = () => (
    <View style = { styles.container }>
        <Top/>
        <BottomView/>
    </View>
)

export default Container
