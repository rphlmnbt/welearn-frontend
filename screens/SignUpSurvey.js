import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CardBG from '../assets/images/card-bg1.png'
import CardBGWh from '../assets/images/card-bg2.png'
import LogoImg from '../assets/images/wl-logo2.png'
import RadioButton from '../components/RadioButton';
import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins'

export default function SignUpSurvey({navigation}) {

    const [value, setValue] = useState(1)
   
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

    const questions = {
        "timeManagement" : [
            "For each semester do you make a master schedule?",
            "Do you update this schedule weekly/ or daily?",
            "Do you keep to this schedule?",
            "Do you set aside some time for exercise and connecting with your friends?",
            "Do you sleep for six hours at least each night?",
            "Do you allot time to study for every hour in class at least 2 hours?",
            "Do you make your assignments and finish it on time?",
            "Do you attend your classes regularly?"
        ],
        "studyEnvironment" : [
            "Do you study at the same time regularly?",
            "Do you have a special area where you always go to study?",
            "Is your study area away from noise and any distractions?",
            "When you study, do you have all your supplies near you?",
            "Is your study area comfortable?",
            "Can you study without getting up, waist time or taking snack or watching TV or take phone breaks for at least a half hour? ",
            "When your friends know you want to study, do they leave you alone?",
            "Do you use the time between classes to study?"
        ],
        "examPreparation" : [
            "For each class, do you study every day?",
            "For major exams, do you start reviewing or examining materials at least 3 days in advance?",
            "For study, do you belong to a study students' group?",
            "If there is an extra help lessons or provided by the instructor, do you attend it?",
            "At exam time, do you know in advanced the sort of tests you will take, i.e., essay test, multiple choice test, and be familiar with how to prepare for different types of tests?",
            "Are you able to anticipate the types of questions that will come on test?",
            "Can you take your test at the allotted period of time?",
            "Do you examine the test with the teacher and analyze it to see  where  you  had  problems  if  you  do  not  do  well  on  a test?"
        ],
        "noteTaking" : [
            "In class, are you able to understand the concepts, take notes and follow up with the instructor at the same time?",
            "Do you have an effective system of rules concerning note taking?",
            "After each class, do you review your notes in a preferred way?",
            "Do you know what are theimportant cues that you have to write them down?",
            "When you read class materials do you make notes, in addition to highlighting?",
            "Can you write class notes or notes from texts by your own words?"
        ],
        "readingSkills" : [
            "For history-type material, can you read and learn at 12-15 pages per hour rate?",
            "Do youhave the material read before the lectureand maintain the readings for all your classes?",
            "The material you read, can you understand it without re-reading it for a secondor third time?",
            "Do you read the chapter headings and outlines first when reading a text?",
            "Reading for literature, social science, or science classes, for those do you adjusts your reading styles?",
            "When you are most awake during the time of day, do you do your study-reading?"
        ],
        "writingSkills" : [
            "Do you control and are comfortable with the rules of English grammar, punctuation, and spelling?",
            "For writing an assignment, do you have a clear idea of what the instructor wants from you?",
            "When you want to write a paper, do you first make an outline of it?",
            "Do you know how to use the library or Internet as a source for you and search your topic if you are assigned a research paper?",
            "Do you start and complete your research in time if you are asked to without delaying it?",
            "In writing, are you able to communicate effectively through it?"
        ],
        "mathSkills" : [
            "When you enroll in math class, do you have a good control of the requirement skills forit?",
            "Do you finish your homework assignments always and work the problems and solve it before looking at the solutions?",
            "When you don‟t understand a concept in class, do you participate and ask questions?",
            "Do you miss two math classes at most per a semester?",
            "Can you explain the solution of all the problems on a math test to another student who didn‟t know how to solve it?",
            "Do you have enough time to review for calculation errors and 'stupid' mistakes after taking your tests, like misplaced + or –signs?"
        ]
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.splash}
                    source={LogoImg}
                    resizeMode="contain" 
                />
                <Text style={styles.logoText}>
                        WeLearn
                </Text>
                <ImageBackground
                    source={CardBG}
                    style={styles.background}
                    resizeMode="contain" 
                >
                        <Text style={styles.text}>
                            Rate Yourself
                        </Text>
                        <Text style={styles.questText}>
                            Question Here
                        </Text>
                        <ImageBackground
                            source={CardBGWh}
                            style={styles.background2}
                            resizeMode="cover" 
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
                                <RadioButton data={data} />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.navigate('LoginHome')}
                            >
                                <Text style={styles.buttontext}> Continue</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                </ImageBackground>
                
                
            </View>
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
        alignItems: 'center'
        
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
        marginTop: 38
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

})