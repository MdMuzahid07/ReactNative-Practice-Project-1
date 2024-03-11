import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

const ClickableCard = () => {
  const [isSure, setIsSure] = useState(false);
  const handlePress = () => {
    Alert.alert("Title", "Are you sure?", [
      { text: "Ask me letter", onPress: () => setIsSure(false) },
      { text: "Sure", onPress: () => setIsSure(true) },
    ]);
  };

  if (isSure) {
    Linking.openURL("https://mdmuzahid.dev/");
  }

  return (
    <View style={{ marginTop: 20, marginBottom: 100, paddingHorizontal: 20 }}>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>ClickableCard</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.container}
          horizontal={true}
        >
          <View style={styles.card}>
            <Text style={{ fontSize: 20 }}>React Native</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePress}
          style={styles.container}
          horizontal={true}
        >
          <View style={styles.card}>
            <Text style={{ fontSize: 20 }}>React Native</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.container}
          horizontal={true}
        >
          <View style={styles.card}>
            <Text style={{ fontSize: 20 }}>React Native</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ClickableCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  card: {
    width: 200,
    height: 150,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
