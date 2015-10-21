import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {

  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

  describe('a list', () => {
    function addCharacter(currentState, character) {
      return currentState.push(character);
    }

    it('is immutable', () => {
      let state = List.of('Donald Trump', 'Ted Cruz');
      let nextState = addCharacter(state, 'Ben Carson');

      expect(nextState).to.equal(List.of(
        'Donald Trump',
        'Ted Cruz',
        'Ben Carson'
      ));
      expect(state).to.be.equal(List.of(
        'Donald Trump',
        'Ted Cruz'
      ));
      expect(state).to.not.be.equal(nextState);
    });
  });

  describe('a tree', () => {
    function addCharacter(currentState, character) {
      return currentState.set(
        'characters',
        currentState.get('characters').push(character)
      );
    }

    it('is immutable', () => {
      let state = Map({
        characters: List.of('Donald Trump', 'Ted Cruz')
      });
      let nextState = addCharacter(state, 'Ben Carson');

      expect(nextState).to.equal(Map({
        characters: List.of(
          'Donald Trump',
          'Ted Cruz',
          'Ben Carson'
        )
      }));
      expect(state).to.equal(Map({
        characters: List.of(
          'Donald Trump',
          'Ted Cruz'
        )
      }));
    });
  });
});
