import React from 'react';
//import errorImage from '@/assets/error.jpg';
import { errorContainer, } from './styles';
 
const ErrorView = () => (
 <React.Fragment>
   <div className={errorContainer}>
     {/*<img alt="" src={errorImage} />*/}
     <h1>We need to fix something</h1>
     <div>Wait a bit, let Toped fix that first. Please try again or come back later </div>
   </div>
 </React.Fragment>
);
 
export default ErrorView;