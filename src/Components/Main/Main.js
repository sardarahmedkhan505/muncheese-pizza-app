import React from 'react'
import { Navbar } from '../NavBar/Navbar'
import { MainContainer,MainContent,MainItem,MainH1,MainP1,MainButton } from './MainElements'

export const Main = () => {
    return (
        <MainContainer>
            <Navbar/>
            <MainContent>
                <MainItem>
                    <MainH1>
                        Greatest Pizza Ever
                    </MainH1>
                    <MainP1>
                        Ready as early in the 5 Minutes
                    </MainP1>
                    <MainButton>Submit</MainButton>
                </MainItem>
            </MainContent>
        </MainContainer>
        
    )
}
