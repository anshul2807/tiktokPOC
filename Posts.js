import React from 'react';
import Video from 'react-native-video';
import { StyleSheet,Text,View} from 'react-native';
import styles from './Component/styles'
const Posts = (props) => 
{
    return (
       
            <View  style={styles.container}>
                {/* <Text>Posts = {props.name}</Text> */}
               <View>
               <Video
                    source={{uri: props.url }}
                    style={styles.video}
                    onError={(e) => console.log(e)}
                    resizeMode={'cover'}
                    repeat={true}
                    />
                {console.log(props.url)}
                     {/* <Text>Hello</Text> */}
               </View>
                   
                </View>
        
    );
}


export default Posts;