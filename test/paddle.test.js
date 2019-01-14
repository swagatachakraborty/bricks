describe('Paddle', function() {
  const expect = chai.expect;
  let paddle;
  beforeEach(function() {
    paddle = new Paddle(20, 100, 2, 100);
  });

  it('moveLeft: should decrease the left of paddle by 10', function() {
    paddle.moveLeft();
    expect(paddle)
      .to.have.property('left')
      .equal(90);
  });

  it('moveRight: should increase the left of paddle by 10', function() {
    paddle.moveRight();
    expect(paddle)
      .to.have.property('left')
      .equal(110);
  });
});