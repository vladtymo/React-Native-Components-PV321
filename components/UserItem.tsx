import { StyleSheet, Text, View } from 'react-native'
import { User } from '../app/models/user'
import { useUserData } from '../app/hooks/useUserData'
import ErrorBoundary from 'react-native-error-boundary'

type Props = {
    id: number
}
const UserItem = ({ id }: Props) => {
    const user = useUserData(id);

    return (
        <View>
            <Text>User: {user?.id} {user?.name} {user?.email} {id % 2 === 0 ? user?.salary.toFixed(2) : ""}$</Text>
        </View>

    )
}

export default UserItem

const styles = StyleSheet.create({})