import React, {useState, useContext} from 'react';
import {AuthContext} from '../../route/auth-provider';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import Button from '../../components/core/button/index';

const {width, height} = Dimensions.get('window');
const editable = false;

const Login = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async () => {
    try {
      const data = await login(email, password);
      navigation.navigate('Home', {user: data});
    } catch (error) {
      console.log(error);
    }
  };
  const goToRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1604772659841-a1612db7000f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=420&q=80',
          }}
          style={{width: width, height: (width * 120) / 100}}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.border} />
        <View style={styles.welcome}>
          <Text style={styles.title}>Login</Text>
          <ScrollView style={{flex: 1}}>
            <View
              pointerEvents={editable ? 'none' : 'auto'}
              style={editable ? styles.opacity : styles.input}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                // value=""
                onChangeText={value => {
                  setEmail(value);
                }}
                onBlur={() => {}}
                keyboardType="email-address"
                editable={!editable}
                onFocuss={() => {}}
                style={styles.textInput}
                maxLength={70}
                placeholder="Email"
                placeholderTextColor="#cccccc"
              />
            </View>
            <View
              pointerEvents={editable ? 'none' : 'auto'}
              style={editable ? styles.opacity : styles.input}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                // value=""
                onChangeText={value => {
                  setPassword(value);
                }}
                onBlur={() => {}}
                editable={!editable}
                onFocuss={() => {}}
                style={styles.textInput}
                maxLength={70}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#cccccc"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                label="Register"
                onPress={() => goToRegister()}
                maxWidth={width / 3}
              />
              <Button
                variant="primary"
                label="Login"
                onPress={() => submitLogin()}
                maxWidth={width / 3}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  imageContainer: {
    flex: 1,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  formContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
  },
  welcome: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  border: {
    backgroundColor: '#2CB9B0',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 18,
    color: '#212121',
    textAlign: 'center',
    marginVertical: 15,
  },
  textInput: {
    marginVertical: 10,
    paddingBottom: 5,
    color: '#212121',
  },
  label: {
    color: '#212121',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    opacity: 1,
  },
  opacity: {
    opacity: 0.5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Login;
