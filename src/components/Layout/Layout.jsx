import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import FormCreateTask from '../Form/Form';
import ListTask from '../List/ListTask';

export default function Layout({ signOut }) {
    const [list, setList] = useState([])
    return (
        <>
            <header>
                <Header signOut={signOut}/>
            </header>

            <main className='main'>
                <section className='list-task'>
                    <ListTask list={list}/>
                </section>
                <section className='formCreateTask'>
                    <FormCreateTask setList={setList} />
                </section>
            </main>
            <footer>footer</footer>
        </>
    )
}
