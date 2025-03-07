import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const api = "https://fakestoreapi.com/products";

export type Product = {
    readonly id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function ProductList() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await fetch(api);
        const data = await response.json();
        setProducts(data);
    }

    return (
        <View>
            <Text>Product List</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})