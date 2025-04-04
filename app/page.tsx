import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  return (
    <>
      <Navbar />
      <Hero params={searchParams} />
      <Cards />
    </>
  );
}
