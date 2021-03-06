import React from 'react'
import { Link, useIndexPage, helpers, logger } from 'ice'

console.log('helpers from ice', helpers);
console.log('logger from ice', logger);

logger.info('=== info ===');
logger.warn('=== warn ===');

const Home = (props) => {
  const page = useIndexPage()

  console.log('Home props', props);
  console.log('render home', { page });
  return (
    <>
      <h2>Home Page...{props.a}</h2>
      <Link to="/about">About</Link><br />
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

Home.getInitialProps = async () => {
  return {a: 1}
};

Home.pageConfig = {
  title: 'hahah'
};

export default Home
