import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          statusBarColor: "#C11E55",
          headerShown: false,
          headerStyle: {backgroundColor: '#C11E55'}
        }}
      />
    </Stack>
  );
}
