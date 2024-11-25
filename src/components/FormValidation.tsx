/** @format */

import { useState } from 'react';

type FormData = {
	name: string;
	email: string;
};

const FormValidation = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
	});
	const [errors, setErrors] = useState<Partial<FormData>>({});

	const validate = (): boolean => {
		const newErrors: Partial<FormData> = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is not valid';
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validate()) {
			console.log('Form submitted : ', formData);
		}
		console.log(errors);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-6'>
			<div>
				<label className='block text-gray-700 font-medium'>Name :</label>
				<input
					name='name'
					value={formData.name}
					onChange={handleChange}
					type='text'
					className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
				/>
                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
			</div>
			<div>
				<label className='block text-gray-700 font-medium'>Email :</label>
				<input
					name='email'
					value={formData.email}
					onChange={handleChange}
					type='text'
					className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
				/>
                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
			</div>

			<button
				className='w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
				type='submit'>
				Submit
			</button>
		</form>
	);
};

export default FormValidation;
