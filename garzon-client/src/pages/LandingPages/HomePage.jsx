import Button from "../../components/Button";
import banner from "../../assets/img/nu_bulldogex_banner.jpg";
import daily_essentials from "../../assets/img/daily_essentials.png";
import study_supplies from "../../assets/img/study_supplies.jpg";
import campus_apparel from "../../assets/img/campus_apparel.jpg";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-accent bg-section px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/45" />

        <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
              Campus Marketplace
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Welcome to BulldogEx Shop
            </h1>
            <p className="mt-4 text-sm leading-7 text-white sm:text-base">
              Explore campus uniforms, student essentials, and school merch in
              one quick storefront.
            </p>
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <Button to="/products">Shop Now</Button>
              <Button to="/about" variant="primary">
                About Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-accent bg-section px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-soft">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-default">
            Quick shopping blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-primary bg-surface-alt p-5">
            <p className="text-2xl font-bold text-default">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              Products
            </p>
          </div>
          <div className="rounded-3xl border-2 border-primary bg-surface-alt p-5">
            <p className="text-2xl font-bold text-default">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-primary bg-surface-alt p-5">
            <p className="text-2xl font-bold text-default">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              Orders
            </p>
          </div>
          <div className="rounded-3xl border-2 border-primary bg-surface-alt p-5">
            <p className="text-2xl font-bold text-default">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              Pickup Slots
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-accent bg-section px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-soft">
            Shop Sections
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-default">
            Simple store cards
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-primary bg-surface-alt p-4">
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-primary-soft">
              <img
                src={daily_essentials}
                alt="daily-essentials"
                className="w-full h-full object-cover rounded-[1.25rem]"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-default">
              Daily Essentials
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Bags, tumblers, lanyards, and items used every school day.
            </p>
            <Button to="/products" className="mt-4" variant="primary">
              View Products
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-primary bg-surface-alt p-4">
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-primary-soft">
              <img
                src={study_supplies}
                alt="study-supplies"
                className="w-full h-full object-cover rounded-[1.25rem]"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-default">
              Study Supplies
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Notes, desk tools, and study kits for class.
            </p>
            <Button to="/products" className="mt-4" variant="primary">
              Shop Supplies
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-primary bg-surface-alt p-4">
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-primary-soft">
              <img
                src={campus_apparel}
                alt="campus-apparel"
                className="w-full h-full object-cover rounded-[1.25rem]"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-default">
              Campus Apparel
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Comfortable pieces for class days and weekends.
            </p>
            <Button to="/products" className="mt-4" variant="primary">
              View Apparel
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;