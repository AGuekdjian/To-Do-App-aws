import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '../../graphql/mutations'
import { listTodos } from '../../graphql/queries'


import { Form, FormGroup, Input, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Form.css'

export default function FormCreateTask({ setList }) {
    const [task, setTask] = useState({
        name: "",
        description: ""
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(task)
        const res = await API.graphql(graphqlOperation(createTodo, { input: task }))
        console.log(res)
    }

    const loadTask = async () => {
        const res = await API.graphql(graphqlOperation(listTodos))
        setList(res.data.listTodos.items)
    }

    useEffect(() => {
        loadTask()
    }, [])

    return (
        <>
            <Form onSubmit={handleSubmit} className='form'>
                <FormGroup>
                    <Input
                        name='name'
                        placeholder='Title'
                        onChange={(e) => setTask({ ...task, name: e.target.value })}
                    />
                </FormGroup>
                {' '}
                <FormGroup row>
                    <Input
                        name="description"
                        placeholder='description'
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                        type="textarea"
                    />
                </FormGroup>
                {' '}
                <Button>
                    Submit
                </Button>
            </Form>
        </>
    )
}
