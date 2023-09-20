import React from "react";
import { View, Button,Text } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { styles } from "./styles";
import {VideoDrinks} from "../../../assets/VídeoDrinks.mp4" 

export function VideoCastis() {
  const video = React.useRef(null);
  const [videoStatus, setVideoStatus] = React.useState({});

  return (
    <View style={styles.viewVideoCastis}>
      <View style={styles.container}>
        <View style={styles.videoStyles}>
        <Video 
          ref={video}
          style={styles.video}
          source={require("../../../assets/VídeoDrinks.mp4")
            
          }
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setVideoStatus(status)}
        />
        </View >
      </View>
    </View>
  );
}
