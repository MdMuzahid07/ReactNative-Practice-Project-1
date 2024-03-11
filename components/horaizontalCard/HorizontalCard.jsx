import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HorizontalCard() {
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={[styles.card]}>
          <Image
            style={styles.image}
            source={{
              uri: "https://img.freepik.com/free-vector/rocket-planet-draw_25030-38604.jpg?t=st=1710007187~exp=1710010787~hmac=61b93847fc3f9882c4dcd488f0f97d5cf673676d30620d8ddc6ca5d8488f6ae0&w=826",
            }}
          />
          <Text>text</Text>
        </View>

        <View style={[styles.card]}>
          <Image
            style={styles.image}
            source={{
              uri: "https://img.freepik.com/free-vector/rocket-planet-draw_25030-38604.jpg?t=st=1710007187~exp=1710010787~hmac=61b93847fc3f9882c4dcd488f0f97d5cf673676d30620d8ddc6ca5d8488f6ae0&w=826",
            }}
          />
          <Text>text</Text>
        </View>

        <View style={[styles.card]}>
          <Image
            style={styles.image}
            source={{
              uri: "https://img.freepik.com/free-vector/rocket-planet-draw_25030-38604.jpg?t=st=1710007187~exp=1710010787~hmac=61b93847fc3f9882c4dcd488f0f97d5cf673676d30620d8ddc6ca5d8488f6ae0&w=826",
            }}
          />
          <Text>text</Text>
        </View>
        <View style={[styles.card]}>
          <Image
            style={styles.image}
            source={{
              uri: "https://img.freepik.com/free-vector/rocket-planet-draw_25030-38604.jpg?t=st=1710007187~exp=1710010787~hmac=61b93847fc3f9882c4dcd488f0f97d5cf673676d30620d8ddc6ca5d8488f6ae0&w=826",
            }}
          />
          <Text>text</Text>
        </View>
        <View style={[styles.card]}>
          <Image
            style={styles.image}
            source={{
              uri: "https://img.freepik.com/free-vector/rocket-planet-draw_25030-38604.jpg?t=st=1710007187~exp=1710010787~hmac=61b93847fc3f9882c4dcd488f0f97d5cf673676d30620d8ddc6ca5d8488f6ae0&w=826",
            }}
          />
          <Text>text</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  card1: {
    backgroundColor: "red",
  },
  card2: {
    backgroundColor: "green",
  },
  card3: {
    backgroundColor: "blue",
  },
  card4: {
    backgroundColor: "indigo",
  },
  card5: {
    backgroundColor: "black",
  },
});
