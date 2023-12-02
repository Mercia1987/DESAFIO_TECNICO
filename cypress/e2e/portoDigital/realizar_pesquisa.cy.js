/// <reference types="cypress" />


describe('Realizar uma visita no site', () => {
    
    it('Consultar as ultimas noticias', () => {
        
        cy.visit('https://www.portodigital.org/')
        cy.get('.latest-news-wrapper > .section-title').should('contain','Últimas Notícias')
      
    });
    it('Consultar Parceiros', () => {
        
        cy.visit('https://www.portodigital.org/')
        cy.get('#partners-carousel > .section-title').should('contain','NOSSOS PARCEIROS')

    });

    it('Verificar se existe no site', () => {
        cy.visit('https://www.portodigital.org/')
        cy.title('.post-title').title('Conheça o Porto Digital, o maior parque tecnológico urbano e aberto do Brasil')
        

    });


});