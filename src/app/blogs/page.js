import Layout from "../components/Layout";
import BlogGrid from "../components/BlogGrid";
export default function Blogs() {
  return (
    <Layout>
      <section style={{ padding: "2rem" }}>
        <BlogGrid />
      </section>
    </Layout>
  );
}
