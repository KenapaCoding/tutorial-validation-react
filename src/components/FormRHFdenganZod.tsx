import { useForm } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';


const formDataSchema = z.object({
    name: z.string(),
    email: z.string().email("Invalid email address")
})

type FormData = z.infer<typeof formDataSchema>

const FormRHFdenganZod = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver:zodResolver(formDataSchema)
    })
	
	const onSubmit = (data:FormData) => {
		console.log("Form Submitted : ", data)
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-6'>
			<div>
				<label className='block text-gray-700 font-medium'>Name :</label>
				<input
					{...register('name')}
					type='text'
					className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
				/>
                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
			</div>
			<div>
				<label className='block text-gray-700 font-medium'>Email :</label>
				<input
					{...register('email')}
					type='text'
					className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
				/>
                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
			</div>

			<button
				className='w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
				type='submit'>
				Submit
			</button>
		</form>
	);
};

export default FormRHFdenganZod;
