import { Text, View, ScrollView } from "react-native";
import ImageDetail from "../components/ImageDetail";

function ImageScreen() {
  const images = [
    {
      title: "forest",
      image: require("../../assets/Forest.png"),
      score: 8,
      id: 1,
    },
    {
      title: "Desert",
      image: require("../../assets/Desert.png"),
      score: 7,
      id: 2,
    },
    {
      title: "Mountain",
      image: require("../../assets/Mountain.png"),
      score: 6,
      id: 3,
    },
  ];
  return (
    <ScrollView>
      <Text>Image Screen</Text>
      {images.map((item, index) => {
        return (
          <ImageDetail
            key={index}
            title={item.title}
            image={item.image}
            score={item.score}
          />
        );
      })}
      {/* <ImageDetail
        title="forest"
        image={require("../../assets/Forest.png")}
        score={8}
      />
      <ImageDetail
        title="mountain"
        image={require("../../assets/Mountain.png")}
        score={7}
      />
      <ImageDetail
        title="desert"
        image={require("../../assets/Desert.png")}
        score={6}
      /> */}
    </ScrollView>
  );
}

export default ImageScreen;
