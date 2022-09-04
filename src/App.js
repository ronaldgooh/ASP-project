import './App.css';
import { Route, Routes } from 'react-router-dom';

/* imports for Desktop View */
import SignInPage from './components/WebView/CommonModules/AuthPage/SignInPage';
import SignInPage2 from './components/WebView/CommonModules/AuthPage/SignInPage2';
import SignUpPage from './components/WebView/CommonModules/AuthPage/SignUpPage';
import SignUpPage2 from './components/WebView/CommonModules/AuthPage/SignUpPage2';
import Maintenance from './components/WebView/CommonModules/DeadPage'

import Homepage from './components/WebView/Homepage(Default)';
import Consumer from './components/WebView/Homepage(Consumer)';
import Provider from './components/WebView/Homepage(Provider)';

import SearchProvider from './components/WebView/Homepage(Provider)/SearchPage(Provider)';
import SearchConsumer from './components/WebView/Homepage(Consumer)/SearchPage(Consumer)';

import ChatPageProvider from './components/WebView/Homepage(Provider)/ChatPage(Provider)';
import ChatPageConsumer from './components/WebView/Homepage(Consumer)/ChatPage(Consumer)';

import CreateListing from './components/WebView/Homepage(Consumer)/CreateListingPage';

/* imports for Mobile View */
import HomepageConsumerMobile from './components/AppView/Homepage(Consumer)/homepage-c';
import HomepageProviderMobile from "./components/AppView/Homepage(Provider)/homepage-s";
import HomepageProviderMobileAltEarnings from "./components/AppView/Homepage(Provider)/AltEarnings";
import HomepageMobile from './components/AppView/Homepage(Default)/Default';

import HomepageConsumerMobileOverlay from "./components/AppView/Homepage(Consumer)/HomepageListingOverlay";

import SignUpPageMobile from './components/AppView/AuthPage/SignUpPage';
import SignUpPageMobile2 from './components/AppView/AuthPage/SignUpPage2';

import SigninPageMobile from './components/AppView/AuthPage/SignInPage/login-c';
import SigninPageMobile2 from './components/AppView/AuthPage/SignInPage2/login-s';

import ChatPageProviderMobile from "./components/AppView/Homepage(Consumer)/ChatPage";
import ChatPageConsumerMobile from "./components/AppView/Homepage(Consumer)/ChatPage";

import BurgerTabConsumer from "./components/AppView/Homepage(Consumer)/BurgNav";
import BurgerTabProvider from "./components/AppView/Homepage(Provider)/BurgNav";

import SearchPageMobile from "./components/AppView/SearchPage/Default";
import SearchPageMobileListingsOpen from "./components/AppView/SearchPage/SearchListings";
import SearchPageMobileListingsBurgerOpen from "./components/AppView/SearchPage/SearchListings(Burger)";
import SearchPageMobileOverlay from "./components/AppView/SearchPage/BurgerOverlay";
import SearchPageMobileFilter from "./components/AppView/SearchPage/Filter";

function App() {
    
  return (
    <>
    {/* Routes for Desktop View */}
    <div className="view-width">
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/consumerHomepage" element={<Consumer />} />
        <Route path="/providerHomepage" element={<Provider />} />

        <Route path="/login/consumer" element={<SignInPage />} />
        <Route path="/login/provider" element={<SignInPage2 />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/provider" element={<SignUpPage2 />} />

        <Route path="/maintenance" element={<Maintenance />} />

        <Route path="/chatpageProvider" element={<ChatPageProvider />} />
        <Route path="/chatpageConsumer" element={<ChatPageConsumer />} />

        <Route path="/searchProvider" element={<SearchProvider />} />
        <Route path="/searchConsumer" element={<SearchConsumer />} />

        <Route path="/consumerHomepage/createListing" element={<CreateListing />} />        

      </Routes>
    </div>

    {/* Routes for Mobile View */}
    <div className="app-width">
      <Routes>
        <Route path="/" element={<HomepageMobile />} />
        <Route path ="/signup" element= {<SignUpPageMobile />}/>
        <Route path ="/signup/provider" element= {<SignUpPageMobile2 />}/>
        <Route path ="/login/consumer" element= {<SigninPageMobile />}/>
        <Route path ="/login/provider" element= {<SigninPageMobile2 />}/>
        <Route path ="/consumerHomepage" element= {<HomepageConsumerMobile/>}/>
        <Route path ="/consumerHomepage/overlay" element= {<HomepageConsumerMobileOverlay/>}/>
        <Route path ="/providerHomepage" element= {<HomepageProviderMobile/>}/>
        <Route path ="/chatpageProvider" element= {<ChatPageProviderMobile/>}/>
        <Route path ="/chatpageConsumer" element= {<ChatPageConsumerMobile/>}/>
        <Route path ="/consumerHomepage/burger" element= {<BurgerTabConsumer/>}/>
        <Route path ="/providerHomepage/alt" element= {<HomepageProviderMobileAltEarnings/>}/>
        <Route path ="/providerHomepage/burger" element= {<BurgerTabProvider/>}/>
        <Route path ="/search" element= {<SearchPageMobile/>}/>
        <Route path ="/search/listings" element= {<SearchPageMobileListingsOpen/>}/>
        <Route path ="/search/listings/burger" element= {<SearchPageMobileListingsBurgerOpen/>}/>
        <Route path ="/search/burger" element= {<SearchPageMobileOverlay/>}/>
        <Route path ="/search/listings/filter" element= {<SearchPageMobileFilter/>}/>

      </Routes>
    </div>
    </>
  );
}

export default App;



