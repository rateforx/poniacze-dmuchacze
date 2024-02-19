import { StyleSheet } from 'react-native'
import { colors } from '../colors'

export const styles = StyleSheet.create( {
    column: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.greyDark,
    },
    image: {
        height: 200,
    },
    text: {
        color: colors.offWhite,
    },
    shadow: {
        shadowColor: colors.accent,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 50,
    }
} )
