import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';



interface ListItemProps {
  title: string;
}


const ListItem: React.FC<ListItemProps> = ({ title }) => {
    return (
      <TouchableOpacity style={styles.item} activeOpacity={0.7}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  };
  

const List: React.FC = () => {
  const data = [
    { title: 'Announcement' },
    { title: 'Bulletins' },
    { title: 'Repair Request' },
    
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem title={item.title} />}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list} 
      />
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection:'row' 
  },
  item: {

    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    gap:20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
    marginTop:10,
    marginLeft:8,
    marginRight:8,
    borderWidth: 1,
    borderColor: '#C0C0C0', 
    borderRadius: 5, 
    padding: 5, 
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color:'DarkBlack'
 },
});

export default List;
