import Layout from "../components/layout";
import Entrada from "../components/Entrada";
import styles from "../styles/Blog.module.css";
const Blog = ({ entradas }) => { 
  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <h2 className="heading">

        </h2>
        <div className={styles.blog}>
          {entradas.data.map(entrada => (
            <Entrada key={entrada.id}
              entrada={entrada}
            />
        ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/api/blogs?populate=imagen`
  
  const respuesta = await fetch(url);  
  const entradas = await respuesta.json();
  return {
    props:{
    entradas,
    }, 
  }
}

export default Blog;
