import {
  WrapperHeader,
  WrapperPrincipal,
  Navigation,
  ContainerLogin,
  ParagraphInformation,
  Button,
  WelcomeMessage,
  Nav,
  ImageLogo,
} from "./style";
import marvellogo from "../../images/marvellogo.png";
import {firebase, auth} from '../../services/firebase'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function EnginePrincipal() {

    const {userData, handleLoginWithGoogle, persistUser} = useContext(AuthContext)

    useEffect(() => {
      persistUser()
    }, [])

   

  return (
    <WrapperPrincipal>
      <header>
        <WrapperHeader>
          <ImageLogo src={marvellogo} alt='MarvelLogo'/>
          <Navigation>
            {userData.isAuthenticate ? <WelcomeMessage>Bem vindo, <strong>{userData.name}</strong></WelcomeMessage> : <Button onClick={handleLoginWithGoogle} width={150} height={40}>login</Button>}
          </Navigation>
        </WrapperHeader>
      </header>

      <section>
        <main>
          <ContainerLogin>
            <ParagraphInformation>
              Veja aqui o calendário de filmes da marvel
            </ParagraphInformation>

            {userData.isAuthenticate ? 
            
            (
              <Nav>
                <NavLink to="/calendar">Ir para o calendário</NavLink>
              </Nav>
            ): <Button onClick={handleLoginWithGoogle}>Login</Button>   }        
          </ContainerLogin>
         
        </main>
      </section>
    </WrapperPrincipal>
    
  );
}
