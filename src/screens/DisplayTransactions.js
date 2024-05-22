import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { AppColor } from '../commons/Colors';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
const DisplayTransactions = () => {
  const data= useSelector(store => store.transaction.Transactions)
  // console.log('displa',data)
  return (
    <View style={styles.maincontainer}> 
      <FlatList
        data={data}
        renderItem={(key,item)=>{
          return(
            <Text>
              {item.bal}
            </Text>
          )
        }}
      />
    </View>
  )
}

export default DisplayTransactions

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
    //marginTop: 20,
    //marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColor.lightPink
  },
})