import {PageLayout,Box} from '@primer/react';

import { Navbar, Sidebar, MainContent } from "./Components";
import VideoList from './Components/VideoList';
import Footer from './Components/Footer';
function App() {
  return (
   
    <PageLayout sx={{ padding: 0, margin: 0 }} >
    <PageLayout.Header sx={{position:'sticky',top:0}}  sticky>
      <Navbar label="Header" height={64} />
    </PageLayout.Header>
    <PageLayout.Content>
      
      < VideoList
 label="Content" height={240} />
    </PageLayout.Content>
    <PageLayout.Pane position="start" hidden={{ narrow: true }} style={{ position: 'sticky', top: 50 }} sticky width={15}>
  <Sidebar label="pane" height={180} />
</PageLayout.Pane>

    <PageLayout.Footer>
      <Footer label="Footer" height={64} />
    </PageLayout.Footer>
  </PageLayout>
   

  );
}

export default App;
