import Layout from "../app/components/Layout";
import BlogGrid from "../app/components/BlogGrid";
export default function Home() {
  return (
    <Layout>
      <section style={{ textAlign: "center", padding: "2rem" }}>
        <BlogGrid />
      </section>
    </Layout>
  );
}
