import {View, Text} from "react-native";

export default function Greet({name}){
    return(
        <View style={{backgroundColor:"plum", padding:60}}>
            <Text>Hello, {name}</Text>
        </View>
    );
}