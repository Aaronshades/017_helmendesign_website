import ProjectCard from '../components/Cards/ProjectCard/ProjectCard';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.css';

const Home = ({ title, description, ...props }) => {
  return (
    <div className={styles.container}>
      <Layout pageTitle={title} description={description}>
        <h1 className={styles.title}>Helmen Design</h1>
        <div>
          <ProjectCard
            imageSrc="/images/LowF-stop.jpg"
            imgAlt="Test"
            cardTitle="New cards"
            cardDescription="Awesome cards coming here"
          />
        </div>
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
