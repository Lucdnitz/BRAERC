import { View, Text } from 'react-native';

import { StyleSheet } from 'react-native';
export interface QuartoProps {
  testID?: string,
  texto: string,
}

export function Comodo(props: QuartoProps) {

  return (
    <View style={stylesheet.root} testID={props.testID}>
      <View style={stylesheet.rectangle5} testID="1:32">
        <Text style={stylesheet.SampleText} testID="1:37">
            {props.texto}
        </Text>
      </View>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  root: {
    width: 118,
    height: 36
  },
  rectangle5: {
    width: 118,
    height: 36,
    flexShrink: 0,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SampleText: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'serif',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});

