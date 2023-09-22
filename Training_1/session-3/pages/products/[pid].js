import path from 'path';
import fs from 'fs';
import { Fragment } from 'react';

const ProductDetailsPage = ({ loadedProduct }) => {  
  // This if is not required with 'blocking' in fallback
  if (!loadedProduct) {
    return (
      <p> ...Loading </p>
    )
  }

  return (
    <Fragment>
      <h1> { loadedProduct.title } </h1>
      <p> { loadedProduct.description } </p>
    </Fragment>
  )
}

const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps (context) {
  const { params } = context;
  const data = await getData();
  const product = data.products.find(p => p.id === params.pid);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product
    }
  }
}

export async function getStaticPaths (context) {
  const data = await getData();

  const ids = data.products.map(product => product.id);
  
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  
  return {
    // These IDs are used to pre-render pages
    paths: pathsWithParams,
    fallback: true, // true or 'blocking'
  }
}

export default ProductDetailsPage;