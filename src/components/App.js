import './App.css';
import Header from './Header';
import Category from './Category';
import GridCard from './GridCard';

function App() {
  const Datas= [
    {
        id: 1,
        imgURL: 'https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png',
        title: 'What is Web Scraping?',
        author: 'Zac Clancy',
        date: '25 Sep 2019',
        description: 'Simply put, web scraping is one of the tools developers use to gather and analyze information from the internet. Some websites and platforms offer application...'
    },
    {
        id: 2,
        imgURL: 'https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png',
        title: 'Practical Machine Learning with Python...',
        author: 'Daniel Pyrathon ',
        date: '16 Oct 2019',
        description: 'Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively...'
    },
    {
        id: 3,
        imgURL: 'https://edyoda.s3.amazonaws.com/media/blog-images/data-mining-an-overview.jpg',
        title: 'Data Mining: An overview',
        author: 'EdYoda',
        date: '21 Jul 2019',
        description: 'The process used by companies to convert raw data into useful information is called Data Mining. It is a process of searching, collecting, filtering and analyzin...'
    },
    {
        id: 4,
        imgURL: 'https://edyoda.s3.amazonaws.com/media/blog-images/overview-of-natural-language-processing-in-artificial-intelligence.jpg',
        title: 'Overview of Natural Language Processing i...',
        author: 'Edyoda',
        date: '21 Jul 2019',
        description: 'Over the last few years, Artificial Intelligence has made a prominent space as it uses technology that has...'
    },
    {
        id: 5,
        imgURL: 'https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg',
        title: 'Introducing EdYoda - www.edyoda.com',
        author: 'Arman Ahmed',
        date: '05 Jul 2019',
        description: 'If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. We...'
    },
    {
        id: 6,
        imgURL: 'https://edyoda.s3.amazonaws.com/media/blog-images/react-native-vs-flutter.png',
        title: 'React Native Vs Flutter: Breaking the confusion...',
        author: 'EdYoda',
        date: '12 Aug 2019',
        description: 'The two biggest social platforms have created a buzz in the application development industry. React Native by Facebook and Flutter by Google are the latest...'
    }
  ];

  return (
    <div className="App">
      <Header/>
      <div className='body'>
      <Category/>
      <GridCard Datas={Datas}/>
      </div>
    </div>
  );
}

export default App;
