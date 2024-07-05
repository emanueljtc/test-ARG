'use client';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Loading from './loading';
import { useUserContext } from '@/context/UserContext';
import { Button, Form } from '@/components';
import Swal from 'sweetalert2';
import styles from './page.module.css';
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useUserContext();
  if (!user) return <Loading />;

  const onSubmit = (data: FieldValues) => {
    reset();
    Swal.fire({
      title: 'Fine!',
      text: `${data.fullName}, thank you for your message!`,
      icon: 'success',
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fullName" className={styles.label}>
        Full Name
      </label>
      <input
        type="text"
        className={styles.input_field}
        {...register('fullName', { required: 'Full name is required' })}
      />
      {errors.fullName && (
        <p className={styles.error}>{errors.fullName.message?.toString()}</p>
      )}

      <label htmlFor="fullName" className={styles.label}>
        Email
      </label>
      <input
        type="text"
        className={styles.input_field}
        {...register('email', { required: 'Full name is required' })}
      />
      {errors.fullName && (
        <p className={styles.error}>{errors.fullName.message?.toString()}</p>
      )}

      <label htmlFor="message" className={styles.label}>
        Message
      </label>
      <textarea
        id="message"
        className={styles.input_field}
        rows={5}
        {...register('message', { required: 'Full name is required' })}
      ></textarea>
      {errors.message && (
        <p className={styles.error}>{errors.message.message?.toString()}</p>
      )}

      <Button>Submit</Button>
    </Form>
  );
}

