import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

const Home = ({ title, description, ...props }) => {
  return (
    <div className={styles.container}>
      <Layout pageTitle={title} description={description}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Helmen Design</h1>
        </main>
      </Layout>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
