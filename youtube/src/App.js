import {PageLayout,Box} from '@primer/react';

import { Navbar, Sidebar, MainContent } from "./Components";
import Footer from './Components/Footer';
function App() {
  return (
   
    <PageLayout>
    <PageLayout.Header sticky>
      <Navbar label="Header" height={64} />
    </PageLayout.Header>
    <PageLayout.Content>
      <MainContent label="Content" height={240} />
    </PageLayout.Content>
    <PageLayout.Pane position="start" hidden={{narrow: true}} sx={{width:'20vw'}}  sticky>
      <Sidebar  label="Pane" height={120} />
    </PageLayout.Pane>
    <PageLayout.Footer>
      <Footer label="Footer" height={64} />
    </PageLayout.Footer>
  </PageLayout>
   

  );
}

export default App;
