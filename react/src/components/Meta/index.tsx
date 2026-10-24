import { Helmet } from "react-helmet";


const Index = ({ metaData }: MetaProps) => {
    const nonce = document
    .querySelector('meta[name="csp-nonce"]')
    ?.getAttribute("content");

  return (nonce && (
      <Helmet>
            <meta charSet="utf-8" />
            <title>{metaData.title}</title>
            <meta name="description" content={metaData.description} />
            <link rel="canonical" href={`http://localhost/${metaData.url}`} />
            <style nonce={nonce}>
              {`.custom-class { color: red; }`}
            </style>
          </Helmet>
  )
  );
};

interface MetaProps {
  metaData: {
    description: string;
    title: string;
    url: string;
  };
}

export default Index;
