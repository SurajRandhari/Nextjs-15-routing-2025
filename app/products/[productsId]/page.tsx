export default async function ProductsDetails({params}: {params: {productsId: string}}) {
    const {productsId} = params;
    console.log("productsId", productsId);
    
    return (
      <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2>This is Products page {productsId} </h2>
      </div>
    );
  }