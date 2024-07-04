'use client';
import { useUserContext } from '@/context/UserContext';
import styles from './page.module.css';
import Image from 'next/image';
import { RowInformation, Title } from '@/components';
import Link from 'next/link';
import Loading from './loading';
export default function AboutPage() {
  const { user } = useUserContext();

  if (!user) return <Loading />;

  const {
    name,
    avatarBigger,
    city,
    state,
    country,
    age,
    proffession,
    description,
    interests,
  } = user;

  return (
    <div className={`${styles.about_me} animate__animated animate__fadeIn`}>
      <div className={styles.about_me_description}>
        <Title variant="lg" color="gray">
          Hello I&apos;m
        </Title>
        <Title variant="xl" color="black" fontWeight="600">
          {name}
        </Title>

        <section className={styles.description_information}>
          <RowInformation
            label="I live in:"
            value={`${city}, ${state}, ${country}`}
          />
          <RowInformation label="I am:" value={`${age} years old`} />
          <RowInformation label="Proffession:" value={`I'm ${proffession}`} />
          <p className={styles.description_information_info_extra}>
            {name} {description}
          </p>
          <Title variant="md" color="gray">
            My Interests are...
          </Title>
          <ul className={styles.about_me_description_interests}>
            {interests?.map((interest: string) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </section>
        <Link className={styles.see_more} href="/contact">
          Contact me
        </Link>
      </div>

      <div className={styles.about_me_user_image}>
        <Image src={avatarBigger} alt="logo" width={500} height={500} />
      </div>
    </div>
  );
}

