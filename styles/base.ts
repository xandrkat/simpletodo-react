import { StyleSheet } from 'react-native';
import layout from '../framework/constants/layout';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: layout.window.height,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inSameLine: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});