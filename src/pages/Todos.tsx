/** @format */

import React, { useEffect } from 'react';
import { z, ZodError } from 'zod';

const apiResponseSchema = z.array(
	z.object({
		id: z.number(),
		title: z.string(),
		completed: z.boolean(),
		userId: z.number(),
	})
);
async function fetchTodo() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json()

    try {
        const validData = apiResponseSchema.parse(data)
        console.log("Valid data : ", validData)
    } catch (error) {
        if(error instanceof ZodError) {
            console.error(error.errors)
        } else {
            console.error("Unknown Error")
        }
    }
}

const Todos = () => {
    useEffect(() => {fetchTodo()}, [])

	return <div>Todos</div>;
};

export default Todos;
