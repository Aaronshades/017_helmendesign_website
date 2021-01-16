import ProjectCard from '../components/Cards/ProjectCard/ProjectCard';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.css';

const Home = ({ title, description, ...props }) => {
  return (
    <div className={styles.container}>
      <Layout pageTitle={title} description={description}>
        <h1 className={styles.title}>Helmen Design</h1>
        <h2 style={{ textAlign: 'center' }}>More content coming soon</h2>
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
