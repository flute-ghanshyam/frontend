import Layout from "../app/components/Layout";
import BlogSlider from "../app/components/FeaturedBlog";
import BannerSlider from "../app/components/BannerSlider";
export default function Home() {
  return (
    <Layout>
      <section style={{ textAlign: "center", padding: "2rem" }}>
        <BannerSlider />
      </section>
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
        <BlogSlider />
      </section>
    </Layout>
  );
}
