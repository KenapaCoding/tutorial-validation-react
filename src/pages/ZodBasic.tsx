import {z, ZodError} from 'zod'

const ZodBasic = () => {

	const userSchema = z.object({
		name: z.string(),
		age: z.number().min(18, 'Age must be 18 or older'),
		email: z.string().email('Invalid email format'),
		isMarried: z.boolean().optional()
	})

	type User = z.infer<typeof userSchema>

	const userData:User = {
		name: 'John Doe',
		age: 19,
		email:'johndoe@gmail.com'
	}


	console.log(userSchema.safeParse(userData))

	// try {
	// 	const validUser = userSchema.parse(userData)
	// 	console.log('Valid user : ', validUser)
	// } catch (e) {
	// 	if(e instanceof ZodError) {
	// 		console.error("Validation Error :", e.errors)
	// 	} else {
	// 		console.error("Unknown error : ", e)
	// 	}
	// }

	return (
		<div className='text-4xl flex w-full h-screen justify-center items-center font-bold'>
			Zod Basic
		</div>
	);
};

export default ZodBasic;
