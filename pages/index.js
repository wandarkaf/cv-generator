import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const PostLink = ({ show }) => (
  <li>
    <Link href="/post/[id]" as={`/post/${show.id}`}>
      <a>{show.name}</a>
    </Link>
    <style jsx>{`
    li {
      list-style: none;
      margin: 5px 0;
    }

    a {
      text-decoration: none;
      color: blue;
      font-family: 'Arial';
    }

    a:hover {
      opacity: 0.6;
    }
  `}</style>
  </li>
);

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <PostLink key={show.id} show={show} />
      ))}
    </ul>
    <p>{props.studies[0].id}</p>
    <p>{props.studies[0].school_EN}</p>
    <p>{props.studies[0].school_ES}</p>
    <style jsx>{`
    h1,
    a {
      font-family: 'Arial';
    }

    ul {
      padding: 0;
    }

    li {
      list-style: none;
      margin: 5px 0;
    }

    a {
      text-decoration: none;
      color: blue;
    }

    a:hover {
      opacity: 0.6;
    }
  `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const res2 = await fetch('https://cv-quick-db.kamina.now.sh/studies?profileId=1&_sort=startDate&_order=asc');
  const data = await res.json();
  const data2 = await res2.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show),
    studies: data2
  };
};

export default Index;
