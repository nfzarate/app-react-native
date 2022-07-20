import { View, Text, StyleSheet } from 'react-native'
import colors from '../../constants/colors';

const Header = props => {
    const {title } = props

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '15%',
        paddingTop: 36,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: colors.floralwhite,
        fontSize: 25,
        fontFamily:'OSregular'
    }
})

export default Header