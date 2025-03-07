import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';

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
        const response = await axios.get<Product[]>(api);
        setProducts(response.data);
    }

    return (
        <SafeAreaView>
            <Text style={styles.title}>Product List</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ProductCard item={item} />
                )}
                initialNumToRender={2}
                // numColumns={2}
                // ItemSeparatorComponent={() => (
                //     <Text>------</Text>
                // )}
                keyExtractor={(i) => i.title}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textAlign: "center"
    }
})