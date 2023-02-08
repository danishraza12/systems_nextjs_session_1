import path from 'path';
import fs from 'fs';
import Link from 'next/link';

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {
        products.map(product => {
          return (
            <li key={product.id}>
              <Link href={{ 
                pathname: `/products/${product.id}` 
              }}>
                { product.title }
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      }
    }
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 60
  };
}

export default HomePage;
