import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress';

export default function Stats(props) {
    return (
        <View style={styles.statsContainer}>
            <Text style={styles.titleText}>
                Study Habits
            </Text>
            <Text style={styles.text}>
                Time Management
            </Text>
            <Progress.Bar progress={props.stats[0]/5} width={null} color='#EF4765'/>
            <Text style={styles.text}>
                Study Environment
            </Text>
            <Progress.Bar progress={props.stats[1]/5} width={null} color='#EF4765'/>
            <Text style={styles.text}>
                Exam Preparation
            </Text>
            <Progress.Bar progress={props.stats[2]/5} width={null} color='#EF4765'/>
            <Text style={styles.text}>
                Note Taking
            </Text>
            <Progress.Bar progress={props.stats[3]/5} width={null} color='#EF4765'/>
            <Text style={styles.text}>
                Reading Skills
            </Text>
            <Progress.Bar progress={props.stats[4]/5} width={null} color='#EF4765'/>
            <Text style={styles.text}>
                Writing Skills
            </Text>
            <Progress.Bar progress={props.stats[5]/5} width={null} color='#EF4765'/>
            <Text style={styles.text}>
                Math Skills
            </Text>
            <Progress.Bar progress={props.stats[6]/5} width={null} color='#EF4765'/>
        </View>
    )
}

const styles = StyleSheet.create({
    statsContainer : {
        width: '100%',
        padding: 30
    },
    titleText: {
        fontFamily: 'Poppins_400Regular',
        color: '#777777',
        fontSize: 12
        
    },
    text : {
        fontFamily: 'Poppins_600SemiBold',
        color: '#5E5E5E',
        fontSize: 12,
        marginBottom: 2,
        marginTop: 5
    }
})