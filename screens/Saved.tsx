import { StyleSheet, View } from 'react-native'
import { Appbar } from 'react-native-paper'

const Saved = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Saved" />
      </Appbar.Header>
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})