import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';
import Category from '../components/categories';

const items = [
  { text: 'Ironman',
    image: 'https://madeleinedarbyshire.github.io/CMP3035/assets/workshop1/pic1.jpg',
    description: 'Iron Man is a genius billionaire, Tony Stark, who suits up in a technologically advanced armor to fight crime and protect the world.',
    characteristics: {speed: 3, strength: 4, intelligence: 5, morality: 4}},
  { text: 'Captain America',
    image: 'https://madeleinedarbyshire.github.io/CMP3035/assets/workshop1/pic2.jpg',
    description: 'Captain America, also known as Steve Rogers, is a super-soldier with enhanced strength and agility, wielding his iconic vibranium shield to defend justice.',
    characteristics: {speed: 3, strength: 4, intelligence: 3, morality: 5}},
  { text: 'Thor',
    image: 'https://madeleinedarbyshire.github.io/CMP3035/assets/workshop1/pic3.jpg',
    description: 'Thor, the God of Thunder, possesses incredible strength and wields the enchanted hammer Mjolnir.',
    characteristics: {speed: 4, strength: 5, intelligence: 3, morality: 4}},
  { text: 'Black Widow',
    image: 'https://madeleinedarbyshire.github.io/CMP3035/assets/workshop1/pic4.jpg',
    description: 'Black Widow, aka Natasha Romanoff, is a highly skilled and agile spy and assassin with a mysterious past.',
    characteristics: {speed: 4, strength: 3, intelligence: 4, morality: 4}},
  { text: 'Hawkeye',
    image: 'https://madeleinedarbyshire.github.io/CMP3035/assets/workshop1/pic5.jpg',
    description: 'Hawkeye, or Clint Barton, is a master archer and skilled marksman with exceptional accuracy and agility',
    characteristics: {speed: 3, strength: 3, intelligence: 3, morality: 4}},
  { text: 'The Hulk',
    image: 'https://madeleinedarbyshire.github.io/CMP3035/assets/workshop1/pic6.jpg',
    description: 'A brilliant scientist, Bruce Banner transforms into the Hulk, an unstoppable force of raw strength and rage.',
    characteristics: {speed: 2, strength: 5, intelligence: 3, morality: 3}},
  { text: 'Captain Marvel',
    image: 'https://madeleinedarbyshire.github.io/CMP3035/assets/workshop1/pic7.jpg',
    description: 'Endowed with cosmic powers after a fusion with Kree technology, Carol Danvers, aka Captain Marvel, is a formidable hero with superhuman strength, energy manipulation, and flight capabilities.',
    characteristics: {speed: 4, strength: 4, intelligence: 3, morality: 5}},
  { text: 'Ant-Man',
    image: 'https://madeleinedarbyshire.github.io/CMP3035/assets/workshop1/pic8.jpg',
    description: 'A skilled thief turned superhero, Scott Lang, as Ant-Man, can shrink to the size of an ant, control ants, and harness superhuman strength through his suit.',
    characteristics: {speed: 3, strength: 3, intelligence: 4, morality: 4}},
  { text: 'Okoye',
    image: 'https://madeleinedarbyshire.github.io/CMP3035/assets/workshop1/pic10.jpg',
    description: 'The fearless leader of the Dora Milaje and Wakanda\'s chief of security, Okoye is a highly skilled warrior known for her unparalleled combat abilities and unwavering loyalty to her people.',
    characteristics: {speed: 4, strength: 3, intelligence: 4, morality: 5}}
  ];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010020',
  },
  titlebar : {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#bb1d68',
  },
  avatar: {
    width: 44,
    height: 44,
   borderRadius: 22,
  },
  title: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle :{
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
  },

});

function Titlebar() {
  return (
    <View style={styles.titlebar}>
      <Image style={styles.avatar} source={{uri: 'https://madeleinedarbyshire.github.io/CMP3035/assets/workshop1/avatar.jpeg'}} />
      <Text style={styles.title}>Welcome</Text>
    </View>
  );
}

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Titlebar />
      <Text style={styles.subtitle}>My Heros</Text>
      <ScrollView>
      {
        items.map((category, index) => (
          <TouchableOpacity key={index} onPress={() => props.navigation.navigate('Character', category)}>
          <Category name={category.text} source={category.image} key={index} />
          </TouchableOpacity>
        ))
      }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
