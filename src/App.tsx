
import React, {useState, useEffect} from 'react';
import { Logo } from './components/Logo';
import { Headline } from './components/Headline';
import { ListingCard } from './components/ListingCard';
import { ListingInfo } from './utils/Types';

const App = () => {
  const [data, setData] = useState<ListingInfo[]>();

  useEffect(() => {
    fetch('./api/saved-listings')
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <div >
		<header>
			<div className="container">
				<Logo/>
			</div>
		</header>
		<section className='headline'>
			<div className="container">
			<Headline label="Recommended For you"/>
			</div>
		</section>
		<div className="container">
			<section className="cards-container">
				{data?.map((info) => <ListingCard key={info.id} info={info}/>)}
			</section>
		</div>
	</div>;
};

export default App;
