import Card from './components/card/Card';
import './Page.scss';

const Page = () => {
  return (
    <section className="page">
      <h1 className="page__header">Ты сегодня покормил кота?</h1>
      <div className='page__card-wrapper'>
        <Card 
          tasteName='фуа-гра' 
          quantityInPack={10} 
          giftNumber={1}
          weight={0.5}
          units="кг"
          disabled={true}
          labelSelected='Печень утки разварная с артишоками.'
        />
        <div className="page__card-row">
          <Card 
            tasteName='рыбой' 
            quantityInPack={40} 
            giftNumber={2}
            weight={2}
            units="кг"
            labelSelected='Головы щучьи с чесноком да свежайшая сёмгушка.'
          />
          <Card 
            tasteName='курой' 
            quantityInPack={100} 
            giftNumber={5}
            weight={5}
            units="кг"
            labelSelected='Филе из цыплят с трюфелями в бульоне.'
          />
        </div>
        
      </div>
    </section>
  );
}

export default Page;
