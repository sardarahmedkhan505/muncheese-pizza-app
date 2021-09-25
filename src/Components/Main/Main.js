import React, { useState } from 'react';
import { Navbar } from '../NavBar/Navbar';
import Sidebar from '../SideBar/sidebar';

import { MainContainer,MainContent,MainItem,MainH1,MainP1,MainButton } from './MainElements';

export const Main = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <MainContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
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
