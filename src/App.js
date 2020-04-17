import React from 'react';
import { connect } from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { removeFeature, buyItem } from './redux/actions'

const App = (props) => {

  const removeFeature = item => {
    props.removeFeature(item)
  };

  const buyItem = item => {
    const features = props.car.features
    const featureAlreadyOwned = features.find(feature => {
      return feature.id === item.id
    })
    if (!featureAlreadyOwned) {
      props.buyItem(item)
    }
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures 
          car={props.car}
          removeFeature={removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures 
            buyItem={buyItem} 
            additionalFeatures={props.additionalFeatures} 
        />
        <Total 
          car={props.car} 
          additionalPrice={props.additionalPrice} 
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // const { additionalFeatures, additionalPrice, car } = state
  console.log(state)
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  { removeFeature, buyItem }
)(App);
