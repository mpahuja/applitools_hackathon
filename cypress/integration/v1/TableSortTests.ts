describe('v1 Table Sort:', () => {
    it('Amount should be sortable', () => {
        let beforeSorting: number[] = []
        let afterSorting: number[] = []
        cy.visit('/hackathon.html#')
        cy.get('#username').type('username')
        cy.get('#password').type('password')
        cy.get('#log-in').click()
        cy.get('td').filter('.text-right').each((element) => {
            const priceValue = element[0].firstElementChild!.innerHTML.replace(/\s/g, '').replace(/,/g, '').split('U')
            beforeSorting.push(parseFloat(priceValue[0]))
        }).then(() => {
            const isBeforeSorted = beforeSorting.slice(1).every((item, i) => beforeSorting[i] <= item)
            expect(isBeforeSorted).to.be.false
        })
        cy.get('#amount').click()
        cy.get('td').filter('.text-right').each((element) => {
            const priceValueAfter = element[0].firstElementChild!.innerHTML.replace(/\s/g, '').replace(/,/g, '').split('U')
            afterSorting.push(parseFloat(priceValueAfter[0]))
        }).then(() => {
            const isSorted = afterSorting.slice(1).every((item, i) => afterSorting[i] <= item)
            expect(isSorted).to.be.true
        })
    })
})