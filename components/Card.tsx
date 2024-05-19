import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PayBillCardProps {
  billName: string;
  billAmount: number;
  onPress: () => void;
}

const PayBillCard: React.FC<PayBillCardProps> = ({ billName, billAmount, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.billInfo}>
        <Text style={styles.billName}>{billName}</Text>
        <Text style={styles.billAmount}>Amount: ${billAmount}</Text>
      </View>
      <Text style={styles.payButton}>Pay Now</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: 200, 
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'linear-gradient(135deg, #FFC0CB, #8A2BE2)',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10,
    top:10,
    bottom:45,
   
  },
  billInfo: {
    flex: 1,
    marginRight: 10,
  },
  billName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 100,
    marginTop:0
  },
  billAmount: {
    fontSize: 14,
    color: '#888',
  },
  payButton: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop:100,
    marginBottom:0
},
});

export default PayBillCard;
