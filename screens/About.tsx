import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";

import { baseStyles } from '../styles/';

export function AboutScreen() {
    const globalState = useSelector((state) => state);
    const [count, setCount] = useState(0); // Local state

    useEffect(() => { }, []);

    return (
        <View style={baseStyles.container}>
            <Text>Local state -> You clicked {count} times</Text>

            <Button title="Click here to increase" onPress={() => setCount(count + 1)} />

            <Button
                title="Reset counter"
                onPress={() => setCount(0)}
                accessibilityLabel="Click here to reset the counter"
            />

            <Text>Global state - Raw data:</Text>
            <Text>{JSON.stringify(globalState, null, 4)}</Text>
        </View>
    );
}
