import path from 'path';
import fs from 'fs';
import { Fragment } from 'react';

const ProductDetailsPage = ({ loadedProduct }) => {  
  return (
    <Fragment>
      <h1> { loadedProduct.title } </h1>
      { loadedProduct.description }
    </Fragment>
  )
}

export const getStaticProps = async (context) => {
  const { params } = context;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find(p => p.id === params.pid);

  return {
    props: {
      loadedProduct: product
    }
  }
}

export default ProductDetailsPage;