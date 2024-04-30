import { Link, Stack } from 'expo-router';
import { StyleSheet,} from 'react-native';

import { Text, View} from '../components/atoms/Themed';
import { useCounterStore } from '../service/cartStore';

import Button from '../components/atoms/Button';

export default function NotFoundScreen() {

  const { count, increment, minus } = useCounterStore()

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>

        <Button title="increment" onPress={increment}/>
        <Button title="minus" onPress={minus}/>
        <Text style={styles.title}>This screen doesn't exist. {count}</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
