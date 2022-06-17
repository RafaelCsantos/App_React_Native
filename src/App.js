import React from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking,
}   from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorFontDarkGithub = '#4F565E';
const imageProfileGithub  = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png';
const UrlToMyGithub = "https://www.google.com";


const App = ()=> {
    
    const handlePressGoToGitHub = async ()=> {
const res = await Linking.canOpenURL(UrlToMyGithub);
console.log("verificando link");
if (res) {
    await Linking.openURL(UrlToMyGithub);
    console.log("link aprovado");
}
    };

    return (
        <SafeAreaView style= {style.container}>
         <StatusBar backgroundColor={colorGithub} barStyle='light-content'/> 
    <View style={style.content}>
      
      <Image acessibilityLabel = "foto de perfil" style= {style.avatar} source={{uri:imageProfileGithub }} 
      />
      <Text acessibilityLabel= 'Nome Rafael Santos' style={[style.defaultText, style.name]}> Rafael Santos </Text>
      <Text acessibilityLabel= 'link da rede social link'style={[style.defaultText, style.nickname]}>usuario da rede social </Text>
      <Text acessibilityLabel= 'descrição da pessoa' style={[style.defaultText, style.description]}>descrição </Text>
  
    <Pressable onPress={handlePressGoToGitHub}>
    <View style={style.button}>
        <Text style={[style.defaultText, style.description]}>
            Open in Github
        </Text>

    </View>
</Pressable>

    </View>
            </SafeAreaView>
    );
};
export default App;

const style= StyleSheet.create({
    container:{

        backgroundColor: colorGithub,
        flex:1, //expandir para a tela inteira  
        justifyContent:'center',
    },
    content: {
        alignItems:'center',
        padding: 20,
        //flexDirection = 'row',
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth:2,
    },
defaultText:{
    color: colorFontGithub,
},

name: {
    fontSize: 24,
    fontWeight: 'bold'
},

nickname: {
    fontSize: 18,
    color: colorFontDarkGithub,
},

description: {
    fontSize: 14,
    fontWeight:'bold'
},

button: {
    backgroundColor: colorFontDarkGithub,
    borderRadius:10,
    padding:20,
    marginTop:20,
},


});

