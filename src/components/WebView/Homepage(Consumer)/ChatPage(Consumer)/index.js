import Footer from '../../../Footer';
import ChatContent from '../../Homepage(Provider)/ChatPage(Provider)/ChatContent';
import NavBar from '../NavBar(consumer)';
import './index.css';




const ChatPageConsumer = () => {
    return(
        <>
            <NavBar />
            <ChatContent />
            <Footer />
        </>
    )
}




export default ChatPageConsumer;
