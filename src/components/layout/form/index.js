import React from 'react'
import { HiOutlineStop } from 'react-icons/hi'
import { FormWrapper, TextInput } from './styles/form'

export const Form = () => {
  return (
    <>
      <FormWrapper>
        <TextInput type='text' />
        <button>
          <HiOutlineStop />
        </button>
      </FormWrapper>
    </>
  )
}
