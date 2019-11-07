describe('Table Sort', () => {

    it('Amount should be sortable', () => {
        let beforeSorting = []
        let afterSorting = []
        cy.visit('https://demo.applitools.com/hackathon.html#')
        cy.get('#username').type('username')
        cy.get('#password').type('password')
        cy.get('#log-in').click()
        cy.get('td').filter('.text-right').each((element) => {
            beforeSorting.push(element[0].firstElementChild.innerHTML.split(' U')[0])
        }).then(() => {
            console.log(beforeSorting)
            const isBeforeSorted = beforeSorting.slice(1).every((item, i) => beforeSorting[i] <= item)
            console.log(isBeforeSorted)
            expect(isBeforeSorted).to.be.false
        })
        cy.get('#amount').click()
        cy.get('td').filter('.text-right').each((element) => {
            afterSorting.push(element[0].firstElementChild.innerHTML.split(' U')[0])
        }).then(() => {
            console.log(afterSorting)
            const isSorted = afterSorting.slice(1).every((item, i) => afterSorting[i] <= item)
            console.log(isSorted)
            expect(isSorted).to.be.false
        })
    })
})