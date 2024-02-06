import {TouchableOpacity, View, Text} from 'react-native';

import { StyleSheet } from 'react-native';

export interface BotaoProps {
  testID?: string,
  onPress: () => void,
}

export function Botao(props: BotaoProps) {

  return (
    <TouchableOpacity onPress={props.onPress} testID={props.testID}>
      <View style={stylesheet.root} testID={props.testID}>
        <View style={stylesheet.rectangle4} testID="1:11">
        <Text style={stylesheet.sampleText} testID="1:13">
          {`SAMPLE TEXT`}
        </Text>
        </View>
      </View>
      </TouchableOpacity>
  );
}

const stylesheet = StyleSheet.create({
  root: {
    width: 169,
    height: 21,
  },
  rectangle4: {
    width: 169,
    height: 21,
    flexShrink: 0,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'rgba(81, 96, 231, 0.658823549747467)',
  },
  sampleText: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});

