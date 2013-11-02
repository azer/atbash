var atbash = require("./");

it('substitutes input with latin letters', function(){
  expect(atbash('abcdefghijklmnopqrstuvwxyz')).to.equal('zyxwvutsrqponmlkjihgfedcba');
  expect(atbash('money')).to.equal('nlmvb');
  expect(atbash('hold')).to.equal('slow');
  expect(atbash('holy')).to.equal('slob');
  expect(atbash('Azer')).to.equal('Zavi');
  expect(atbash('Atbash is a simple substitution cipher for the Hebrew alphabet.')).to.equal('Zgyzhs rh z hrnkov hfyhgrgfgrlm xrksvi uli gsv Svyivd zokszyvg.');
});

/*it('substitutes input with hebrew letters', function(){
  expect(atbash('אבגדהוזחטיכלמנסעפצקרשת')).to.equal('תשרקצפעסנמלכיטחזוהדגבא');
});*/
