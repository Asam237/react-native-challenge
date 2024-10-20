import { Button, Pressable, StyleSheet, Text, View } from "react-native";

type CButtonProps = {
  title: string;
  height: number;
  href?: any;
};

const CButton = ({ title, height, href }: CButtonProps) => {
  return (
    <View
      style={{
        height,
        borderRadius: 100,
        backgroundColor: "orange",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text style={{ textAlign: "center", color: "white", fontWeight: "800" }}>
        {title}
      </Text>
    </View>
  );
};

export default CButton;
