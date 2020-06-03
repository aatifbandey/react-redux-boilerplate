import React from 'react';
import { shape } from 'prop-types';

import { connect } from 'react-redux';
import { designerReducer } from './reducer';
import designerSaga from './saga';
import SurveyDesigner from './components';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

const SurveyContainer = (props) => {
  useInjectReducer({ key: 'designerReducer', reducer: designerReducer });
  useInjectSaga({ key: 'designerSaga', saga: designerSaga });
  const { reducerData } = props;

  return (
    <>{reducerData ? <SurveyDesigner {...props} /> : <div> Loading </div>}</>
  );
};

SurveyContainer.propTypes = {
  reducerData: shape({}).isRequired,
};

function mapStateToProps(props) {
  return {
    reducerData: props.designerReducer || false,
  };
}
export default connect(mapStateToProps)(SurveyContainer);
