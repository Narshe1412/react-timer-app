var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', ()=>{
        expect(Controls).toExist();
    })
    
    describe('render', () => {
        it('should render pause when started', ()=>{
            //var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            //previous line throws a warning during the test becasue of requiredproperty
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={() =>{}}/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        })

        it('should render start when paused', ()=>{
            //var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            //previous line throws a warning during the test becasue of requiredproperty
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" onStatusChange={()=>{}}/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Start)');

            expect($pauseButton.length).toBe(1);
        })

    })
})

