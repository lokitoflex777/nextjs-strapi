const EntradaBlog = ({ posts }) => {
  return <div>{posts.titulo}</div>;
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/api/blogs`);
  const post = await res.json();
  const paths = post.data.map((post) => ({
    params: { id: post.attributes.id },
  }));
  console.log(paths[0].params.id)
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`${process.env.API_URL}/api/blogs/${id}`);
  const posts = await res.json();
  return { 
    props: {posts :posts.data}
    }
};



export default EntradaBlog;
