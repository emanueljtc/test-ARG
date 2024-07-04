'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from './loading';
import { useUserContext } from '@/context/UserContext';
import { Button, Form, InputField } from '@/components';

export default function ContactPage() {
  const { register, handleSubmit, control } = useForm();
  const { user } = useUserContext();

  if (!user) return <Loading />;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Full Name"
        type="text"
        control={control}
        {...register('fullName', { required: 'Full name is required' })}
      />

      <InputField
        label="Email"
        type="email"
        control={control}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: 'email is not valid',
          },
        })}
      />

      <InputField
        label="Message"
        type="textarea"
        control={control}
        {...register('message', { required: 'Message is required' })}
      />

      <Button>Submit</Button>
    </Form>
  );
}

