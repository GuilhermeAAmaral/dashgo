import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória")
})

export const SignIn = () => {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const errors = formState.errors

  const handleSignIn: SubmitHandler<SignFormData> = async (values) => {

    await new Promise (resolve => setTimeout(resolve, 2000))
    console.log (values)
  }

  return (

    <Flex
      w="100w"
      h="100vh"
      align="center"
      justify="center">

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir={'column'}
        onSubmit={handleSubmit(handleSignIn)}
        >

        <Stack spacing="4">

          <Input 
            name="email" 
            type="email" 
            label="Email" 
            error={errors.email}
            {...register('email', /*{required: "E-mail obrigatório"}*/)}
          />

          <Input
           name="password" 
           type="password" 
           label="Senha" 
           error={errors.password}
           {...register('password', /*{required: "Senha obrigatória"}*/)}
          />
          
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>

      </Flex>

    </Flex>
  )
}

export default SignIn
