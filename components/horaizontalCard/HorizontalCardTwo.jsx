import { ScrollView, StyleSheet, Text, View } from "react-native";

const HorizontalCardTwo = () => {
  return (
    <View>
      <Text style={styles.mainText}>HorizontalCardTwo</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <View style={styles.card}>
          <Text>This is a card text</Text>
        </View>
        <View style={styles.card}>
          <Text>This is a card text</Text>
        </View>
        <View style={styles.card}>
          <Text>This is a card text</Text>
        </View>
        <View style={styles.card}>
          <Text>This is a card text</Text>
        </View>
        <View style={styles.card}>
          <Text>This is a card text</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HorizontalCardTwo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  mainText: {
    paddingHorizontal: 20,
    marginTop: 20,
    fontSize: 20,
  },
  card: {
    width: 250,
    height: 150,
    backgroundColor: "red",
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
});
