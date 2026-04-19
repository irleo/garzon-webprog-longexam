import Button from "../../components/Button";
import nu_bg from "../../assets/img/nu-background.png";
import category1 from "../../assets/img/category1.jpg";
import category2 from "../../assets/img/category2.jpg";
import category3 from "../../assets/img/category3.jpg";
import category4 from "../../assets/img/category4.jpg";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-accent border-y-2 bg-section px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-primary bg-surface p-6">
            <img
              src={nu_bg}
              alt="BulldogEx"
              className="h-full w-full border-primary object-contain"
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              BulldogEx Shop keeps the low-fidelity layout system while
              presenting clear product categories, quick actions, and
              straightforward store information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
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
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-primary bg-surface p-5">
            <p className="text-2xl font-bold text-default">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-primary bg-surface p-5">
            <p className="text-2xl font-bold text-default">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-primary bg-surface p-5">
            <p className="text-2xl font-bold text-default">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-primary bg-surface p-5">
            <p className="text-2xl font-bold text-default">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-accent bg-section px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-soft">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Stacked shopping wireframe
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-primary bg-surface p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Curated Catalog
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Products are grouped by daily need so shoppers can scan
                  faster.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-primary bg-surface p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Simple Checkout
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Product pages keep price, stock, and action buttons easy to
                  find.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-primary bg-surface p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Pickup Ready
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Store information stays direct for students who need quick
                  order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-primary bg-surface p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  src={category1}
                  alt="category-1"
                  className="w-full h-full object-cover rounded-[1.25rem]"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  src={category2}
                  alt="category-2"
                  className="w-full h-full object-cover rounded-[1.25rem]"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  src={category3}
                  alt="category-3"
                  className="w-full h-full object-cover rounded-[1.25rem]"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img
                  src={category4}
                  alt="category-4"
                  className="w-full h-full object-cover rounded-[1.25rem]"
                />
              </div>
            </div>
            <Button to="/products" className="mt-5">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;