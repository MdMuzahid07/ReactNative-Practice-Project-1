import { ScrollView, StyleSheet, View } from 'react-native';
import HorizontalCard from './components/horaizontalCard/HorizontalCard';
import HorizontalCardTwo from './components/horaizontalCard/HorizontalCardTwo';
import CardWithImage from './components/CardWithImage';
import ClickableCard from './components/ClickableCard';
import FlatListCard from './components/list/FlatListCard';

export default function App() {
  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <HorizontalCard />
      <HorizontalCardTwo />
      <CardWithImage />
      <ClickableCard />
      <FlatListCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white"
  }
})

