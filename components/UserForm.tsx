import { Alert, Button, Modal, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { Controller, useForm } from 'react-hook-form'
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
    visible: boolean,
    onClose: () => void
}
type FormFields = {
    email: string;
    lang: string;
    policy: boolean;
}

const UserForm = ({ visible, onClose }: Props) => {

    // const [selectedLanguage, setSelectedLanguage] = useState<string>("");

    const {
        control,
        handleSubmit,
        // formState: { errors },
    } = useForm<FormFields>({
        defaultValues: {
            email: "",
            lang: "",
            policy: false
        },
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        if (data.policy)
            Alert.alert(
                "Data",
                `Lang: ${data.lang}\nEmail: ${data.email}`
            )
        else
            Alert.alert("Error", "Please accept private policy to use service!")
    })

    return (
        <Modal visible={visible} animationType='slide'>
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Create User</Text>

                <Text>Email:</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            // keyboardType="numeric"
                            style={styles.input}
                            onChangeText={onChange}
                            value={value} />
                    )}
                    name="email"
                />

                <DateTimePicker value={new Date()}
                    mode="date" />
                <DateTimePicker value={new Date()}
                    mode="time" />

                <Text>Accept policy:</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Switch
                            onValueChange={onChange}
                            value={value} />
                    )}
                    name="policy"
                />

                <Text>Select programming lang:</Text>
                <Controller
                    control={control}
                    name="lang"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Picker
                            selectedValue={value}
                            onValueChange={onChange}>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="Python" value="py" />
                            <Picker.Item label="Perl" value="pl" />
                        </Picker>

                    )}
                />
                <Button title="Submit" onPress={onSubmit}></Button>

                <Button title="Close" onPress={onClose}></Button>
            </SafeAreaView>
        </Modal>
    )
}

export default UserForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    text: {
        fontSize: 18,
        textAlign: 'center'
    },
    input: {
        backgroundColor: "lightgrey",
        minWidth: 200,
        padding: 8
    }
})