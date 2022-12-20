import './App.css';
import mail from './mail.svg'
import phone from './phone.svg'


function App() {
  return (
    <div className="App">
      <header className = 'Header_app'>
          <div className='Mail_header'>
              <div className='icon_mail_header'>
                  <img src={mail} alt='foto_logo_mail'/>
              </div>
              <div className='text_mail_header'>mein@miner.com</div>
          </div>
          <div className='Phone_header'>
              <div className='icon_phone_header'>
                  <img src={phone} alt='foto_phone_mail'/>
              </div>
              <div className='text_phone_header'>+7 (999) 999-99-99</div>
          </div>
      </header>
    </div>
  );
}

export default App;
