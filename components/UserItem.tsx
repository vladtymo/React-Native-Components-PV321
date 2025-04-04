import { StyleSheet, Text, View } from 'react-native'
import { User } from '../app/models/user'
import { useUserData } from '../app/hooks/useUserData'

type Props = {
    id: number
}
const UserItem = ({ id }: Props) => {
    const user = useUserData(id);

    return (
        <View>
            <Text>User: {user?.id} {user?.name} {user?.email}</Text>
        </View>
    )
}

export default UserItem

const styles = StyleSheet.create({})