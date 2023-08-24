import InputField from '@/components/fields/InputField'
import styles from './index.module.scss'
import { Form, FormikProvider, useFormik } from 'formik'
import Validator from '@/utils/validator'
import Button from '@/components/ui/Button'
import { SnackbarType } from '@/types/enums'
import { useState } from 'react'
import { RequestError } from '@/types/types'
import { useAppContext } from '@/context/state'
import classNames from 'classnames'

interface IFormData {
  email: string,
  password: string,
}

interface Props {
  className?: string
}

export default function AuthForm(props: Props) {
  const appContext = useAppContext()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (data: IFormData) => {
    setLoading(true)

    try {
      const res = null
      if (res) {

      } else {
        appContext.showSnackbar('Token error', SnackbarType.error)
      }
    } catch (err) {

      if (err instanceof RequestError) {
        appContext.showSnackbar(err.message, SnackbarType.error)
      }

    }
    setLoading(false)
  }

  const initialValues: IFormData = {
    email: '',
    password: '',
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit
  })




  return (
    <FormikProvider value={formik}>
      <Form className={classNames(styles.form, props.className)}>
        <InputField
          name='email'
          label='Email'
          validate={Validator.combine([Validator.required])} />
        <InputField
          obscure={true}
          type='password'
          name='password'
          label='Пароль'
          validate={Validator.combine([Validator.required])} />

        <Button spinner={loading} type='submit' className={styles.btn} styleType='large' color='blue'>
          Войти
        </Button>
      </Form>
    </FormikProvider>
  )
}
