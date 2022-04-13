import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Background from '../../assets/images/login-mobile-bg.svg'
import LogoImg from '../../assets/images/wl-logo2.png'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import RadioButton from '../../components/RadioButton';
import { changeBirth } from '../../actions/signUpActions';
import Moment from 'moment';
import schema from '../../schemas/signUpBirth.schema';
export default function SignUpBirth({navigation}) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [display, setDisplay] = useState('default')
    const [mode, setMode] = useState('date');
    const [gender, setGender] = useState()
    const [visible, setVisible] = useState(true)
    const dispatch = useDispatch()

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    useEffect(() => {
        if(Platform.OS === 'ios'){
            setDisplay('spinner')
        } 
    }, [])


    const data = [
        { value: 'Male' },
        { value: 'Female' }
    ];

    const showMode = (currentMode) => {
        setShow(!show);
        setVisible(!visible)
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const handleSubmit = (values) => {
        const newValues = {
            gender: values.gender,
            birthDate: date.toLocaleDateString()
        }
        console.log(newValues)
        dispatch(changeBirth(newValues))
        navigation.navigate('SignUpEmail')
        
    }
    const firstName = useSelector(state => state.firstName)

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Formik
                initialValues={{
                    birthDate: date,
                    gender:''}}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ handleChange, handleBlur, handleSubmit,values, errors, setFieldValue, touched }) => (
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
                        <View style={styles.form}>
                            <View style={styles.formHeader}>
                                <Text style={styles.text}>
                                    Create a WeLearn Account
                                </Text>
                                <Text style={styles.text3}>
                                    Please provide the following information.
                                </Text>
                            </View>
                            <Text style={styles.text4}>
                                Date of Birth
                            </Text>
                            <TouchableOpacity
                                style={styles.datePicker}
                                onPress={showDatepicker}
                            >
                                <Text style={styles.pickerText}>{date.toLocaleDateString()}</Text>
                            </TouchableOpacity>
                            {show && Platform.OS == 'ios' && (
                               <View>
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        display={display}
                                        onChange={onChange}
                                        style={{backgroundColor: 'white'}}
                                    />
                                    <TouchableOpacity
                                            style={styles.button}
                                            onPress={showDatepicker}
                                        >
                                            <Text style={styles.buttontext}> Choose</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            {show && Platform.OS == 'android' && (
                               <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    display={display}
                                    onChange={onChange}
                                    style={{backgroundColor: 'white'}}
                                />
                            )}
                            { ((visible && Platform.OS === 'ios') || Platform.OS ==='android') &&
                                <View>
                                    <RadioButton data={data} onSelect={(childData) =>{
                                        setGender(childData)
                                        setFieldValue('gender', childData)
                                    }}/>
                                    {errors.gender && touched.gender &&
                                        <Text style={{ fontSize: 11, color: '#EF4765', marginTop:5, marginLeft: 5 }}>{errors.gender}</Text>
                                    }
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={styles.buttontext}> Continue</Text>
                                    </TouchableOpacity>
                                </View>
                            }
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
    container : {
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingTop: 100
    },
    textinput1:{
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        padding:8,
        width: '100%',
        marginTop: 15,
    },
    datePicker: {
        borderWidth: 1,
        borderColor: '#ACACAC',
        borderRadius: 5,
        width: '100%',
        height: 45,
        marginTop: 8,
        justifyContent: 'center',
        padding:8,
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

    text4: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#505062',
        fontSize: 16
        
    },
    formHeader: {
        alignItems: 'center',
        marginBottom: 15
    },
    picker: {
        borderWidth: 2,
        borderColor: '#ACACAC',
        fontFamily: 'Poppins_600SemiBold',
    },
    pickerText: {
        color: '#ACACAC',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
})