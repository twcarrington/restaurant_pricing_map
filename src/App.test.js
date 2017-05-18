import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('The main app', () => {
    it('the app should have text', () => {
        const app  = shallow(<App/>);
        expect(app.contains(<div>Hello jest from react</div>)).toBe(true);
    })
})
