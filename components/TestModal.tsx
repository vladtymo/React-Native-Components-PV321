import { Button, Modal, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductList from './ProductList'

type Props = {
    visible: boolean,
    onClose: () => void
}

const TestModal = ({ visible, onClose }: Props) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}>
            <SafeAreaView style={styles.modal}>
                {/* <ScrollView>
                    <Text style={styles.text}>Hello Modal! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi corrupti, laudantium repellendus minus modi doloribus dicta, dolor voluptatem odit sunt, iure placeat nemo veniam repellat. Enim, quidem officia laborum mollitia sapiente minima ullam dolores esse ad quam cupiditate similique. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, officiis perferendis! Consequuntur optio eos ducimus provident eligendi velit doloribus sint mollitia illo voluptas a, earum officiis tenetur distinctio porro eius quas sit. Voluptas consequatur suscipit nobis nulla incidunt magnam fugit ducimus iusto at, ipsum assumenda atque placeat accusantium qui ab facilis labore maiores voluptatem, mollitia alias eaque vel. Praesentium excepturi, natus recusandae nobis aliquid doloribus, voluptatem quasi beatae aut repudiandae eligendi ea soluta, quia iure dolores aliquam corrupti eaque harum error totam in dolor officiis. Fugiat, aperiam nisi nostrum blanditiis cupiditate aliquam quos velit alias tenetur nulla, aspernatur saepe veniam.</Text>
                    </ScrollView> */}
                <ProductList />
                <Button title="Close" onPress={onClose}></Button>
            </SafeAreaView>
        </Modal>
    )
}

export default TestModal

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        textAlign: 'center'
    },
    modal: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    }
})