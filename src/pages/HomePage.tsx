import Banner from "../components/Banner";
import BrandList from "../components/BrandList";
import ToyCarouselList from "../components/ToyCarouselList";
import { TOY_LIST } from "../models/toy";

function HomePage() {
  return (
    <>
      <Banner />

      {/* Toy List */}
      <div className="d-flex flex-column gap-3 mt-4">
        <ToyCarouselList title="Special Sales" toyList={TOY_LIST} />
        <ToyCarouselList title="Special Sales" toyList={TOY_LIST} />
        <ToyCarouselList title="Special Sales" toyList={TOY_LIST} />
      </div>

      <BrandList />
    </>
  );
}

export default HomePage;
