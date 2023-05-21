import { Pressable, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import { Colors } from '../../constans/colors';

function Button({ onPress, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 4,
    backgroundColor: Colors.primary800,
    borderRadius: 4,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: Colors.primary50,
    textAlign: 'center',
    fontSize: 16,
  },
});
