import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify';

// Imports the Authenticator and withAuthenticator components from '@aws-amplify/ui-react'.
// Authenticator is a React component that provides a ready-to-use sign-in and sign-up UI.
// withAuthenticator is a higher-order component that wraps your app component to enforce authentication.
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

// Imports the default styles for the Amplify UI components. This line ensures that the authenticator looks nice out of the box.
import '@aws-amplify/ui-react/styles.css';

// Imports the awsExports configuration file generated by the Amplify CLI. This file contains the AWS service configurations (like Cognito, AppSync, etc.) specific to your project.
import awsExports from './aws-exports';

Amplify.configure(awsExports);


function App() {
  return (
    <div className="App">

<Authenticator>
        {({ signOut }) => (
          <main>
            <header className='App-header'>
            <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

              <button 
                onClick={signOut} 
                style={{ 
                  margin: '20px', 
                  fontSize: '0.8rem', 
                  padding: '5px 10px', 
                  marginTop: '20px'
                }}
              >
                Sign Out
              </button>
            </header>
          </main>
        )}
      </Authenticator>

    </div>
  );
}

export default App;
