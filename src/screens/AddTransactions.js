import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { AddTranDropDown, AddCategoryDropDown } from '../commons/constant';
import { AppColor } from '../commons/Colors';
import DatePicker from 'react-native-date-picker';
import { useDispatch } from 'react-redux';
import { salary,addTransaction } from '../redux/slices/TransactionSlice';

const AddTransactions = () => {

    const [dropDownValue, setDropDownValue] = useState(null);
    const [typeDropDownValue, setTypeDropDownValue] = useState(null)
    const [isFocus, setIsFocus] = useState(false);
    const [date, setDate] = useState(new Date())
    const [amt, setAmt] = useState(0)
    const [getSalary, setSalary] = useState(0)
    const [balanceLeft, setBalanceLeft] = useState("")
    const [remainingSalary, setRemainingSalary] = useState(0);
    const [tran, setTran] = useState({
        id:'',
        bal: '',
        date: '',
        transaction: '',
        category: '',
    })
    const dispatch = useDispatch()

    const setIncome = (sal) => {
        setSalary(sal);
        //dispatch(salary(sal));
    }

    const calculateBalance = (amt) => {
        let remainingbalance = getSalary - amt;
        setRemainingSalary(remainingbalance)
        dispatch(salary(remainingbalance))
    }

    const handleTransaction = () => {
        let id = 0;
        setTran((prev) => {
            return {
                ...prev,
                'id': id++,
                'bal': remainingSalary,
                'date': date,
                'transaction': dropDownValue.value,
                'category': typeDropDownValue.value,
            }
        })
        dispatch(addTransaction(tran))
    }

    return (


        <View style={styles.maincontainer}>
            <Text style={styles.text}>
                Add Transaction screen
            </Text>


            <TextInput
                placeholder='Salary'
                keyboardType='numeric'
                style={styles.input}
                onChangeText={txt => setIncome(txt)}
                value={getSalary}
                readOnly={balanceLeft > 0 ? true : false}
            //onFocus={handleOnFocus}
            />


            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={AddTranDropDown}
                value={dropDownValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setDropDownValue(item.value);
                    setIsFocus(false);
                }}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select transaction type' : '...'}
                searchPlaceholder="Search..."
            />

            <DatePicker
                date={date}
                onDateChange={setDate}
                mode="date"
                maximumDate={new Date("2099-12-31")}
                minimumDate={new Date("2024-05-21")}
                style={{ height: 80, margin: 10 }}
            />

            <TextInput
                placeholder='Amount'
                keyboardType='numeric'
                style={styles.input}
                onChangeText={txt => calculateBalance(txt)}
            //value={}
            //onFocus={handleOnFocus}
            />

            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={AddCategoryDropDown}
                value={typeDropDownValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setTypeDropDownValue(item.value);
                    setIsFocus(false);
                }}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select category' : '...'}
                searchPlaceholder="Search..."
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleTransaction}
            >
                <Text style={styles.lgnText}>
                    Add
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default AddTransactions;

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
    placeholderStyle: {
        fontSize: 16,
        padding: 10,
        height: 50,
        borderRadius: 8
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: '90%',
        marginBottom: 20
    },
    text: {
        alignSelf: 'center',
        marginBottom: 70,
        fontSize: 18,
        fontWeight: '500',
        color: AppColor.black
    },
    input: {
        height: 50,
        borderWidth: 1,
        width: '90%',
        marginBottom: 20,
        borderRadius: 7,
        paddingHorizontal: 10,
        alignSelf: 'center',
        color: AppColor.black
    },
    button: {
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        backgroundColor: AppColor.blue,
        width: 200,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30

    },

    lgnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: AppColor.white,
    },
})