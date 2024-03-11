import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const allData = [
  {
    date: "2024-03-10",
    name: "Olivia Williams",
    img: "https://img.freepik.com/free-photo/modern-tokyo-street-background_23-2149394948.jpg?t=st=1710090290~exp=1710093890~hmac=cca73965a0d40a983a981bc00b6bfc1728837c821640bf37bf2541d7ac3aff8e&w=1380",
    uid: "901234",
    role: "manager",
  },
  {
    date: "2024-03-10",
    name: "David Miller",
    img: "https://img.freepik.com/free-photo/beautiful_1203-2633.jpg?w=1380",
    uid: "567890",
    role: "designer",
  },
  {
    date: "2024-03-10",
    name: "Emily Garcia",
    img: "https://img.freepik.com/free-photo/clean-city-streets-prague_23-2149417732.jpg?t=st=1710090286~exp=1710093886~hmac=74c0fa2f37b9ff234348075f4380723674cc5f8d23ec336fc1c4249dd556d2de&w=1380",
    uid: "234567",
    role: "customer support",
  },
  {
    date: "2024-03-10",
    name: "Charles Moore",
    img: "https://img.freepik.com/free-photo/bald-eagle-perched-majestically-tree-branch-generative-ai_188544-8795.jpg?t=st=1710090265~exp=1710093865~hmac=826dd2907081f1272a1ec2b288c646da8dfd12c484874d8e398bed3b33b096c9&w=1380",
    uid: "890123",
    role: "marketing",
  },
  {
    date: "2024-03-10",
    name: "Isabella Young",
    img: "https://img.freepik.com/free-photo/closeup-shot-bald-eagle-tree-branch-looking-its-prey_181624-45304.jpg?t=st=1710090269~exp=1710093869~hmac=9d7acf72c359da3e61ae7a7b3cd14017283677f60779da395a26303f86712165&w=996",
    uid: "456789",
    role: "sales",
  },
  {
    date: "2024-03-10",
    name: "William Jones",
    img: "https://img.freepik.com/free-photo/beautiful-view-empire-states-skyscrapers-new-york-city_181624-6295.jpg?t=st=1710090277~exp=1710093877~hmac=985b3e4a566af6fbcc8320ee834e57c0f91432cf00525cb27b5d4a0e9cd9f2fe&w=1380",
    uid: "012345",
    role: "analyst",
  },
];

const Item = ({ item }) => {
  const { name, img, role } = item;
  return (
    <View style={styles.card}>
      <Image style={styles.profileImg} source={{ uri: img }} />
      <View>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text>{role}</Text>
      </View>
    </View>
  );
};

const FlatListCard = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.mainText}>FlatListCard</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={allData}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.uid}
        />
      </View>
    </ScrollView>
  );
};

export default FlatListCard;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  mainText: {
    fontSize: 20,
    fontWeight: "600",
  },
  listContainer: {
    marginTop: 20,
  },
  card: {
    minHeight: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "red",
    marginBottom: 20,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    elevation: 4,
  },

  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  cardTitle: {
    fontSize: 20,
    color: "white",
  },
  subtitle: {},
});
