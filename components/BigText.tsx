// impoimport React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BigTextProps {
  children: string;
}

const BigText: React.FC<BigTextProps> = ({ children }) => {
  return <Text style={styles.bigText}>{children}</Text>;
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default BigText;
