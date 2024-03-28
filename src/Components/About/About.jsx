const About = () => {
  return (
    <div className='bg-gray-100 my-24'>
      <div className='bg-green-500 py-20 text-center text-white'>
        <h1 className='text-4xl font-bold mb-4'>About Us</h1>
        <p className='text-lg'>Welcome to our book review website!</p>
      </div>

      <div className='container mx-auto py-12 px-4'>
        <h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
        <p className='text-lg mb-8'>
          Our mission is simple: to help readers find their next great read. We
          believe in providing honest, unbiased reviews to guide book lovers in
          their literary adventures.
        </p>

        <h2 className='text-2xl font-semibold mb-4'>Website History</h2>
        <p className='text-lg'>
          Founded in 2020, our website has been dedicated to sharing our passion
          for books with the world. Since then, we've grown into a community of
          avid readers who are passionate about discovering and discussing the
          latest literary gems.
        </p>
      </div>
    </div>
  );
};

export default About;
