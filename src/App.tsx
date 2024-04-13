import {
  Billing,
  Cta,
  Features,
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
    </Layout>
  );
}

export default App;
