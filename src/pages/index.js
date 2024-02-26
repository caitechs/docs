import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Carousel } from '@site/src/components/carousel';
import About from "@site/src/components/about";
import Why from "@site/src/components/why";
import Supporters from "@site/src/components/supporters";
import BlogPost from "@site/src/components/blogPOst";

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <Carousel/>
      <About/>
      <Why/>
      <Supporters/>
      <BlogPost/>
    </Layout>
  );
}
