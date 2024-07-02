'use client';
import { useEffect } from 'react';
import { useUserContext } from '@/context/UserContext';
import styles from './page.module.css';
import Image from 'next/image';
import { RowInformation, Title } from '@/components';
import Link from 'next/link';
import Loading from './loading';
export default function HomePage() {
  const { user, setUser } = useUserContext();
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

  const callInfoUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=1');
      const data = await response.json();
      const userResult = data.results[0];
      console.log(userResult);
      const userData = {
        name: userResult.name.first + ' ' + userResult.name.last,
        age: userResult.dob.age,
        address: userResult.location.street.name,
        city: userResult.location.city,
        state: userResult.location.state,
        proffession: 'Developer',
        country: userResult.location.country,
        description:
          'is passionate about web development with a focus on the client side. His experience ranges from creating attractive user interfaces to optimizing web application performance.',
        avatar: userResult.picture.thumbnail,
        avatarBigger:
          'https://img.freepik.com/foto-gratis/hombre-brazos-cruzados_1368-9618.jpg?t=st=1719903672~exp=1719907272~hmac=1f5329dd582d7affa0869a00111fe30063ce45659f2cd1a87aee4d7c5c6bc586&w=740',
        interests: ['Music', 'Football', 'Cooking'],
      };
      setUser(userData);
    } catch (error) {
      console.log(error);
      setUser({
        name: 'Milei',
        avatarBigger: 'https://xsgames.co/randomusers/avatar.php?g=male',
        city: 'Lima',
        state: 'Lima',
        country: 'Peru',
        age: 23,
        proffession: 'Developer',
        description:
          'is passionate about web development with a focus on the client side. His experience ranges from creating attractive user interfaces to optimizing web application performance.',
        interests: ['Music', 'Drive'],
      });
    }
  };

  useEffect(() => {
    if (!user) {
      callInfoUser();
    }
  }, [user]);

  if (user === null) return <Loading />;

  return (
    <div className={styles.about_me}>
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

