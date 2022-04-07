import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image, ImageBackground, Modal } from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CardBG from '../../assets/images/card-bg1.png'
import CardBGWh from '../../assets/images/card-bg2.png'
import LogoImg from '../../assets/images/wl-logo2.png'
import RadioButton from '../../components/RadioButton';
import { questions } from '../../assets/questions/questions';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'
import { useDispatch, useSelector } from 'react-redux';
import { changeHabits, signUp } from '../../actions/signUpActions';
import authService from '../../services/auth.service';
import imageService from '../../services/image.service';
import userService from '../../services/user.service';

export default function SignUpSurvey({navigation}) {

    const [value, setValue] = useState(1)
    const [timeManagement, setTimeManagement] = useState(0)
    const [studyEnvironment, setStudyEnvironment] = useState(0)
    const [examPreparation, setExamPreparation] = useState(0)
    const [noteTaking, setNoteTaking] = useState(0)
    const [readingSkills, setReadingSkills] = useState(0)
    const [writingSkills, setWritingSkills] = useState(0)
    const [mathSkills, setMathSkills] = useState(0)
    const [radioValue, setRadioValue] = useState(0)
    const [stats, setStats] = useState([])
    const [finished, setFinished] = useState(false)
    const firstName = useSelector(state => state.signUp.firstName)
    const lastName = useSelector(state => state.signUp.lastName)
    const birthDate = useSelector(state => state.signUp.birthDate)
    const gender = useSelector(state => state.signUp.gender)
    const email = useSelector(state => state.signUp.email)
    const password = useSelector(state => state.signUp.password)
    const contactNumber = useSelector(state => state.signUp.contactNumber)
    const university = useSelector(state => state.signUp.university)
    const course = useSelector(state => state.signUp.course)
    const yearLevel = useSelector(state => state.signUp.yearLevel)
    const interest = useSelector(state => state.signUp.interest)
    const src = useSelector(state => state.signUp.src)

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const data = [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 }
    ];

    const dispatch = useDispatch()
    const [dupModal, setDupModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const onSelect = (childData) =>{
        setRadioValue(childData)
    }

    useEffect(() => {
        if (finished == true) {
            handleSubmit()
        }
    }, [finished])

    const [question, setQuestion] = useState(0)

    const next = () =>{
        console.log(radioValue)
        if(radioValue != 0 ) {
            nextQuestion()
        } else {
            setOpenModal(true)
        }
    }

    const nextQuestion = () => {
        if(radioValue) {
            let newStat = stats
            newStat.push(radioValue)
            setStats(stats)
        }
        if (question == 7 || question == 15 || question == 23 || question == 29 || question == 35 || question == 41 || question == 47) {
            const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
            const avg = average(stats).toFixed(1)
            if (question == 7) {
                setTimeManagement(avg)          
            } else if (question == 15) {
                setStudyEnvironment(avg)          
            } else if (question == 23) {
                setExamPreparation(avg)              
            } else if (question == 29) {
                setNoteTaking(avg)              
            } else if (question == 35) {
                setReadingSkills(avg)      
            } else if (question == 41) {
                setWritingSkills(avg)
            } else if (question == 47) {
                setMathSkills(avg)
                setFinished(true)
            }
            setStats([])
        }
        if (question != 47) {
            setQuestion(question + 1)
        }
    }

    const handleSubmit = () => {
        console.log("Time Management " + timeManagement)
        console.log("Study Environment " + studyEnvironment)
        console.log("Exam Preparation " + examPreparation)
        console.log("Note Taking " + noteTaking)
        console.log("Reading Skills " + readingSkills)
        console.log("Writing Skills " + writingSkills)
        console.log("Math Skills " + mathSkills)
        const values = {
            q1: timeManagement,
            q2: studyEnvironment,
            q3: examPreparation,
            q4: noteTaking,
            q5: readingSkills,
            q6: writingSkills,
            q7: mathSkills
        }
        dispatch(changeHabits(values))
        signUp()
        
    }

    const signUp = () => {
        authService.signUp(
            firstName,
            lastName,
            birthDate,
            gender,
            email,
            password,
            contactNumber,
            university,
            course,
            yearLevel,
            interest,
            timeManagement,
            studyEnvironment,
            examPreparation,
            noteTaking,
            readingSkills,
            writingSkills,
            mathSkills
        ).then(response => {
            console.log(response)
            if(response.status == 200) {
                const uuid_user = response.data.uuid_user
                console.log(src)
                if (src != null) {
                    const image = {
                        uri: src,
                        name: uuid_user + '.jpg',
                        type: 'image/jpg',
                    }
                    imageService.uploadImage(image, uuid_user)
                    userService.uploadImage(uuid_user, image.name)
                }
                navigation.navigate('LoginHome')
            } else  {
                setDupModal(true)
            }
           
        }).catch(error => {
            console.log(error)
            setDupModal(true)
        })
        
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={openModal}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.text4}>Please answer the survey.</Text>
                        <TouchableOpacity style={styles.button2} onPress={() => setOpenModal(false)}>
                            <Text style={styles.buttontext}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={dupModal}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.text4}>Failed! Email or Mobile Number already exists!</Text>
                        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('LoginHome')}>
                            <Text style={styles.buttontext}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Image
                    style={styles.splash}
                    source={LogoImg}
                    resizeMode="contain" 
                />
                <Text style={styles.logoText}>
                        WeLearn
                </Text>
                <View>
                    <ImageBackground
                        source={CardBG}
                        style={styles.background}
                        resizeMode="contain" 
                    >
                            <Text style={styles.text}>
                                Rate Yourself
                            </Text>
                            <Text style={styles.questText}>
                                {questions[question]}
                            </Text>
                            
                    </ImageBackground>
                    <View style={styles.half}>
                        <ImageBackground
                            source={CardBGWh}
                            style={styles.background2}
                            resizeMode="contain" 
                        >
                            <View style={{marginTop: 10, marginBottom: 20}}>                     
                                <Text style={styles.insText}>
                                    Please rate the following statements from
                                </Text>
                                <Text style={styles.insText}>
                                    1 (Strongly Disagree) to 5 (Strongly Agree)
                                </Text>
                            </View>
                            <View style={{width:'80%'}}>
                                <RadioButton data={data} onSelect={onSelect}/>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.btnContainer}>
                            <TouchableOpacity
                                    style={styles.button}
                                    onPress={next}
                            >
                                <Text style={styles.buttontext}>Continue</Text>
                            </TouchableOpacity>
                    </View>            
                </View>
                
                
            </View>
        )
    }
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    btnContainer: {
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    half: {
        width: '100%',
        height: '45%',
        position: 'absolute',
        zIndex: 0,
        elevation: 0,
        bottom: 0
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
        color: 'white',
        fontSize: 35,
        marginHorizontal: 20
    },
    logoText : {
        color: '#5E5E5E',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        margin: 1,
        marginBottom: 20
    },
    questText: {
        marginTop: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: '10%'
    },
    background: {
        width: '100%',
        height: undefined,
        aspectRatio: 1712/1516
        
    },
    background2: {
        width: '100%',
        height: undefined,
        aspectRatio: 1712/1344,
        alignItems: 'center',
        position: 'absolute',
        elevation: 0,
        top: 0
        
    },
    splash: {
        width: 70,
        height: undefined,
        aspectRatio: 1,
        marginTop: 0,
        marginBottom: 0,
    },
    form: { 
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: '#EF4765',
        width: '80%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 38,
        zIndex:5
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: 0.3
    },
    insText: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#757575',
        fontSize: 12,
        
    },
    formHeader: {
        alignItems: 'center',
        marginBottom: 15
    },

    modalContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: '70%',
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

    text4: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 16,
        alignItems: 'center',
        
    },

    button2: {
        backgroundColor: '#EF4765',
        width: '40%',
        height: 45,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: {width:2, height:2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 40
    },

})