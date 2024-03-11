import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

const CardWithImage = () => {
  const handlePress = () => {
    Alert.alert("this is alert of React Native");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>CardWithImage</Text>
      <View>
        <TouchableOpacity onPress={handlePress} style={styles.card}>
          <Image
            style={styles.cardImg}
            source={{
              uri: "https://img.freepik.com/free-photo/closeup-exotic-forest-animal_60438-3549.jpg?t=st=1710048853~exp=1710052453~hmac=c96bc334abdb214fd1758923cfa89a9a12bbecc3bcb4d4c9d62315993e4c2107&w=1480",
            }}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Card Title</Text>
            <Text style={styles.cardSubtitle}>Card SubTitle</Text>
            <Text style={styles.cardDescription}>Card Description</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardWithImage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  mainText: {
    fontSize: 20,
  },
  card: {
    marginVertical: 20,
    width: "100%",
    height: 400,
    backgroundColor: "#6376FF",
    borderRadius: 20,
    elevation: 4,
  },
  cardImg: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    color: "white",
    fontSize: 25,
  },
  cardSubtitle: {
    color: "white",
    fontSize: 10,
  },
  cardDescription: {
    color: "white",
    fontSize: 14,
    marginTop: 10,
  },
});
