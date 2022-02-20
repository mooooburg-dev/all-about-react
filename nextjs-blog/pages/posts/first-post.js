import Link from 'next/link';
import Head from 'next/Head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { useEffect } from 'react';

export default function FirstPost() {
  const router = useRouter();

  useEffect(() => {
    router.push('/posts/first-post/?counter=10', undefined, { shallow: true });
  }, []);

  useEffect(() => {
    alert(router.query.counter);
  }, [router.query.counter]);

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
