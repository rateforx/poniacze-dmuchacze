import { Image, Text, View, ViewProps } from 'react-native'
import { styles } from './styles'
import carImage from '../../assets/car.png'

const Column = ( { children }: ViewProps ) => (
    <View style = { styles.column }>
        { children }
    </View>
)

export const Top = () => (
    <View style = { styles.container }>

        <Column>
            <Text style = { styles.text }>
                <Text>50%</Text>
                <Text>6.0 Bar</Text>
            </Text>
            <Text style = { styles.text }>50% 6.0 Bar</Text>
        </Column>

        <Column>
            <Image
                source = { carImage }
                style = { styles.image }
                resizeMode = 'contain'
            />
            <Text>6.0 Bar</Text>
        </Column>

        <Column>
            <Text style = { styles.text }>50% 6.0 Bar</Text>
            <Text style = { styles.text }>50% 6.0 Bar</Text>
        </Column>

    </View>
)
