import Hero from "../../components/hero";
import Testimonial from "../../components/testimonial";

export default function Home() {
    return (
      <>
        <Hero />
        <Testimonial />
        <Route path="/admin/genres" element={<GenreAdmin />} />
        <Route path="/admin/authors" element={<AuthorAdmin />} />
      </>
    );
}