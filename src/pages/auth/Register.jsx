import React from 'react'
import AuthContainer from '../../components/template/AuthContainer'
import coverImg from '../../assets/images/reg.png'
import ActionLink from '../../components/ui/ActionLink'
import Form from '../../components/template/Form'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'

const register = () => {
  return (
    <AuthContainer img={coverImg}>
        <h2 className='auth-title'>Ro'yxatdan o'tish</h2>
        <p className='auth-desc'>Sizning hisobingiz bormi? <ActionLink path={'/login'}>Kirish</ActionLink></p>
        <Form className={'auth-form-control'}>
          <Input placeholder='Ismingiz' />
          <Input placeholder='Familiyangiz' />
          <Input placeholder='Telefon raqam' />
          <Input placeholder='Email'/>
          <Input placeholder='Parol'/>
          <Button>Keyingi qadam</Button>
        </Form>
    </AuthContainer>
  )
}

export default register