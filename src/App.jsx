import React from 'react'
import { Authenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Layout from './components/Layout/Layout';


export default function App() {
  return (
    <Authenticator socialProviders={['google']}>
      {({ signOut, user }) => (
        <>
          {/* <button onClick={signOut}>Sign out</button> */}
          <Layout signOut={signOut} />
        </>
      )}
    </Authenticator>
  );
}
