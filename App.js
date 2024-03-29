import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { RecoilRoot } from "recoil";
import Routes from "./src/routes";
import RecoilNexus from "recoil-nexus";

export default function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <Fragment>
        <StatusBar style="auto" />
        <Routes />
      </Fragment>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171c22",
    alignItems: "center",
    justifyContent: "center",
  },
});
