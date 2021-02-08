describe('전체 테스트이름', ()=>{
  before(() => {
    cy.visit('http://localhost:5500/index.html');
  })

  it('세부 테스트이름', ()=>{
    // 입력
    cy.get('#car-names-input').type('115');
    // 클릭
    cy.get('#car-names-submit').click();
  })
})
