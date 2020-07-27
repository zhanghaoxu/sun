import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyWebView from '@/components/MyWebView';
import Config from 'react-native-config';
import {TextInput, Button, List} from 'react-native-paper';

export default function HomeScreen(props) {
  const webview_url = `${Config.WEBVIEW_BASE_URL}#/home`;
  const expanded = () => {};
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={styles.inputViewText} label="待办事宜" />
        <Button style={styles.inputViewButton}>添加</Button>
      </View>
      <View style={styles.list}>
        <List.Section title="Accordions">
          <List.Accordion
            title="Uncontrolled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {},
  inputViewText: {},
  inputViewButton: {},
});
