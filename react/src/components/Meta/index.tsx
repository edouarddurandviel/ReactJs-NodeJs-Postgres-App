import { Helmet } from "react-helmet";

const Index = ({ metaData }: MetaProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <link rel="canonical" href={`http://mysite.com/${metaData.url}`} />
    </Helmet>
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
