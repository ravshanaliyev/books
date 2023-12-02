import React from 'react'
import AuthContainer from '../../components/template/AuthContainer'
import login from '../../assets/images/login.png'
import ActionLink from '../../components/ui/ActionLink'
import Form from '../../components/template/Form'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
const Login = () => {
  return (
    <>
      <AuthContainer img={login}>
        <h2 className='auth-title'>Kirish</h2>
        <p className='auth-desc'>Sizning hisobingiz yo'qmi? <ActionLink path={'/register'}>Ro’yxatdan o’tish</ActionLink></p>
        <Form className={'auth-form-control'}>
          <Input placeholder='Email' />
          <Input placeholder='Parol' />
          <Button>Keyingi qadam</Button>
        </Form>
      </AuthContainer>
    </>
  )
}

export default Login