import React, {useState, useEffect} from 'react';
import { Modal, StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image, TouchableNativeFeedbackBase, Platform} from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Background from '../../assets/images/login-mobile-bg.svg'
import LogoImg from '../../assets/images/wl-logo2.png'
import RadioButton from '../../components/RadioButton';
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker';
import{
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import { useDispatch } from 'react-redux';
import {changeCourse} from '../../actions/signUpActions'
import schema from '../../schemas/signUpCourse.schema'

export default function SignUpCourse({navigation}) {

    const [selectedYear, setSelectedYear] = useState();
    const [pickerModal, setPickerModal] = useState(false)
    const yearLevels = [
        {value: "1st Year"},
        {value: "2nd Year"},
        {value: "3rd Year"},
        {value: "4th Year"},
    ]
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const dispatch = useDispatch()

    const handleSubmit = values => {
        console.log(values)
        dispatch(changeCourse(values))
        navigation.navigate('SignUpInterests')
        
    }


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Formik
                initialValues={{
                    course:'',
                    yearLevel:'1st Year'
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ handleChange, handleBlur, handleSubmit,values, errors, touched }) => (
                    <View style={styles.container}>
                        <View style={styles.half}>
                            <Background
                                style={styles.background}
                                resizeMode="cover" 
                            />
                        </View>
                        <Image
                            style={styles.splash}
                            source={LogoImg}
                            resizeMode="contain" 
                        />
                        <Text style={styles.text2}>
                                WeLearn
                        </Text>
                        <View style={styles.form}>
                            <View style={styles.formHeader}>
                                <Text style={styles.text}>
                                    Create a WeLearn Account
                                </Text>
                                <Text style={styles.text3}>
                                    Please provide the following information.
                                </Text>
                            </View>
                            <TextInput
                                placeholder="Course Program"
                                autoCapitalize="none"
                                style={styles.textinput1}
                                onChangeText={handleChange('course')}
                                onBlur={handleBlur('course')}
                                value={values.course}
                            />
                            {errors.course && touched.course &&
                                <Text style={{ fontSize: 11, color: '#EF4765', marginTop:5, marginLeft: 5 }}>{errors.course}</Text>
                            }
                            {Platform.OS == 'android' &&
                                <View style={styles.picker}>
                                    <Picker
                                        selectedValue={values.yearLevel}
                                        onValueChange={handleChange('yearLevel')}
                                    >
                                        <Picker.Item label="1st Year" value="1st Year"/>
                                        <Picker.Item label="2nd Year" value="2nd Year"/>
                                        <Picker.Item label="3rd Year" value="3rd Year"/>
                                        <Picker.Item label="4th Year" value="4th Year"/>
                                    </Picker>
                                    {errors.yearLevel && touched.yearLevel &&
                                        <Text style={{ fontSize: 12, color: '#EF4765', marginTop:5, marginLeft: 5 }}>{errors.yearLevel}</Text>
                                    } 
                                </View>
                            }
                            { Platform.OS == 'ios'&& 
                                <View style={styles.textinput1}>
                                    <TouchableOpacity
                                        onPress={() => setPickerModal(true)}
                                    >
                                        <Text  >{values.yearLevel}</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={pickerModal}
                            >
                                
                                <View style={styles.modalParent}>
                                    <View style={styles.modalContainer}>
                                        <View style={{width: '100%'}}>
                                            {yearLevels.map(element => {
                                                    return <TouchableOpacity
                                                                style={styles.pickerItem}
                                                                key={element.value}
                                                                onPress={() => {
                                                                    values.yearLevel = element.value
                                                                    setPickerModal(false)
                                                                }}
                                                            >
                                                                <Text style={styles.text3}>{element.value}</Text>
                                                            </TouchableOpacity>
                                            })}
                                        </View>
                                        <View style={[styles.buttonstyle, {width: '100%', borderTopWidth: 1, borderColor: '#ACACAC'}]}>
                                                <TouchableOpacity
                                                    style={styles.button}
                                                    onPress={() => setPickerModal(false)}
                                                >
                                                    <Text style={styles.buttontext}>Go Back</Text>
                                                </TouchableOpacity>
                                            </View>
                                    </View>
                                </View>
                            </Modal>
                            
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.buttontext}> Continue</Text>
                            </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                )}
            </Formik>          
            
        )
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    pickerItem: {
        width: '100%',
        padding: 8,
        justifyContent: 'center',
        //alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ACACAC'
    },
    container : {
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingTop: 100
    },
    imageUpload : {
        height: '20%',
        width: '100%',
        backgroundColor: '#ACACAC',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textinput1:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '100%',
        marginTop: 15,
    },
    text: {
        marginTop: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 15
    },
    text2 : {
        color: '#5E5E5E',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        margin: 1
    },
    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 428/295,
        position: 'absolute',
        bottom: 0
        
    },
    half: {
        width: '100%',
        height: '80%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        bottom: 0
    },
    splash: {
        width: 70,
        height: undefined,
        aspectRatio: 1,
        marginTop: 0,
        marginBottom: 0
    },
    form: { 
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: '#EF4765',
        width: '100%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
    text3: {
        fontFamily: 'Poppins_400Regular',
        color: '#505062',
        fontSize: 12
        
    },
    formHeader: {
        alignItems: 'center',
        marginBottom: 15
    },

    picker:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding: 0,
        width: '100%',
        marginTop: 15,
        height: 48
    },
    modalParent: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    },
    modalContainer: {
        width: '80%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 20,
        backgroundColor: "#F2F2F2",
        borderRadius: 5,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})