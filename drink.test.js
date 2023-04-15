function drinkAll(callback, flavour) {
    if (flavour !== 'octopus') {
      callback(flavour);
    }
  }
  
  describe('drinkAll', () => {
  
    test('drinks something lemon-flavoured', () => {
      const drink = jest.fn();
      drinkAll(drink, 'lemon');
      
      expect(drink).toHaveBeenCalled(); // 함수 호출 O
    });
  
    test('does not drink something octopus-flavoured', () => {
      const drink = jest.fn();
      drinkAll(drink, 'octopus');
      
      expect(drink).not.toHaveBeenCalled(); // 함수 호출 X
    });
  });