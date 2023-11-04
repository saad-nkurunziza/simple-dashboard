import {
  Billing,
  Cta,
  Features,
  Footer,
  Hero,
  Layout,
  Navbar,
  Sponsors,
  Stats,
  Testimonials,
} from "./components";
function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Features />
      <Billing />
      <Stats />
      <Testimonials />
      <Sponsors />
      <Cta />
      <Footer />
    </Layout>
  );
}

export default App;
