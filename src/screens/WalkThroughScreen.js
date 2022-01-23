import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
// import imagesList from "../images/ImagesList";
import Swiper from "react-native-swiper";

// images import
// import Fork from "../images/Fork.jpg";
// import CheckList from "../images/CheckList.jpg";
// import Menu from "../images/Menu.jpg";

const WalkThroughScreen = () => {
  const walkThroughList = [
    {
      id: 1,
      title: "Recepton op maat",
      discription:
        "Recepton in de app worder automatisch aangopast op jouw voedigsplan-lekkar& makekerlijk",
      image: (
        <Image
          source={require("../images/Fork.jpg")}
          style={styles.swipeImage}
        />
      ),
    },
    {
      id: 2,
      title: "Weekplanner",
      discription:
        "Recepton in de app worder automatisch aangopast op jouw voedigsplan-lekkar& makekerlijk",
      image: (
        <Image
          source={require("../images/CheckList.png")}
          style={styles.swipeImage}
        />
      ),
    },
    {
      id: 3,
      title: "Boodschappenlijstjes",
      discription:
        "Recepton in de app worder automatisch aangopast op jouw voedigsplan-lekkar& makekerlijk",
      image: (
        <Image
          source={require("../images/Menu.png")}
          style={styles.swipeImage}
        />
      ),
    },
  ];

  return (
    <Swiper>
      {walkThroughList.map((l) => {
        return (
          <View key={l}>
            <View style={styles.imageContainer}>{l.image}</View>
            <Text style={styles.titleText}>{l.title}</Text>
            <Text>{l.discription}</Text>
          </View>
        );
      })}
    </Swiper>
  );
};

export default WalkThroughScreen;

const styles = StyleSheet.create({
  inLoggen: {
    fontWeight: "bold",
    marginTop: 40,
    marginRight: 40,
    textAlign: "right",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  swipeImage: {
    height: "50%",
    width: "50%",
    resizeMode: "contain",
    borderRadius: 50,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth:1,
    borderColor:"green",
    height:50,
    width:50,
    
    borderRadius:100
  },
});
