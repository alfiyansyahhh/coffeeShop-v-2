import React, { useState } from 'react'
import Auth from 'src/layouts/Auth'
import { Formik } from 'formik'
import * as Yup from 'yup'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const schema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
  })

  return (
    <Auth>
      <div>
        <Formik
          initialValues={user}
          onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 500))
            alert(JSON.stringify(values, null, 2))
          }}
          validationSchema={schema}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props
            return (
              <form onSubmit={handleSubmit}>
                <div>Email</div>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )
          }}
        </Formik>
      </div>
    </Auth>
  )
}

export default Login
