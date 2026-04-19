import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-primary bg-surface-alt p-4">
      <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-white">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain rounded-[1.25rem]"
            />
          </div>
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-default">{product.title}</h3>
      <p className="mt-2 text-base font-bold text-default">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-soft">
        {product.content[0].substring(0, 40)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-4">View Product</Button>
    </article>
  );
};

export default ProductCard;