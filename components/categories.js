import { Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: 'center'
},
name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 15
},
image: {
    width: 100,
    height: 100,
},
});


export default function Category(props) {
    return (
      <View style={styles.container}>
        <Image source={{uri: props.source}} style={styles.image}/>
        <Text style={styles.name}>{props.name}</Text>
      </View>
    );
  }


  