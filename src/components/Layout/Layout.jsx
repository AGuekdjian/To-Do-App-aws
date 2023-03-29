import React, { useState } from 'react'
import Header from '../Header/Header';
import FormCreateTask from '../Form/Form';

export default function Layout({ signOut }) {
    const [list, setList] = useState([])

    console.log(list)
    return (
        <>
            <header>
                <Header signOut={signOut}/>
            </header>

            <main className='main'>
                <section>
                    <FormCreateTask setList={setList}/>
                </section>
            </main>
            <footer>footer</footer>
        </>
    )
}
