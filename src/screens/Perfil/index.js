import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../services/recoilAuth";
import { getRecoil } from "recoil-nexus";
import api from "../../services/api";
export default function Perfil({ navigation }) {
  const setUser = useSetRecoilState(userState);
  const currentUser = getRecoil(userState).user_id;
  const [usuario, setusuario] = useState([]);

  useEffect(() => {
    async function carregarusuario() {
      const { data } = await api.get(`usuarios/${currentUser}`);
      setusuario(data);
    }
    carregarusuario();
  }, []);

  const logout = async () => {
    setUser({ loggedIn: false, access_token: null, refresh_token: null });
    await SecureStore.deleteItemAsync("access_token");
  };
  return (
    <ScrollView style={styles.container}>
      <ScrollView>
        <Text style={{ marginLeft: 30, marginTop: 20, color: "white" }}>
          Usuário: {usuario.email}
        </Text>
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <MaterialCommunityIcons name="bell-outline" size={35} color="#333" />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Notificações</Text>
            <Text style={styles.description}>
              Minha central de notificações
            </Text>
          </ScrollView>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="credit-card" size={35} color="#333" />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Pagamentos</Text>
            <Text style={styles.description}>Meus saldos e cartões</Text>
          </ScrollView>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={35}
            color="#333"
          />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Cupons</Text>
            <Text style={styles.description}>Meus cupons de desconto</Text>
          </ScrollView>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <MaterialCommunityIcons name="heart-outline" size={35} color="#333" />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Favoritos</Text>
            <Text style={styles.description}>Meus locais favoritos</Text>
          </ScrollView>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <MaterialCommunityIcons name="credit-card" size={35} color="#333" />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Fidelidade</Text>
            <Text style={styles.description}>Minhas fidelidades</Text>
          </ScrollView>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <MaterialCommunityIcons name="map-marker" size={35} color="#333" />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Endereços</Text>
            <Text style={styles.description}>Meus endereços de entrega</Text>
          </ScrollView>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.menuAdicional}>
        <TouchableOpacity style={styles.opcoesAdicionais}>
          <View style={styles.wrapper}>
            <MaterialCommunityIcons name="lifebuoy" size={25} color="#CDC" />
            <Text style={styles.optionName}>Ajuda</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoesAdicionais}>
          <View style={styles.wrapper}>
            <MaterialIcons name="settings" size={25} color="#CDC" />
            <Text style={styles.optionName}>Configurações</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoesAdicionais}>
          <View style={styles.wrapper}>
            <MaterialIcons name="security" size={25} color="#CDC" />
            <Text style={styles.optionName}>Segurança</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoesAdicionais}>
          <View style={styles.wrapper}>
            <MaterialIcons name="store-mall-directory" size={25} color="#CDC" />
            <Text style={styles.optionName}>Sugerir Restaurantes</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logout} onPress={() => logout()}>
          <View style={styles.wrapper}>
            <MaterialCommunityIcons name="logout" size={25} color="#CDC" />
            <Text style={styles.logoutName}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171c22",
    paddingTop: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 1,
  },
  info: {
    marginLeft: 20,
  },
  title: {
    color: "#333",
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
  menuAdicional: {
    marginTop: 30,
  },

  opcoesAdicionais: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 1,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionName: {
    marginLeft: 25,
    color: "#ccc",
    fontSize: 15,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 1,
    backgroundColor: "#e74c3c",
  },
  logoutName: {
    marginLeft: 10,
    color: "#ccc",
    fontSize: 15,
  },
});
